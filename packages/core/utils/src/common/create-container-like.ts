import { ContainerLike } from "@biryanihouse/types"

export function createContainerLike(obj): ContainerLike {
  return {
    resolve(key: string) {
      return obj[key]
    },
  }
}
