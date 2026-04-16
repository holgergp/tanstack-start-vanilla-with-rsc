import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="p-4 border-2 border-dashed border-blue-500">
      <h1 className={'font-bold py-2'}>Tanstack Start and RSC</h1>
      <section className={'py-2'}>
        This explores Tanstack Starts current capabilities with RSC and its
        differences to Next.js
      </section>
      <ul className="flex flex-col gap-2">
        <li>
          <Link to={'/serverComponent'}>With Server Components</Link>
        </li>
        <li>
          <Link to={'/compositeComponent'}>
            With Composite Server Components
          </Link>
        </li>
        <li>
          <Link to={'/componentByQuery'}>
            With Components loaded by Tanstack Query
          </Link>
        </li>
      </ul>
    </main>
  )
}
