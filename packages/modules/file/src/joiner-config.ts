import { defineJoinerConfig, Modules } from "@biryanihouse/framework/utils"

export const joinerConfig = defineJoinerConfig(Modules.FILE, {
  models: [{ name: "File" }],
})
