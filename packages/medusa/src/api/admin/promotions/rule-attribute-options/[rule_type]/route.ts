import { HttpTypes } from "@biryanihouse/framework/types"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"
import { getRuleAttributesMap, validateRuleType } from "../../utils"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminGetPromotionRuleParams>,
  res: MedusaResponse<HttpTypes.AdminRuleAttributeOptionsListResponse>
) => {
  const { rule_type: ruleType } = req.params

  validateRuleType(ruleType)

  const attributes =
    getRuleAttributesMap({
      promotionType: req.query.promotion_type as string,
      applicationMethodType: req.query.application_method_type as string,
    })[ruleType] || []

  res.json({
    attributes,
  })
}
