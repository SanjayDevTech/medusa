import PostgresLockingProvider from "@biryanihouse/locking-postgres"

export * from "@biryanihouse/locking-postgres"

export default PostgresLockingProvider
export const discoveryPath = require.resolve("@biryanihouse/locking-postgres")
