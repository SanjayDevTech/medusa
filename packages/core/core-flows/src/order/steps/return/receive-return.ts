import {
  IOrderModuleService,
  ReceiveOrderReturnDTO,
} from "@biryanihouse/framework/types"
import { Modules } from "@biryanihouse/framework/utils"
import { StepResponse, createStep } from "@biryanihouse/framework/workflows-sdk"

export const receiveReturnStepId = "receive-return"
/**
 * This step marks a return as received.
 */
export const receiveReturnStep = createStep(
  receiveReturnStepId,
  async (data: ReceiveOrderReturnDTO, { container }) => {
    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    if (!data.items?.length) {
      return new StepResponse(void 0)
    }

    const received = await service.receiveReturn(data)
    return new StepResponse(received, data.return_id)
  },
  async (orderId, { container }) => {
    if (!orderId) {
      return
    }

    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    await service.revertLastVersion(orderId)
  }
)
