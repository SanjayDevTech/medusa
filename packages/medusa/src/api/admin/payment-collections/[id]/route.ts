import { deleteOrderPaymentCollections } from "@biryanihouse/core-flows"
import { HttpTypes } from "@biryanihouse/framework/types"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<HttpTypes.AdminDeletePaymentCollectionResponse>
) => {
  const { id } = req.params

  await deleteOrderPaymentCollections(req.scope).run({
    input: { id },
  })

  res.status(200).json({
    id,
    object: "payment-collection",
    deleted: true,
  })
}
