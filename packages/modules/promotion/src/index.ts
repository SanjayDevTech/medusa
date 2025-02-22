import { Module, Modules } from "@biryanihouse/framework/utils"
import { PromotionModuleService } from "@services"

export default Module(Modules.PROMOTION, {
  service: PromotionModuleService,
})
