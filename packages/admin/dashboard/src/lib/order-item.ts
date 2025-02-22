import { OrderLineItemDTO } from "@biryanihouse/types"

export const getFulfillableQuantity = (item: OrderLineItemDTO) => {
  return item.quantity - item.detail.fulfilled_quantity
}
