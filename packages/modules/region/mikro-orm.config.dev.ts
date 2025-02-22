import { defineMikroOrmCliConfig, Modules } from "@biryanihouse/framework/utils"
import * as entities from "./src/models"

export default defineMikroOrmCliConfig(Modules.REGION, {
  entities: Object.values(entities),
})
