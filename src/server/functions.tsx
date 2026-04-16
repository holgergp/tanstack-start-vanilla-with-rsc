import { createServerFn } from '@tanstack/react-start'
import {
  createCompositeComponent,
  renderServerComponent,
} from '@tanstack/react-start/rsc'

export const getComponentFromServer = createServerFn().handler(async () => {
  return renderServerComponent(
    <div className={'border-2 border-dashed border-red-500 p-4'}>
      Hello from the server!
    </div>,
  )
})

export const getCompositeComponent = createServerFn().handler(async () => {
  const src = await createCompositeComponent(
    (props: {
      children?: React.ReactNode
      messageComponent: React.ComponentType<{ message: string }>
    }) => {
      const MessageComponent = props.messageComponent
      return (
        <div className={'border-2 border-dashed border-red-500 p-4'}>
          <div className={'border-2 border-dashed border-red-500 p-4'}>
            {props.children}
          </div>
          <MessageComponent message={'Hello From the server!'} />
        </div>
      )
    },
  )

  return { src }
})
