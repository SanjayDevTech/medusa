import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"
import { AdminGetPaymentParamsType } from "../validators"
import { refetchPayment } from "../helpers"
import { HttpTypes } from "@biryanihouse/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<AdminGetPaymentParamsType>,
  res: MedusaResponse<HttpTypes.AdminPaymentResponse>
) => {
  const payment = await refetchPayment(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ payment })
}
