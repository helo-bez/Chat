'use client'
import { createContext, useContext, useState, ReactNode, MutableRefObject, LegacyRef, ChangeEvent, useRef } from "react";
import { OptionsDTO } from "../DTO/InputText.dto";

interface AutoComplete {
  data: Record<string, string | null>;
  issues: Record<string, string | null>;
}

interface InputTextContextDTO {
  isOpen?: boolean;
  error?: boolean;
  success?: boolean;
  inputRef?: MutableRefObject<null> | LegacyRef<HTMLInputElement> | undefined;
  handleInputChange: Function;
  handleOpen: Function;
  handleClose: Function;
  handleClearFilter: Function;
  value?: string;
  setValue: Function;
  template?: string;
}

const AutoComplete = createContext<InputTextContextDTO>({
  isOpen: false,
  handleInputChange: () => { },
  handleOpen: () => { },
  handleClose: () => { },
  handleClearFilter: () => { },
  setValue: () => { },
});

export function AutoCompleteProvider({ children, error, success,
  errorClassName = 'border-red-700 focus:border-red-600 text-red-500',
  successClassName = 'border-green-700 focus:border-green-600 text-green-500'
}: { children: ReactNode, error?: boolean, success?: boolean, errorClassName?: string, successClassName?: string }) {
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  let template = ''
  switch (true) {
    case (error): {
      template = errorClassName
      break
    }
    case (success): {
      template = successClassName
      break
    }
  }
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = (value?: string) => {
    setIsOpen(false);
  };


  const handleClearFilter = () => {
    setValue('')
  }

  return (
    <AutoComplete.Provider value={{
      value,
      setValue,
      isOpen,
      inputRef,
      handleInputChange,
      handleOpen,
      handleClose,
      handleClearFilter,
      error,
      success,
      template
    }}>
      {children}
    </AutoComplete.Provider>
  );
}

export function useAutoComplete() {
  return useContext(AutoComplete);
}
