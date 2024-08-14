import { twMerge } from "tailwind-merge"
import { InputTextDTO } from "../DTO/InputText.dto"
import { useAutoComplete } from "../context/InputTextContext"
import { XIcon } from "lucide-react"

export function Clear({ className }: Pick<InputTextDTO, 'className'>) {
  const { handleClearFilter, template } = useAutoComplete()
  return (
    <XIcon onClick={handleClearFilter as any} className={twMerge("w-4 absolute right-4 top-1/2 -translate-y-1/2 hover:text-red-500/50 cursor-pointer", twMerge(className, template))} />
  )
}