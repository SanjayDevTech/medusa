import { ModuleProvider, Modules } from "@biryanihouse/framework/utils"
import { SendgridNotificationService } from "./services/sendgrid"

const services = [SendgridNotificationService]

export default ModuleProvider(Modules.NOTIFICATION, {
  services,
})
