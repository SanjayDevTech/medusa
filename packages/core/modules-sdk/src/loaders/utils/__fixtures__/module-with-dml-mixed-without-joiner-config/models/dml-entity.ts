import { model } from "@biryanihouse/utils"

export const dmlEntity = model.define("dmlEntity", {
  id: model.id().primaryKey(),
  name: model.text(),
})
