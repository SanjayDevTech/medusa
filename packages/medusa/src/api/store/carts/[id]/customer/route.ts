import { transferCartCustomerWorkflow } from "@biryanihouse/core-flows"
import { HttpTypes } from "@biryanihouse/framework/types"

import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"
import { refetchCart } from "../../helpers"

export const POST = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<HttpTypes.StoreCartResponse>
) => {
  const workflow = transferCartCustomerWorkflow(req.scope)

  await workflow.run({
    input: {
      id: req.params.id,
      customer_id: req.auth_context?.actor_id,
    },
  })

  const cart = await refetchCart(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ cart })
}
