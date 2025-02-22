import { MiddlewareRoute } from "@biryanihouse/framework/http"
import {
  validateAndTransformBody,
  validateAndTransformQuery,
} from "@biryanihouse/framework"
import * as QueryConfig from "./query-config"
import {
  AdminGetStoreParams,
  AdminGetStoresParams,
  AdminUpdateStore,
} from "./validators"

export const adminStoreRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/admin/stores",
    middlewares: [
      validateAndTransformQuery(
        AdminGetStoresParams,
        QueryConfig.listTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/stores/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminGetStoreParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/stores/:id",
    middlewares: [
      validateAndTransformBody(AdminUpdateStore),
      validateAndTransformQuery(
        AdminGetStoreParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
]
