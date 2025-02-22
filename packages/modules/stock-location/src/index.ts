import { Module, Modules } from "@biryanihouse/framework/utils"
import { StockLocationModuleService } from "@services"

export default Module(Modules.STOCK_LOCATION, {
  service: StockLocationModuleService,
})
