import React from 'react';
import { InputSelectOptionProps } from './option.types';

const InputSelectOption = React.forwardRef<
  HTMLOptionElement,
  InputSelectOptionProps
>(function InputSelectOption({ children, ...props }, ref) {
  return (
    <option ref={ref} {...props}>
      {children}
    </option>
  );
});

export default InputSelectOption;
