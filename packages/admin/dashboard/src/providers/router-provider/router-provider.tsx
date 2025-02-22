import {
  RouterProvider as Provider,
  createBrowserRouter,
} from "react-router-dom"

import { RouteMap, StaffRouteMap } from "./route-map"
import { useAdminUser } from "../user-provider"

const adminRouter = createBrowserRouter(RouteMap, {
  basename: __BASE__ || "/",
})

const staffRouter = createBrowserRouter(StaffRouteMap, {
  basename: __BASE__ || "/",
})

export const RouterProvider = () => {
  const adminUser = useAdminUser()

  if (adminUser?.role === "admin") {
    return <Provider router={adminRouter} />
  }
  return <Provider router={staffRouter} />
}
