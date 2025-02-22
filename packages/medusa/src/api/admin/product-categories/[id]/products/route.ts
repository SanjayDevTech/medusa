import { batchLinkProductsToCategoryWorkflow } from "@biryanihouse/core-flows"
import {
  AdminProductCategoryResponse,
  LinkMethodRequest,
} from "@biryanihouse/framework/types"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
  refetchEntity,
} from "@biryanihouse/framework/http"

export const POST = async (
  req: AuthenticatedMedusaRequest<LinkMethodRequest>,
  res: MedusaResponse<AdminProductCategoryResponse>
) => {
  const { id } = req.params

  await batchLinkProductsToCategoryWorkflow(req.scope).run({
    input: { id, ...req.validatedBody },
  })

  const category = await refetchEntity(
    "product_category",
    id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ product_category: category })
}
