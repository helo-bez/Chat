import { HTMLAttributes } from "react";

export interface OptionsDTO { value: string | number, label: string }

export interface InputTextDTO extends Pick<HTMLAttributes<any>, 'className' | 'children' | 'placeholder'> {
  type?: 'text' | 'password'
  htmlFor: string;
  value: string | number;
  onChange?: Function;
  id: string;
  errorClassName?: string;
  successClassName?: string;
  openClassName?: string;
  closeClassName?: string;
  inputProps?: HTMLAttributes<HTMLInputElement>;
  error?: boolean;
  success?: boolean;
}


//template DTO
export interface DefaultTemplateDTO extends Pick<InputTextDTO, 'placeholder' | 'id' | 'error' | 'success'> { }
