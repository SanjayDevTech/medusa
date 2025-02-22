import { MiddlewareRoute } from "@biryanihouse/framework/http"
import {
  validateAndTransformBody,
  validateAndTransformQuery,
} from "@biryanihouse/framework"
import * as QueryConfig from "./query-config"
import { ReturnsParams, StorePostReturnsReqSchema } from "./validators"

export const storeRegionRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["POST"],
    matcher: "/store/returns",
    middlewares: [
      validateAndTransformBody(StorePostReturnsReqSchema),
      validateAndTransformQuery(
        ReturnsParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
]
