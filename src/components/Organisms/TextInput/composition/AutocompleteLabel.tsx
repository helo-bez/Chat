import { twMerge } from "tailwind-merge"
import { InputTextDTO } from "../DTO/InputText.dto"
import { useAutoComplete } from "../context/InputTextContext"

export function Label({ className, placeholder, htmlFor, openClassName, closeClassName }: Pick<InputTextDTO, 'className' | 'placeholder' | 'htmlFor' | 'openClassName' | 'closeClassName'>) {
  const { isOpen, value, template } = useAutoComplete()
  return (
    <label htmlFor={htmlFor} className={twMerge(`
        group
        bg-inherit/5
        transition-all
        ${isOpen || value ? twMerge('-translate-x-2 top-0 -translate-y-1/2 text-[.75rem] px-[.25rem] rounded-full backdrop-blur-[2px]', openClassName) : twMerge('top-1/2 -translate-y-1/2', closeClassName)}
        absolute
        left-4
        select-none
        `, twMerge(className, template))}>
      {placeholder}
    </label>
  )
}