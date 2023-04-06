import { Outlet, Route, Routes } from "react-router-dom"
import { PrivateRoute } from "../hoc/private-route"
import { Layout } from "../pages/layout"
import { LoginPage } from "../pages/login.page"
import { MainPage } from "../pages/main.page"
import { routes } from "./path"

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path={routes.main}
        element={<Layout />}
      >

        <Route
          index
          element={<PrivateRoute><MainPage /></PrivateRoute>}
        />


        <Route path={routes.auth}
          element={<Outlet />}>


          <Route
            index
            element={<div style={{height: '100vh',display: 'flex', justifyContent: 'center', alignItems: 'center'}}><LoginPage /></div>}
          />


        </Route>


      </Route>
    </Routes>
  )
}