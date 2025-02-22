import { useContext } from "react"
import { AdminUserContext } from "./user-context"

export const useAdminUser = () => {
  const context = useContext(AdminUserContext)
  return context
}
