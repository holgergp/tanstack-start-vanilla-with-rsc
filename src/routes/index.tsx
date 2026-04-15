import { createFileRoute } from '@tanstack/react-router'
import { getComponentFromServer } from '#/server/functions.tsx'

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => ({
    serverComponent: getComponentFromServer(),
  }),
})

function App() {
  const { serverComponent } = Route.useLoaderData()

  return <>{serverComponent}</>
}
