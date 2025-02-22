import { Label, Switch } from "@biryanihouse/ui"

export default function SwitchChecked() {
  return (
    <div className="flex items-center gap-x-2">
      <Switch id="manage-inventory-checked" checked={true} />
      <Label htmlFor="manage-inventory-checked">Manage Inventory</Label>
    </div>
  )
}
