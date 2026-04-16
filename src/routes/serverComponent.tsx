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

  return (
    <main className="p-4 border-2 border-dashed border-blue-500">
      <h2 className={'mx-auto max-w-md font-bold py-2'}>
        RSC loaded by Tanstack Router
      </h2>
      {serverComponent}
    </main>
  )
}
