import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <main className="p-8">
      <h1>resumex</h1>
      <p>scaffold ok</p>
    </main>
  ),
})
