import { MedusaModule } from "@biryanihouse/framework/modules-sdk"
import { IEventBusService } from "@biryanihouse/framework/types"
import { Modules } from "@biryanihouse/framework/utils"

export const initialize = async (): Promise<IEventBusService> => {
  const serviceKey = Modules.EVENT_BUS
  const loaded = await MedusaModule.bootstrap<IEventBusService>({
    moduleKey: serviceKey,
    defaultPath: "@biryanihouse/event-bus-local",
  })

  return loaded[serviceKey]
}
