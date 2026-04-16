import { createFileRoute, Navigate } from '@tanstack/react-router'
import { Route as serverComponentRoute } from '#/routes/serverComponent.tsx'

export const Route = createFileRoute('/')({
  component: () => <Navigate to={serverComponentRoute.to} params />,
})
