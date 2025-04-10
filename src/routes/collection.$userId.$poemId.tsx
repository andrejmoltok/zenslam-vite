import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/collection/$userId/$poemId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/collection/$userId/$poemId"!</div>
}
