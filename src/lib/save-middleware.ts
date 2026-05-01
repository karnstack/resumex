import { Plugin } from 'vite'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'

const RESUMES_DIR = path.resolve(process.cwd(), 'resumes')

export function saveMiddlewarePlugin(): Plugin {
  return {
    name: 'resumex-save',
    configureServer(server) {
      server.middlewares.use('/api/save', async (req, res, next) => {
        if (req.method !== 'POST') return next()
        try {
          let body = ''
          for await (const chunk of req) body += chunk
          const { variant, content } = JSON.parse(body) as {
            variant: string
            content: string
          }
          if (!/^[a-z0-9-]+$/i.test(variant)) {
            res.statusCode = 400
            res.end('invalid variant name')
            return
          }
          await fs.mkdir(RESUMES_DIR, { recursive: true })
          const target = path.join(RESUMES_DIR, `${variant}.md`)
          // safety: target must be inside RESUMES_DIR
          if (!target.startsWith(RESUMES_DIR + path.sep)) {
            res.statusCode = 400
            res.end('path traversal blocked')
            return
          }
          await fs.writeFile(target, content, 'utf-8')
          res.statusCode = 200
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ ok: true, path: target }))
        } catch (err) {
          res.statusCode = 500
          res.end(String(err))
        }
      })
    },
  }
}
