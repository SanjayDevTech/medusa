import { defineMikroOrmCliConfig, Modules } from "@biryanihouse/framework/utils"
import * as entities from "./src/models"

export default defineMikroOrmCliConfig(Modules.ORDER, {
  entities: Object.values(entities),
})
