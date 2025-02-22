import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@biryanihouse/framework/http"

import {
  importProductsWorkflowId,
  waitConfirmationProductImportStepId,
} from "@biryanihouse/core-flows"
import { IWorkflowEngineService } from "@biryanihouse/framework/types"
import { Modules, TransactionHandlerType } from "@biryanihouse/framework/utils"
import { StepResponse } from "@biryanihouse/framework/workflows-sdk"

export const POST = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const workflowEngineService: IWorkflowEngineService = req.scope.resolve(
    Modules.WORKFLOW_ENGINE
  )
  const transactionId = req.params.transaction_id

  await workflowEngineService.setStepSuccess({
    idempotencyKey: {
      action: TransactionHandlerType.INVOKE,
      transactionId,
      stepId: waitConfirmationProductImportStepId,
      workflowId: importProductsWorkflowId,
    },
    stepResponse: new StepResponse(true),
  })

  res.status(202).json({})
}
