import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"
import { HttpTypes } from "@biryanihouse/framework/types"
import { remapKeysForProduct } from "../helpers"
import { exportProductsWorkflow } from "@biryanihouse/core-flows"

export const POST = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<HttpTypes.AdminExportProductResponse>
) => {
  const selectFields = remapKeysForProduct(req.queryConfig.fields ?? [])
  const input = { select: selectFields, filter: req.filterableFields }

  const { transaction } = await exportProductsWorkflow(req.scope).run({
    input,
  })

  res.status(202).json({ transaction_id: transaction.transactionId })
}
