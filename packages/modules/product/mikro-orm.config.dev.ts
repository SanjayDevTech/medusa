import { defineMikroOrmCliConfig, Modules } from "@biryanihouse/framework/utils"
import * as entities from "./src/models"

export default defineMikroOrmCliConfig(Modules.PRODUCT, {
  entities: Object.values(entities),
})
