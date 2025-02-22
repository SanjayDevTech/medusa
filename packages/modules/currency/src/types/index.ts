import { IEventBusModuleService, Logger } from "@biryanihouse/framework/types"

export type InitializeModuleInjectableDependencies = {
  logger?: Logger
  EventBus?: IEventBusModuleService
}
