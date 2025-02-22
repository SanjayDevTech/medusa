import { AdditionalData, HttpTypes } from "@biryanihouse/framework/types"
import { completeOrderWorkflow } from "@biryanihouse/core-flows"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@biryanihouse/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"

export const POST = async (
  req: AuthenticatedMedusaRequest<AdditionalData>,
  res: MedusaResponse<HttpTypes.AdminOrderResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const { id } = req.params

  await completeOrderWorkflow(req.scope).run({
    input: {
      orderIds: [id],
      additional_data: req.validatedBody.additional_data,
    },
  })

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "order",
    variables: { id },
    fields: req.queryConfig.fields,
  })

  const [order] = await remoteQuery(queryObject)

  res.status(200).json({ order })
}
