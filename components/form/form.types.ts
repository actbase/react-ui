import type React from 'react';
import type { FormItemThemeType } from './item';

export type FormValidateTimingType = 'ON_SUBMIT' | 'ON_CHANGE';

export interface FormProps<T = FormData>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children?: React.ReactNode;
  // default values
  defaultValues?: Record<string, string>;
  // on submit
  onSubmit?: (data: T, event: React.FormEvent) => Promise<void> | void;
  // serialize form data when on submit
  serialize: (data: Record<string, string>) => T;
  // prevent event when on submit
  prevent?: boolean;
  // validate timing
  validateTiming?: FormValidateTimingType;
}

export type FormThemeType = {
  item?: FormItemThemeType;
};
