import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <li>
      <ul>
        <Link to={'/serverComponent'}>With Server Components</Link>
      </ul>
      <ul>
        <Link to={'/compositeComponent'}>With Composite Server Components</Link>
      </ul>
    </li>
  )
}
