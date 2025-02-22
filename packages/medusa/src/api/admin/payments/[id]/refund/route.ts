import { refundPaymentWorkflow } from "@biryanihouse/core-flows"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"
import { refetchPayment } from "../../helpers"
import { AdminCreatePaymentRefundType } from "../../validators"
import { HttpTypes } from "@biryanihouse/framework/types"

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminCreatePaymentRefundType>,
  res: MedusaResponse<HttpTypes.AdminPaymentResponse>
) => {
  const { id } = req.params
  await refundPaymentWorkflow(req.scope).run({
    input: {
      payment_id: id,
      created_by: req.auth_context.actor_id,
      ...req.validatedBody,
    },
  })

  const payment = await refetchPayment(id, req.scope, req.queryConfig.fields)

  res.status(200).json({ payment })
}
