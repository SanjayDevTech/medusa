import { batchPriceListPricesWorkflow } from "@biryanihouse/core-flows"
import { HttpTypes } from "@biryanihouse/framework/types"
import { MedusaError } from "@biryanihouse/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"
import { fetchPriceList, fetchPriceListPriceIdsForProduct } from "../../helpers"

export const POST = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminLinkPriceListProducts>,
  res: MedusaResponse<HttpTypes.AdminPriceListResponse>
) => {
  const id = req.params.id
  const { remove = [] } = req.validatedBody

  if (!remove.length) {
    throw new MedusaError(
      MedusaError.Types.INVALID_DATA,
      "No product ids passed to remove from price list"
    )
  }

  const productPriceIds = await fetchPriceListPriceIdsForProduct(
    id,
    remove,
    req.scope
  )

  const workflow = batchPriceListPricesWorkflow(req.scope)
  await workflow.run({
    input: {
      data: {
        id,
        create: [],
        update: [],
        delete: productPriceIds,
      },
    },
  })

  const priceList = await fetchPriceList(id, req.scope, req.queryConfig.fields)

  res.status(200).json({ price_list: priceList })
}
