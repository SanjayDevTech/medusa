import { PropsWithChildren } from "react"
import { AdminUserContext } from "./user-context"
import { useMe } from "../../hooks/api"

export const AdminUserProvider = ({ children }: PropsWithChildren) => {
  const { user } = useMe()

  return (
    <AdminUserContext.Provider value={user}>
      {children}
    </AdminUserContext.Provider>
  )
}
