import * as entities from "./src/models"
import { defineMikroOrmCliConfig, Modules } from "@biryanihouse/framework/utils"

export default defineMikroOrmCliConfig(Modules.CART, {
  entities: Object.values(entities),
})
