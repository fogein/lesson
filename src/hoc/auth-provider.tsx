import React, { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../router/path'

type AuthProviderType = {
  logout: () => void
  login: (user:string) => void
  isAuth: Boolean
}


export const AuthContext = createContext<AuthProviderType | null>(null)
export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('user'))
  const navigate = useNavigate()
  const login = (user:string) => {
    localStorage.setItem('user',user)
    navigate(routes.main, { replace: true })
    setIsAuth(true)
  }
  const logout = () => {
    localStorage.removeItem('user')
    setIsAuth(false)
  }
  const value: AuthProviderType = {
    isAuth, login, logout
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
