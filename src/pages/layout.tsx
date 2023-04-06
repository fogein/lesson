import React from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../hook/use-auth'
import { Header } from '../shared/ui/header'


export const Layout = () => {
  const auth = useAuth()
  return (
    <div>
      {auth?.isAuth && <Header />}
      <Outlet />
    </div>
  )
}
