import { createOrderShipmentWorkflow } from "@biryanihouse/core-flows"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@biryanihouse/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"
import { AdminOrderCreateShipmentType } from "../../../../validators"
import { AdditionalData, HttpTypes } from "@biryanihouse/framework/types"

export const POST = async (
  req: AuthenticatedMedusaRequest<
    AdminOrderCreateShipmentType & AdditionalData
  >,
  res: MedusaResponse<HttpTypes.AdminOrderResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const variables = { id: req.params.id }

  const input = {
    ...req.validatedBody,
    order_id: req.params.id,
    fulfillment_id: req.params.fulfillment_id,
    labels: req.validatedBody.labels ?? [],
  }

  await createOrderShipmentWorkflow(req.scope).run({
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
