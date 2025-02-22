import { MiddlewareRoute } from "@biryanihouse/framework/http"
import { validateAndTransformBody } from "@biryanihouse/framework"
import { validateAndTransformQuery } from "@biryanihouse/framework"
import * as QueryConfig from "./query-config"
import {
  AdminCreateDraftOrder,
  AdminGetOrderParams,
  AdminGetOrdersParams,
} from "./validators"

export const adminDraftOrderRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/admin/draft-orders",
    middlewares: [
      validateAndTransformQuery(
        AdminGetOrdersParams,
        QueryConfig.listTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/draft-orders/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminGetOrderParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/draft-orders",
    middlewares: [
      validateAndTransformBody(AdminCreateDraftOrder),
      validateAndTransformQuery(
        AdminGetOrderParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
]
