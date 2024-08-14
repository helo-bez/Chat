import { twMerge } from "tailwind-merge"
import { InputTextDTO } from "../DTO/InputText.dto"
import { useAutoComplete } from "../context/InputTextContext"

export function Input({ className, id, inputProps, type = 'text', onChange }: Pick<InputTextDTO, 'onChange' | 'className' | 'id' | 'inputProps' | 'type'>) {
  const { value, inputRef, handleInputChange, handleOpen, handleClose, template } = useAutoComplete()
  return (
    <input
      autoComplete={'off'}
      id={id}
      name={id}
      ref={inputRef}
      type={type}
      value={value}
      onChange={(event) => {
        handleInputChange(event)
        if (onChange) onChange(event)
      }}
      onFocus={handleOpen as any}
      onBlur={(event) => handleClose(event.target.value)}
      className={twMerge(`
      border-slate-700 focus:border-sky-600 text-inherit bg-inherit
      w-full 
      p-2 border
      rounded
      focus:outline-none
      ring-none
      `, twMerge(className, template))}
      {...inputProps}
    />
  )
}