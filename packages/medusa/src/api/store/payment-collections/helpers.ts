import {
  MedusaContainer,
  PaymentCollectionDTO,
} from "@biryanihouse/framework/types"
import { refetchEntity } from "@biryanihouse/framework/http"

export const refetchPaymentCollection = async (
  id: string,
  scope: MedusaContainer,
  fields: string[]
): Promise<PaymentCollectionDTO> => {
  return refetchEntity("payment_collection", id, scope, fields)
}
