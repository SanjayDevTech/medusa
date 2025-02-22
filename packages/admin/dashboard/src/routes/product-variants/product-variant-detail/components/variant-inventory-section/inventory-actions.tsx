import { useTranslation } from "react-i18next"

import { Buildings } from "@biryanihouse/icons"
import { InventoryItemDTO } from "@biryanihouse/types"

import { ActionMenu } from "../../../../../components/common/action-menu"

export const InventoryActions = ({ item }: { item: InventoryItemDTO }) => {
  const { t } = useTranslation()

  return (
    <ActionMenu
      groups={[
        {
          actions: [
            {
              icon: <Buildings />,
              label: t("products.variant.inventory.navigateToItem"),
              to: `/inventory/${item.id}`,
            },
          ],
        },
      ]}
    />
  )
}
