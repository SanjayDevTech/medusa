import { MedusaService, Module } from "@biryanihouse/framework/utils"

export default Module("module1", {
  service: class Module1Service extends MedusaService({}) {},
})
