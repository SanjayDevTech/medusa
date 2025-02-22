import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
  refetchEntity,
} from "@biryanihouse/framework/http"
import { AdminGetNotificationParamsType } from "../validators"
import { HttpTypes } from "@biryanihouse/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<AdminGetNotificationParamsType>,
  res: MedusaResponse<HttpTypes.AdminNotificationResponse>
) => {
  const notification = await refetchEntity(
    "notification",
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )
  res.status(200).json({ notification })
}
