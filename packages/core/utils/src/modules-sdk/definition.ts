export const Modules = {
  AUTH: "auth",
  CACHE: "cache",
  CART: "cart",
  CUSTOMER: "customer",
  EVENT_BUS: "event_bus",
  INVENTORY: "inventory",
  LINK: "link_modules",
  PAYMENT: "payment",
  PRICING: "pricing",
  PRODUCT: "product",
  PROMOTION: "promotion",
  SALES_CHANNEL: "sales_channel",
  TAX: "tax",
  FULFILLMENT: "fulfillment",
  STOCK_LOCATION: "stock_location",
  USER: "user",
  WORKFLOW_ENGINE: "workflows",
  REGION: "region",
  ORDER: "order",
  API_KEY: "api_key",
  STORE: "store",
  CURRENCY: "currency",
  FILE: "file",
  NOTIFICATION: "notification",
  INDEX: "index",
  LOCKING: "locking",
} as const

export const MODULE_PACKAGE_NAMES = {
  [Modules.AUTH]: "@biryanihouse/medusa/auth",
  [Modules.CACHE]: "@biryanihouse/medusa/cache-inmemory",
  [Modules.CART]: "@biryanihouse/medusa/cart",
  [Modules.CUSTOMER]: "@biryanihouse/medusa/customer",
  [Modules.EVENT_BUS]: "@biryanihouse/medusa/event-bus-local",
  [Modules.INVENTORY]: "@biryanihouse/medusa/inventory",
  [Modules.LINK]: "@biryanihouse/medusa/link-modules",
  [Modules.PAYMENT]: "@biryanihouse/medusa/payment",
  [Modules.PRICING]: "@biryanihouse/medusa/pricing",
  [Modules.PRODUCT]: "@biryanihouse/medusa/product",
  [Modules.PROMOTION]: "@biryanihouse/medusa/promotion",
  [Modules.SALES_CHANNEL]: "@biryanihouse/medusa/sales-channel",
  [Modules.FULFILLMENT]: "@biryanihouse/medusa/fulfillment",
  [Modules.STOCK_LOCATION]: "@biryanihouse/medusa/stock-location",
  [Modules.TAX]: "@biryanihouse/medusa/tax",
  [Modules.USER]: "@biryanihouse/medusa/user",
  [Modules.WORKFLOW_ENGINE]: "@biryanihouse/medusa/workflow-engine-inmemory",
  [Modules.REGION]: "@biryanihouse/medusa/region",
  [Modules.ORDER]: "@biryanihouse/medusa/order",
  [Modules.API_KEY]: "@biryanihouse/medusa/api-key",
  [Modules.STORE]: "@biryanihouse/medusa/store",
  [Modules.CURRENCY]: "@biryanihouse/medusa/currency",
  [Modules.FILE]: "@biryanihouse/medusa/file",
  [Modules.NOTIFICATION]: "@biryanihouse/medusa/notification",
  [Modules.INDEX]: "@biryanihouse/medusa/index-module",
  [Modules.LOCKING]: "@biryanihouse/medusa/locking",
}

export const REVERSED_MODULE_PACKAGE_NAMES = Object.entries(
  MODULE_PACKAGE_NAMES
).reduce((acc, [key, value]) => {
  acc[value] = key
  return acc
}, {})

// TODO: temporary fix until the event bus, cache and workflow engine are migrated to use providers and therefore only a single resolution will be good
REVERSED_MODULE_PACKAGE_NAMES["@biryanihouse/medusa/event-bus-redis"] =
  Modules.EVENT_BUS
REVERSED_MODULE_PACKAGE_NAMES["@biryanihouse/medusa/cache-redis"] = Modules.CACHE
REVERSED_MODULE_PACKAGE_NAMES["@biryanihouse/medusa/workflow-engine-redis"] =
  Modules.WORKFLOW_ENGINE

/**
 * Making modules be referenced as a type as well.
 */
export type Modules = (typeof Modules)[keyof typeof Modules]
export const ModuleRegistrationName = Modules
