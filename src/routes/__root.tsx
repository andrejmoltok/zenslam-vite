import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Menu from '../components/menu/menu'
import Footer from '../components/footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Menu />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}
