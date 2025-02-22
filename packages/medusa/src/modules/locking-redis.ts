import RedisLockingProvider from "@biryanihouse/locking-redis"

export * from "@biryanihouse/locking-redis"

export default RedisLockingProvider
export const discoveryPath = require.resolve("@biryanihouse/locking-redis")
