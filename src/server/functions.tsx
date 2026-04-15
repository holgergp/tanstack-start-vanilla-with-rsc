import { createServerFn } from '@tanstack/react-start'
import { renderServerComponent } from '@tanstack/react-start/rsc'

export const getComponentFromServer = createServerFn().handler(async () => {
  return renderServerComponent(<div>Hello from the server!</div>)
})
