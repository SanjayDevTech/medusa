import { MedusaContainer } from "@biryanihouse/framework/types"
import { refetchEntity } from "@biryanihouse/framework/http"

export const refetchOrder = async (
  idOrFilter: string | object,
  scope: MedusaContainer,
  fields: string[]
) => {
  return await refetchEntity("order", idOrFilter, scope, fields)
}
