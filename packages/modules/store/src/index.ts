import { StoreModuleService } from "@services"
import { Module, Modules } from "@biryanihouse/framework/utils"

export default Module(Modules.STORE, {
  service: StoreModuleService,
})
