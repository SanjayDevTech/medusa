import {
  ContainerRegistrationKeys,
  isPresent,
  remoteQueryObjectFromString,
} from "@biryanihouse/framework/utils"
import { MedusaResponse } from "@biryanihouse/framework/http"
import { wrapVariantsWithInventoryQuantityForSalesChannel } from "../../utils/middlewares"
import { RequestWithContext, wrapProductsWithTaxPrices } from "./helpers"
import { HttpTypes } from "@biryanihouse/framework/types"

export const GET = async (
  req: RequestWithContext<HttpTypes.StoreProductListParams>,
  res: MedusaResponse<HttpTypes.StoreProductListResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const context: object = {}
  const withInventoryQuantity = req.queryConfig.fields.some((field) =>
    field.includes("variants.inventory_quantity")
  )

  if (withInventoryQuantity) {
    req.queryConfig.fields = req.queryConfig.fields.filter(
      (field) => !field.includes("variants.inventory_quantity")
    )
  }

  if (isPresent(req.pricingContext)) {
    context["variants.calculated_price"] = {
      context: req.pricingContext,
    }
  }

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "product",
    variables: {
      filters: req.filterableFields,
      ...req.queryConfig.pagination,
      ...context,
    },
    fields: req.queryConfig.fields,
  })

  const { rows: products, metadata } = await remoteQuery(queryObject)

  if (withInventoryQuantity) {
    await wrapVariantsWithInventoryQuantityForSalesChannel(
      req,
      products.map((product) => product.variants).flat(1)
    )
  }

  await wrapProductsWithTaxPrices(req, products)
  res.json({
    products,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}
