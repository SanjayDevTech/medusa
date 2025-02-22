import { cancelOrderWorkflow } from "@biryanihouse/core-flows"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"
import { HttpTypes } from "@biryanihouse/framework/types"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@biryanihouse/framework/utils"

export const POST = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<HttpTypes.AdminOrderResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const variables = { id: req.params.id }

  const input = {
    order_id: req.params.id,
    canceled_by: req.auth_context.actor_id,
  }

  await cancelOrderWorkflow(req.scope).run({
    input,
  })

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "order",
    variables,
    fields: req.queryConfig.fields,
  })

  const [order] = await remoteQuery(queryObject)

  res.status(200).json({ order })
}
