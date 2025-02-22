import { MedusaModule } from "@biryanihouse/framework/modules-sdk"
import {
  ExternalModuleDeclaration,
  ICacheService,
  InternalModuleDeclaration,
} from "@biryanihouse/framework/types"
import { Modules } from "@biryanihouse/framework/utils"
import { InMemoryCacheModuleOptions } from "../types"

export const initialize = async (
  options?: InMemoryCacheModuleOptions | ExternalModuleDeclaration
): Promise<ICacheService> => {
  const serviceKey = Modules.CACHE
  const loaded = await MedusaModule.bootstrap<ICacheService>({
    moduleKey: serviceKey,
    defaultPath: "@biryanihouse//cache-inmemory",
    declaration: options as
      | InternalModuleDeclaration
      | ExternalModuleDeclaration,
  })

  return loaded[serviceKey]
}
