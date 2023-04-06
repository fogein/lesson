import React, { FC, ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hook/use-auth'
import { routes } from '../router/path'

export const PrivateRoute:FC<{children: ReactElement}> = (props) => {
  const { children } = props 
  const location = useLocation()
  const auth = useAuth()
  if (!auth?.isAuth) {
    return (
      <Navigate
      to={routes.auth}
      state={{from: location}}
      replace
      />
    )
  }
  return children
}
