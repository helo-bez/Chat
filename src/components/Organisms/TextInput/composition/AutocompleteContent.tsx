import { twMerge } from "tailwind-merge"
import { InputTextDTO } from "../DTO/InputText.dto"
import { AutoCompleteProvider } from "../context/InputTextContext"

export function Content({ className, children, error, success, errorClassName, successClassName }: Pick<InputTextDTO, 'className' | 'children' | 'error' | 'success' | 'errorClassName' | 'successClassName'>) {
  return (
    <AutoCompleteProvider error={error} success={success} errorClassName={errorClassName} successClassName={successClassName}>
      <div className={twMerge("relative text-zinc-900 dark:text-white bg-inherit rounded-full", className)}>
        {children}
      </div>
    </AutoCompleteProvider>
  )
}
