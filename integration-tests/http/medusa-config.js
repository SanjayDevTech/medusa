const { defineConfig, Modules } = require("@biryanihouse/utils")
const os = require("os")
const path = require("path")

const DB_HOST = process.env.DB_HOST
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_TEMP_NAME
const DB_URL = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
process.env.DATABASE_URL = DB_URL
process.env.LOG_LEVEL = "error"

const customFulfillmentProvider = {
  resolve: "@biryanihouse/fulfillment-manual",
  id: "test-provider",
}

const customFulfillmentProviderCalculated = {
  resolve: require("./dist/utils/providers/fulfillment-manual-calculated")
    .default,
  id: "test-provider-calculated",
}

module.exports = defineConfig({
  admin: {
    disable: true,
  },
  projectConfig: {
    http: {
      jwtSecret: "test",
    },
  },
  modules: {
    [Modules.FULFILLMENT]: {
      /** @type {import('@biryanihouse/fulfillment').FulfillmentModuleOptions} */
      options: {
        providers: [
          customFulfillmentProvider,
          customFulfillmentProviderCalculated,
        ],
      },
    },
    [Modules.NOTIFICATION]: {
      resolve: "@biryanihouse/notification",
      options: {
        providers: [
          {
            resolve: "@biryanihouse/notification-local",
            id: "local",
            options: {
              name: "Local Notification Provider",
              channels: ["feed"],
            },
          },
        ],
      },
    },
    [Modules.FILE]: {
      resolve: "@biryanihouse/file",
      options: {
        providers: [
          {
            resolve: "@biryanihouse/file-local",
            id: "local",
            options: {
              // This is the directory where we can reliably write in CI environments
              upload_dir: path.join(os.tmpdir(), "uploads"),
            },
          },
        ],
      },
    },
  },
})
