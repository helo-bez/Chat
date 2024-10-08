import { ButtonHTMLAttributes } from "react";
import { clsx } from 'clsx'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'secondary' | 'error' | 'success',
  widthStyle?: 'full' | 'fit',
  styles?: string, 
}
export function Button({ id, type = 'submit', styleType = 'primary', onClick, children, widthStyle = 'fit', styles, ...restButtonProps}: ButtonProps) {
  return (
    <button
      data-testid={id}
      type={type}
      onClick={onClick}
      className={ styles ? styles : `
        rounded-full
        text-brand-white
        h-10
        w-${widthStyle}
        px-10
        disabled:bg-gray-dark
        disabled:pointer-events-none
        ${clsx(
        {
          'hover:brightness-75 hover:transition': styleType == 'primary' || styleType == 'error' || 'success',
          'bg-brand-primary transition': styleType == 'primary',
          'bg-brand-secondary transition': styleType == 'secondary',
          'bg-brand-danger transition': styleType == 'error',
          'bg-brand-success transition': styleType == 'success',
        })
        }
      `}
      {...restButtonProps}
    >
      {children}
    </button>
  )
}

