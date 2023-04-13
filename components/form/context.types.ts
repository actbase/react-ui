import type React from 'react';
import type { FormItemErrorType } from './item.types';

export interface FormContext {
  // loading
  loading?: boolean;
  // error
  error?: FormItemErrorType;
  // set error
  setError?: React.Dispatch<
    React.SetStateAction<FormItemErrorType | undefined>
  >;
  // inputs
  inputs: Record<string, HTMLInputElement>;
  // get value
  getValue: (name: string) => string | undefined;
  // set value
  setValue: (name: string, value: string) => void;
  // allow submitting even if there is an error
  allowForceSubmit: boolean;
  // reset date
  resetDate?: Date;
}
