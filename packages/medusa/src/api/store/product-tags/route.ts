import { StoreProductTagListResponse } from "@biryanihouse/framework/types"
import { ContainerRegistrationKeys } from "@biryanihouse/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"
import { StoreProductTagsParamsType } from "./validators"

export const GET = async (
  req: AuthenticatedMedusaRequest<StoreProductTagsParamsType>,
  res: MedusaResponse<StoreProductTagListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: product_tags, metadata } = await query.graph({
    entity: "product_tag",
    filters: req.filterableFields,
    pagination: req.queryConfig.pagination,
    fields: req.queryConfig.fields,
  })

  res.json({
    product_tags,
    count: metadata?.count ?? 0,
    offset: metadata?.skip ?? 0,
    limit: metadata?.take ?? 0,
  })
}
