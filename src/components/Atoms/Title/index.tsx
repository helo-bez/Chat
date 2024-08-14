import clsx from "clsx"

export interface TitleProps {
    children?: React.ReactNode,
    className?: string,
    Component?: 'h1' | 'h2' | 'h3' | 'h4',
    size?: 'small' | 'medium' | 'large',
    typeInformation?: 'default' | 'white' | 'black' | 'info' | 'warning' | 'danger' | 'success',
}

export function Title({ children, className, Component = 'h2', size = 'medium', typeInformation = 'black' }: TitleProps): React.ReactElement {

    return (
        <Component
            className={`
            ${clsx({
                'text-2xl': size === 'small',
                'text-3xl': size === 'medium',
                'text-4xl': size === 'large',
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
            ${className}
        `}
            children={children}
        />
    )
}