import { createFileRoute } from '@tanstack/react-router'
import { CompositeComponent } from '@tanstack/react-start/rsc'
import { getCompositeComponent } from '#/server/functions.tsx'

export const Route = createFileRoute('/compositeComponent')({
  component: WithCompositeComponent,
  loader: async () => await getCompositeComponent(),
})

function WithCompositeComponent() {
  const { src } = Route.useLoaderData()
  return (
    <main className="px-4 py-8">
      <h2 className={'mx-auto max-w-md'}>RSC With Composite Components</h2>
      <CompositeComponent src={src} messageComponent={MyMessageComponent}>
        <button onClick={() => alert('Clicked!')}>Click me</button>
      </CompositeComponent>
    </main>
  )
}

function MyMessageComponent({ message }: { message: string }) {
  return <div>{message}</div>
}
