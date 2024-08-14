
export interface InputProps {
  id: string
  type: 'text' | 'password' | 'number',
  placeholder?: string,
  onChange?: any,
  disabled?: boolean,
  labelText?: string,
  errorMessage?: string,
  styles?: string,
  onKeyUp?: any
  onKeyDown?: any
  value?: string
  error?: boolean,
  darker?: boolean
  hasIcon?: boolean
}

export function Input({ id, type, placeholder, onChange, disabled, labelText, errorMessage, onKeyUp, onKeyDown, darker, value, error, hasIcon }: InputProps) {
  const defaultStyle = `placeholder:text-gray-light placeholder:font-roboto placeholder:font-light h-10 rounded ${hasIcon? 'pl-10' : 'pl-5'} border-[1px] border-gray focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-0 w-full disabled:bg-gray`
  const errorStyle = 'placeholder:text-gray-light placeholder:font-roboto placeholder:font-light h-10 rounded pl-5 border-[1px] border-brand-danger focus-visible:ring-2 focus-visible:ring-brand-danger focus-visible:outline-0 bg-error-input-background w-full'
  const darkerStyle = 'text-white placeholder:text-white placeholder:font-roboto placeholder:font-light h-10 rounded pl-10 border-[1px] border-white focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-0 w-full disabled:bg-gray bg-gray-darker'
  return (
    <>
      {(labelText && labelText?.length > 0) && <label htmlFor={id}>{labelText}</label>}
      {(errorMessage && errorMessage?.length > 0) && <p className="text-brand-danger bg- text-left">{errorMessage.toString()}</p>}
      <input
        data-testid={id}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        disabled={disabled}
        className={
          errorMessage ? errorStyle : defaultStyle &&
          darker ? darkerStyle : defaultStyle 
        }
      />
    </>
  )
}

export function InputCode({ id, type, styles, errorMessage, value, error, ...restInputProps }: InputProps) {

  const defaultStyle = 'w-full h-16 border-solid appearance-none border-[1px] text-center text-4xl text-gray placeholder:text-gray-light rounded'
  const errorStyle = 'w-full border-solid appearance-none border-[1px] text-center text-4xl text-gray p-2 placeholder:text-gray-light placeholder:font-roboto placeholder:font-light rounded border-[1px] border-brand-danger focus-visible:ring-2 focus-visible:ring-brand-danger focus-visible:outline-0 bg-error-input-background '

  return (
    <>
      {(errorMessage && errorMessage?.length > 0) && <p className="text-brand-danger text-left block">{errorMessage}</p>}
      <input
        id={id}
        type={type}
        defaultValue={value}
        className={error ? errorStyle : defaultStyle}
        maxLength={5}
        {...restInputProps}
      />
    </>
  )
}

