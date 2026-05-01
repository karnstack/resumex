import { Plugin } from 'vite'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'

const RESUMES_DIR = path.resolve(process.cwd(), 'resumes')

export function listMiddlewarePlugin(): Plugin {
  return {
    name: 'resumex-list',
    configureServer(server) {
      // Vite strips the '/api/resumes' prefix - req.url will be '/' or '/<variant>'
      server.middlewares.use('/api/resumes', async (req, res, next) => {
        if (req.method !== 'GET') return next()
        try {
          await fs.mkdir(RESUMES_DIR, { recursive: true })
          // req.url is prefix-stripped: '/' means list, '/<variant>' means load one
          const stripped = (req.url ?? '/').replace(/\?.*$/, '') // drop query string
          const segments = stripped.split('/').filter(Boolean)

          if (segments.length === 0) {
            // list all variants
            const entries = await fs.readdir(RESUMES_DIR)
            const variants = entries
              .filter((f) => f.endsWith('.md') && !f.startsWith('.'))
              .map((f) => f.replace(/\.md$/, ''))
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify({ variants }))
            return
          }

          if (segments.length === 1) {
            const variant = segments[0]
            if (!/^[a-z0-9-]+$/i.test(variant)) {
              res.statusCode = 400
              res.end('invalid variant')
              return
            }
            const target = path.join(RESUMES_DIR, `${variant}.md`)
            if (!target.startsWith(RESUMES_DIR + path.sep)) {
              res.statusCode = 400
              res.end('blocked')
              return
            }
            try {
              const content = await fs.readFile(target, 'utf-8')
              res.setHeader('content-type', 'text/markdown')
              res.end(content)
            } catch {
              res.statusCode = 404
              res.end('not found')
            }
            return
          }

          res.statusCode = 404
          res.end()
        } catch (err) {
          res.statusCode = 500
          res.end(String(err))
        }
      })
    },
  }
}
