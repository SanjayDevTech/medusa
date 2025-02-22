import {
  CreateOrderClaimDTO,
  IOrderModuleService,
} from "@biryanihouse/framework/types"
import { Modules } from "@biryanihouse/framework/utils"
import { StepResponse, createStep } from "@biryanihouse/framework/workflows-sdk"

export const createOrderClaimsStepId = "create-order-claims"
/**
 * This step creates one or more order claims.
 */
export const createOrderClaimsStep = createStep(
  createOrderClaimsStepId,
  async (data: CreateOrderClaimDTO[], { container }) => {
    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    const orderClaims = await service.createOrderClaims(data)

    const claimIds = orderClaims.map((claim) => claim.id)

    return new StepResponse(orderClaims, claimIds)
  },
  async (claimIds, { container }) => {
    if (!claimIds) {
      return
    }

    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    await service.deleteOrderClaims(claimIds)
  }
)
