import { createServerFn } from '@tanstack/react-start'
import {
  createCompositeComponent,
  renderServerComponent,
} from '@tanstack/react-start/rsc'

export const getComponentFromServer = createServerFn().handler(async () => {
  return renderServerComponent(<div>Hello from the server!</div>)
})

export const getCompositeComponent = createServerFn().handler(async () => {
  const src = await createCompositeComponent(
    (props: {
      children?: React.ReactNode
      messageComponent: React.ComponentType<{ message: string }>
    }) => {
      const MessageComponent = props.messageComponent
      return (
        <>
          <div>{props.children}</div>
          <MessageComponent message={'Hello From the server!'} />
        </>
      )
    },
  )

  return { src }
})
