import { createFileRoute } from '@tanstack/react-router'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { createFromReadableStream } from '@tanstack/react-start/rsc'
import { getRenderableStream } from '#/server/functions.tsx'

const queryClient = new QueryClient()

export const Route = createFileRoute('/componentByQuery')({
  component: () => {
    return (
      <QueryClientProvider client={queryClient}>
        <ComponentByQuery />
      </QueryClientProvider>
    )
  },
})

function ComponentByQuery() {
  const query = useQuery({
    queryKey: ['conponentByQuery'],
    queryFn: async () =>
      // Create a renderable element from the stream
      createFromReadableStream(
        // Call our server function to get the stream
        await getRenderableStream(),
      ),
  })
  return (
    <main className="p-4 border-2 border-dashed border-blue-500">
      <h2 className={'font-bold py-2'}>
        RSC loaded by Tanstack Query{' '}
      </h2>{' '}
      {query.data}
    </main>
  )
}
