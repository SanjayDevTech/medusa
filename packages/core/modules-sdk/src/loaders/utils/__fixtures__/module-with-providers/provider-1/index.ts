import { ModuleProviderService } from "./services/provider-service"
import { ModuleProvider } from "@biryanihouse/utils"

export * from "./services/provider-service"

export default ModuleProvider("provider-1", {
  services: [ModuleProviderService],
})
