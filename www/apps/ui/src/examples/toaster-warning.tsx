import { Button, Toaster, toast } from "@biryanihouse/ui"

export default function ToasterWarning() {
  return (
    <>
      <Toaster />
      <Button
        onClick={() =>
          toast.warning("Warning", {
            description: "The quick brown fox jumps over the lazy dog.",
            duration: 5000,
          })
        }
      >
        Show
      </Button>
    </>
  )
}
