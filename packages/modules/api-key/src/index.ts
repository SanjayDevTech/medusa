import { Module, Modules } from "@biryanihouse/framework/utils"
import { ApiKeyModuleService } from "@services"

export default Module(Modules.API_KEY, {
  service: ApiKeyModuleService,
})
