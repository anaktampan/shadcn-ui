import { FontItalicIcon } from "@radix-ui/react-icons"

import { Toggle } from "@/registry/new-york/ui/toggle"

export default function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <FontItalicIcon />
      Italic
    </Toggle>
  )
}
