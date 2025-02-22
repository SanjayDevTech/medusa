import { StoreProductTypeListResponse } from "@biryanihouse/framework/types"
import { ContainerRegistrationKeys } from "@biryanihouse/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"
import { StoreProductTypesParamsType } from "./validators"

export const GET = async (
  req: AuthenticatedMedusaRequest<StoreProductTypesParamsType>,
  res: MedusaResponse<StoreProductTypeListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: product_types, metadata } = await query.graph({
    entity: "product_type",
    filters: req.filterableFields,
    pagination: req.queryConfig.pagination,
    fields: req.queryConfig.fields,
  })

  res.json({
    product_types,
    count: metadata?.count ?? 0,
    offset: metadata?.skip ?? 0,
    limit: metadata?.take ?? 0,
  })
}
