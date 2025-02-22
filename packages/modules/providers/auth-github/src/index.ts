import { ModuleProvider, Modules } from "@biryanihouse/framework/utils"
import { GithubAuthService } from "./services/github"

const services = [GithubAuthService]

export default ModuleProvider(Modules.AUTH, {
  services,
})
