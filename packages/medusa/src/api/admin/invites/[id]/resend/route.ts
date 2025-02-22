import { MedusaRequest, MedusaResponse } from "@biryanihouse/framework/http"

import { refreshInviteTokensWorkflow } from "@biryanihouse/core-flows"
import { refetchInvite } from "../../helpers"
import { HttpTypes } from "@biryanihouse/framework/types"

export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse<HttpTypes.AdminInviteResponse>
) => {
  const workflow = refreshInviteTokensWorkflow(req.scope)

  const input = {
    invite_ids: [req.params.id],
  }

  const { result } = await workflow.run({ input })
  const invite = await refetchInvite(
    result[0].id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ invite })
}

export const AUTHENTICATE = false
