import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="border-2 border-dashed border-blue-500 p-4">
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
          <Link to={'/componentByQuery'}>Get Components by Query</Link>
        </li>
      </ul>
    </div>
  )
}
