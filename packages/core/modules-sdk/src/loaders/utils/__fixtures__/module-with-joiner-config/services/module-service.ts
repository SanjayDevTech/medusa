import { IModuleService, ModuleJoinerConfig } from "@biryanihouse/types"
import { defineJoinerConfig } from "@biryanihouse/utils"

export class ModuleService implements IModuleService {
  __joinerConfig(): ModuleJoinerConfig {
    return defineJoinerConfig("module-service", {
      alias: [
        {
          name: ["custom_name"],
          entity: "Custom",
        },
      ],
    })
  }
}
