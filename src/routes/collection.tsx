import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/collection')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/collection"!<button onClick={() => { window.location.href = '/collection/123/456' }}>Poem 456</button></div>
}
