import { HttpTypes } from "@biryanihouse/types"
import { createContext } from "react"

export const AdminUserContext = createContext<HttpTypes.AdminUser | null | undefined>(null)
