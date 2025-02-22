import { StoreProductCategoryResponse } from "@biryanihouse/framework/types"
import { MedusaError } from "@biryanihouse/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
  refetchEntity,
} from "@biryanihouse/framework/http"
import { StoreProductCategoryParamsType } from "../validators"

export const GET = async (
  req: AuthenticatedMedusaRequest<StoreProductCategoryParamsType>,
  res: MedusaResponse<StoreProductCategoryResponse>
) => {
  const category = await refetchEntity(
    "product_category",
    { id: req.params.id, ...req.filterableFields },
    req.scope,
    req.queryConfig.fields
  )

  if (!category) {
    throw new MedusaError(
      MedusaError.Types.NOT_FOUND,
      `Product category with id: ${req.params.id} was not found`
    )
  }
  res.json({ product_category: category })
}
