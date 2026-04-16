import { createFileRoute } from '@tanstack/react-router'
import { getComponentFromServer } from '#/server/functions.tsx'

export const Route = createFileRoute('/serverComponent')({
  component: ServerComponent,
  loader: async () => ({
    serverComponent: getComponentFromServer(),
  }),
})

function ServerComponent() {
  const { serverComponent } = Route.useLoaderData()

  return <>{serverComponent}</>
}
