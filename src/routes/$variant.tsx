import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Editor } from '@/components/editor/Editor'
import { listVariants } from '@/lib/load-resume'
import { isPublic } from '@/lib/mode'

export const Route = createFileRoute('/$variant')({
  beforeLoad: () => {
    if (isPublic) throw new Error('not available on public deploy')
  },
  component: VariantRoute,
})

function VariantRoute() {
  const { variant } = Route.useParams()
  const [variants, setVariants] = useState<string[]>([])
  useEffect(() => {
    listVariants()
      .then(setVariants)
      .catch(() => setVariants([]))
  }, [])
  return <Editor variant={variant} variants={variants} />
}
