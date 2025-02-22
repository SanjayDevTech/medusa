import {
  AdminFulfillmentProviderOption,
  HttpTypes,
} from "@biryanihouse/framework/types"
import { Modules } from "@biryanihouse/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<HttpTypes.AdminFulfillmentProviderOptionsListResponse>
) => {
  const fulfillmentProviderService = req.scope.resolve(Modules.FULFILLMENT)

  const fulfillmentOptions =
    await fulfillmentProviderService.retrieveFulfillmentOptions(req.params.id)

  res.json({
    fulfillment_options:
      fulfillmentOptions as unknown as AdminFulfillmentProviderOption[],
    count: fulfillmentOptions.length,
    limit: fulfillmentOptions.length,
    offset: 0,
  })
}
