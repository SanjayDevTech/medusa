import { IProductModuleService } from "@biryanihouse/framework/types"
import { Modules } from "@biryanihouse/framework/utils"
import { StepResponse, createStep } from "@biryanihouse/framework/workflows-sdk"

/**
 * The IDs of the product types to delete.
 */
export type DeleteProductTypesStepInput = string[]

export const deleteProductTypesStepId = "delete-product-types"
/**
 * This step deletes one or more product types.
 */
export const deleteProductTypesStep = createStep(
  deleteProductTypesStepId,
  async (ids: DeleteProductTypesStepInput, { container }) => {
    const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

    await service.softDeleteProductTypes(ids)
    return new StepResponse(void 0, ids)
  },
  async (prevIds, { container }) => {
    if (!prevIds?.length) {
      return
    }

    const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

    await service.restoreProductTypes(prevIds)
  }
)
