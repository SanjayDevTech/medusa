import { revokeApiKeysWorkflow } from "@biryanihouse/core-flows"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"
import { AdminRevokeApiKeyType } from "../../validators"
import { refetchApiKey } from "../../helpers"
import { HttpTypes } from "@biryanihouse/framework/types"

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminRevokeApiKeyType>,
  res: MedusaResponse<HttpTypes.AdminApiKeyResponse>
) => {
  await revokeApiKeysWorkflow(req.scope).run({
    input: {
      selector: { id: req.params.id },
      revoke: {
        ...req.validatedBody,
        revoked_by: req.auth_context.actor_id,
      },
    },
  })

  const apiKey = await refetchApiKey(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ api_key: apiKey })
}
