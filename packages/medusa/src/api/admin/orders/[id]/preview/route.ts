import { HttpTypes } from "@biryanihouse/framework/types"
import { Modules } from "@biryanihouse/framework/utils"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<HttpTypes.AdminOrderPreviewResponse>
) => {
  const { id } = req.params

  // NOTE: Consider replacing with remoteQuery when possible
  const orderModuleService = req.scope.resolve(Modules.ORDER)

  const order = (await orderModuleService.previewOrderChange(
    id
  )) as unknown as HttpTypes.AdminOrderPreview

  res.status(200).json({ order })
}
