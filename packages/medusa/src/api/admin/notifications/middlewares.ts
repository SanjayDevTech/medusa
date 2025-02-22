import { MiddlewareRoute } from "@biryanihouse/framework/http"
import { validateAndTransformQuery } from "@biryanihouse/framework"
import * as QueryConfig from "./query-config"
import {
  AdminGetNotificationParams,
  AdminGetNotificationsParams,
} from "./validators"

export const adminNotificationRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/admin/notifications",
    middlewares: [
      validateAndTransformQuery(
        AdminGetNotificationsParams,
        QueryConfig.listTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/notifications/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminGetNotificationParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
]
