import { PlusMini } from "@biryanihouse/icons"
import { Copy, IconButton, Text } from "@biryanihouse/ui"

export default function CopyAsChild() {
  return (
    <div className="flex items-center gap-x-2">
      <Text>Copy command</Text>
      <Copy content="yarn add @biryanihouse/ui" asChild>
        <IconButton>
          <PlusMini />
        </IconButton>
      </Copy>
    </div>
  )
}
