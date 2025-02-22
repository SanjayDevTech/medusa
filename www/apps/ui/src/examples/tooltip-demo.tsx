import { InformationCircleSolid } from "@biryanihouse/icons"
import { Tooltip } from "@biryanihouse/ui"

export default function TooltipDemo() {
  return (
    <Tooltip content="The quick brown fox jumps over the lazy dog.">
      <InformationCircleSolid />
    </Tooltip>
  )
}
