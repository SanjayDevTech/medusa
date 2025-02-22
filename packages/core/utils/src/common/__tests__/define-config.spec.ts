import { Modules } from "../../modules-sdk"
import { DEFAULT_STORE_RESTRICTED_FIELDS, defineConfig } from "../define-config"

describe("defineConfig", function () {
  it("should merge empty config with the defaults", function () {
    expect(defineConfig()).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "api_key": {
            "resolve": "@biryanihouse/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@biryanihouse/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/auth",
          },
          "cache": {
            "resolve": "@biryanihouse/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@biryanihouse/medusa/cart",
          },
          "currency": {
            "resolve": "@biryanihouse/medusa/currency",
          },
          "customer": {
            "resolve": "@biryanihouse/medusa/customer",
          },
          "event_bus": {
            "resolve": "@biryanihouse/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@biryanihouse/medusa/file-local",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@biryanihouse/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@biryanihouse/medusa/inventory",
          },
          "locking": {
            "resolve": "@biryanihouse/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@biryanihouse/medusa/notification-local",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/notification",
          },
          "order": {
            "resolve": "@biryanihouse/medusa/order",
          },
          "payment": {
            "resolve": "@biryanihouse/medusa/payment",
          },
          "pricing": {
            "resolve": "@biryanihouse/medusa/pricing",
          },
          "product": {
            "resolve": "@biryanihouse/medusa/product",
          },
          "promotion": {
            "resolve": "@biryanihouse/medusa/promotion",
          },
          "region": {
            "resolve": "@biryanihouse/medusa/region",
          },
          "sales_channel": {
            "resolve": "@biryanihouse/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@biryanihouse/medusa/stock-location",
          },
          "store": {
            "resolve": "@biryanihouse/medusa/store",
          },
          "tax": {
            "resolve": "@biryanihouse/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@biryanihouse/medusa/user",
          },
          "workflows": {
            "resolve": "@biryanihouse/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(
                  ",\n                "
                )},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
        },
      }
    `)
  })

  it("should merge custom modules", function () {
    expect(
      defineConfig({
        modules: {
          GithubModuleService: {
            resolve: "./modules/github",
          },
        },
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "GithubModuleService": {
            "resolve": "./modules/github",
          },
          "api_key": {
            "resolve": "@biryanihouse/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@biryanihouse/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/auth",
          },
          "cache": {
            "resolve": "@biryanihouse/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@biryanihouse/medusa/cart",
          },
          "currency": {
            "resolve": "@biryanihouse/medusa/currency",
          },
          "customer": {
            "resolve": "@biryanihouse/medusa/customer",
          },
          "event_bus": {
            "resolve": "@biryanihouse/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@biryanihouse/medusa/file-local",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@biryanihouse/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@biryanihouse/medusa/inventory",
          },
          "locking": {
            "resolve": "@biryanihouse/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@biryanihouse/medusa/notification-local",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/notification",
          },
          "order": {
            "resolve": "@biryanihouse/medusa/order",
          },
          "payment": {
            "resolve": "@biryanihouse/medusa/payment",
          },
          "pricing": {
            "resolve": "@biryanihouse/medusa/pricing",
          },
          "product": {
            "resolve": "@biryanihouse/medusa/product",
          },
          "promotion": {
            "resolve": "@biryanihouse/medusa/promotion",
          },
          "region": {
            "resolve": "@biryanihouse/medusa/region",
          },
          "sales_channel": {
            "resolve": "@biryanihouse/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@biryanihouse/medusa/stock-location",
          },
          "store": {
            "resolve": "@biryanihouse/medusa/store",
          },
          "tax": {
            "resolve": "@biryanihouse/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@biryanihouse/medusa/user",
          },
          "workflows": {
            "resolve": "@biryanihouse/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(
                  ",\n                "
                )},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
        },
      }
    `)
  })

  it("should merge custom modules when an array is provided", function () {
    expect(
      defineConfig({
        modules: [
          {
            resolve: require.resolve("../__fixtures__/define-config/github"),
            options: {
              apiKey: "test",
            },
          },
        ],
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "GithubModuleService": {
            "options": {
              "apiKey": "test",
            },
            "resolve": "${require.resolve(
              "../__fixtures__/define-config/github"
            )}",
          },
          "api_key": {
            "resolve": "@biryanihouse/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@biryanihouse/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/auth",
          },
          "cache": {
            "resolve": "@biryanihouse/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@biryanihouse/medusa/cart",
          },
          "currency": {
            "resolve": "@biryanihouse/medusa/currency",
          },
          "customer": {
            "resolve": "@biryanihouse/medusa/customer",
          },
          "event_bus": {
            "resolve": "@biryanihouse/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@biryanihouse/medusa/file-local",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@biryanihouse/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@biryanihouse/medusa/inventory",
          },
          "locking": {
            "resolve": "@biryanihouse/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@biryanihouse/medusa/notification-local",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/notification",
          },
          "order": {
            "resolve": "@biryanihouse/medusa/order",
          },
          "payment": {
            "resolve": "@biryanihouse/medusa/payment",
          },
          "pricing": {
            "resolve": "@biryanihouse/medusa/pricing",
          },
          "product": {
            "resolve": "@biryanihouse/medusa/product",
          },
          "promotion": {
            "resolve": "@biryanihouse/medusa/promotion",
          },
          "region": {
            "resolve": "@biryanihouse/medusa/region",
          },
          "sales_channel": {
            "resolve": "@biryanihouse/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@biryanihouse/medusa/stock-location",
          },
          "store": {
            "resolve": "@biryanihouse/medusa/store",
          },
          "tax": {
            "resolve": "@biryanihouse/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@biryanihouse/medusa/user",
          },
          "workflows": {
            "resolve": "@biryanihouse/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(
                  ",\n                "
                )},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
        },
      }
    `)
  })

  it("should merge custom modules when an array is provided with a key to override the module registration name", function () {
    expect(
      defineConfig({
        modules: [
          {
            key: "GithubModuleServiceOverride",
            resolve: require.resolve("../__fixtures__/define-config/github"),
            options: {
              apiKey: "test",
            },
          },
        ],
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "GithubModuleServiceOverride": {
            "options": {
              "apiKey": "test",
            },
            "resolve": "${require.resolve(
              "../__fixtures__/define-config/github"
            )}",
          },
          "api_key": {
            "resolve": "@biryanihouse/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@biryanihouse/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/auth",
          },
          "cache": {
            "resolve": "@biryanihouse/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@biryanihouse/medusa/cart",
          },
          "currency": {
            "resolve": "@biryanihouse/medusa/currency",
          },
          "customer": {
            "resolve": "@biryanihouse/medusa/customer",
          },
          "event_bus": {
            "resolve": "@biryanihouse/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@biryanihouse/medusa/file-local",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@biryanihouse/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@biryanihouse/medusa/inventory",
          },
          "locking": {
            "resolve": "@biryanihouse/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@biryanihouse/medusa/notification-local",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/notification",
          },
          "order": {
            "resolve": "@biryanihouse/medusa/order",
          },
          "payment": {
            "resolve": "@biryanihouse/medusa/payment",
          },
          "pricing": {
            "resolve": "@biryanihouse/medusa/pricing",
          },
          "product": {
            "resolve": "@biryanihouse/medusa/product",
          },
          "promotion": {
            "resolve": "@biryanihouse/medusa/promotion",
          },
          "region": {
            "resolve": "@biryanihouse/medusa/region",
          },
          "sales_channel": {
            "resolve": "@biryanihouse/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@biryanihouse/medusa/stock-location",
          },
          "store": {
            "resolve": "@biryanihouse/medusa/store",
          },
          "tax": {
            "resolve": "@biryanihouse/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@biryanihouse/medusa/user",
          },
          "workflows": {
            "resolve": "@biryanihouse/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(
                  ",\n                "
                )},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
        },
      }
    `)
  })

  it("should merge custom project.http config", function () {
    expect(
      defineConfig({
        projectConfig: {
          http: {
            adminCors: "http://localhost:3000",
          } as any,
        },
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "api_key": {
            "resolve": "@biryanihouse/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@biryanihouse/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/auth",
          },
          "cache": {
            "resolve": "@biryanihouse/medusa/cache-inmemory",
          },
          "cart": {
            "resolve": "@biryanihouse/medusa/cart",
          },
          "currency": {
            "resolve": "@biryanihouse/medusa/currency",
          },
          "customer": {
            "resolve": "@biryanihouse/medusa/customer",
          },
          "event_bus": {
            "resolve": "@biryanihouse/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@biryanihouse/medusa/file-local",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@biryanihouse/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@biryanihouse/medusa/inventory",
          },
          "locking": {
            "resolve": "@biryanihouse/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@biryanihouse/medusa/notification-local",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/notification",
          },
          "order": {
            "resolve": "@biryanihouse/medusa/order",
          },
          "payment": {
            "resolve": "@biryanihouse/medusa/payment",
          },
          "pricing": {
            "resolve": "@biryanihouse/medusa/pricing",
          },
          "product": {
            "resolve": "@biryanihouse/medusa/product",
          },
          "promotion": {
            "resolve": "@biryanihouse/medusa/promotion",
          },
          "region": {
            "resolve": "@biryanihouse/medusa/region",
          },
          "sales_channel": {
            "resolve": "@biryanihouse/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@biryanihouse/medusa/stock-location",
          },
          "store": {
            "resolve": "@biryanihouse/medusa/store",
          },
          "tax": {
            "resolve": "@biryanihouse/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@biryanihouse/medusa/user",
          },
          "workflows": {
            "resolve": "@biryanihouse/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:3000",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(
                  ",\n                "
                )},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
        },
      }
    `)
  })

  it("should include disabled modules", function () {
    expect(
      defineConfig({
        projectConfig: {
          http: {
            adminCors: "http://localhost:3000",
          } as any,
        },
        modules: {
          [Modules.CART]: false,
        },
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "path": "/app",
        },
        "featureFlags": {},
        "modules": {
          "api_key": {
            "resolve": "@biryanihouse/medusa/api-key",
          },
          "auth": {
            "options": {
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@biryanihouse/medusa/auth-emailpass",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/auth",
          },
          "cache": {
            "resolve": "@biryanihouse/medusa/cache-inmemory",
          },
          "cart": {
            "disable": true,
          },
          "currency": {
            "resolve": "@biryanihouse/medusa/currency",
          },
          "customer": {
            "resolve": "@biryanihouse/medusa/customer",
          },
          "event_bus": {
            "resolve": "@biryanihouse/medusa/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@biryanihouse/medusa/file-local",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@biryanihouse/medusa/fulfillment-manual",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/fulfillment",
          },
          "inventory": {
            "resolve": "@biryanihouse/medusa/inventory",
          },
          "locking": {
            "resolve": "@biryanihouse/medusa/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@biryanihouse/medusa/notification-local",
                },
              ],
            },
            "resolve": "@biryanihouse/medusa/notification",
          },
          "order": {
            "resolve": "@biryanihouse/medusa/order",
          },
          "payment": {
            "resolve": "@biryanihouse/medusa/payment",
          },
          "pricing": {
            "resolve": "@biryanihouse/medusa/pricing",
          },
          "product": {
            "resolve": "@biryanihouse/medusa/product",
          },
          "promotion": {
            "resolve": "@biryanihouse/medusa/promotion",
          },
          "region": {
            "resolve": "@biryanihouse/medusa/region",
          },
          "sales_channel": {
            "resolve": "@biryanihouse/medusa/sales-channel",
          },
          "stock_location": {
            "resolve": "@biryanihouse/medusa/stock-location",
          },
          "store": {
            "resolve": "@biryanihouse/medusa/store",
          },
          "tax": {
            "resolve": "@biryanihouse/medusa/tax",
          },
          "user": {
            "options": {
              "jwt_secret": "supersecret",
            },
            "resolve": "@biryanihouse/medusa/user",
          },
          "workflows": {
            "resolve": "@biryanihouse/medusa/workflow-engine-inmemory",
          },
        },
        "plugins": [],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/medusa-starter-default",
          "http": {
            "adminCors": "http://localhost:3000",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "cookieSecret": "supersecret",
            "jwtSecret": "supersecret",
            "restrictedFields": {
              "store": [
                ${DEFAULT_STORE_RESTRICTED_FIELDS.map((v) => `"${v}"`).join(
                  ",\n                "
                )},
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
        },
      }
    `)
  })
})
