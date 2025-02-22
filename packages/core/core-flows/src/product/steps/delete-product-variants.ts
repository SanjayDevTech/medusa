import { IProductModuleService } from "@biryanihouse/framework/types"
import { Modules } from "@biryanihouse/framework/utils"
import { StepResponse, createStep } from "@biryanihouse/framework/workflows-sdk"

/**
 * The IDs of the product variants to delete.
 */
export type DeleteProductVariantsStepInput = string[]

export const deleteProductVariantsStepId = "delete-product-variants"
/**
 * This step deletes one or more product variants.
 */
export const deleteProductVariantsStep = createStep(
  deleteProductVariantsStepId,
  async (ids: DeleteProductVariantsStepInput, { container }) => {
    const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

    await service.softDeleteProductVariants(ids)
    return new StepResponse(void 0, ids)
  },
  async (prevIds, { container }) => {
    if (!prevIds?.length) {
      return
    }

    const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

    await service.restoreProductVariants(prevIds)
  }
)
