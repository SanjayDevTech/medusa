import { HttpTypes } from "@biryanihouse/framework/types"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@biryanihouse/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<HttpTypes.AdminOrderChangesResponse>
) => {
  const { id } = req.params

  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "order_change",
    variables: {
      filters: {
        ...req.filterableFields,
        order_id: id,
      },
    },
    fields: req.queryConfig.fields,
  })

  const order_changes = await remoteQuery(queryObject)

  res.status(200).json({ order_changes })
}
