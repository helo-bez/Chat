import clsx from 'clsx'
import * as React from 'react'

export interface TextProps {
  children?: React.ReactNode,
  Component?: 'p' | 'a',
  size?: 'large' | 'medium' | 'small',
  typeInformation?: 'default' | 'white' | 'black' | 'info' | 'warning' | 'danger' | 'success',
  direction?: 'horizontal' | 'vertical',
  className?: string
}
export function Text({ Component = 'p', size = 'medium', children, typeInformation = 'black', direction = 'horizontal', className }: TextProps) {
  return (
    <Component
      className={`
        font-roboto
        w-fit
      ${clsx({
        'text-lg': size === 'large',
        'text-base': size === 'medium',
        'text-sm': size === 'small',
      })}
      ${clsx({
        'text-gray-light': typeInformation === 'default',
        'text-brand-white': typeInformation === 'white',
        'text-gray-darkest': typeInformation === 'black',
        'text-brand-info': typeInformation === 'info',
        'text-brand-warning': typeInformation === 'warning',
        'text-brand-danger': typeInformation === 'danger',
        'text-brand-success': typeInformation === 'success',
      })}
      ${clsx({
        'writing-mode-vertical-lr': direction === 'vertical'
      })}
        ${className}
      `}
    >
      {children}
    </Component>
  )
}