import type React from 'react';
import type { FormItemThemeType, FormItemValidateType } from './item';
import type { ElementProps, ElementThemeType } from '../element';

export type FormValidateTimingType = 'ON_SUBMIT' | 'ON_CHANGE';

export interface FormProps<T = FormData, P = any, S extends string = string>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>,
    ElementProps<S> {
  children?: React.ReactNode;
  // default values
  defaultValues?: Record<string, any>;
  // on submit
  onSubmit?: (data: T, event: React.FormEvent) => Promise<P> | P;
  onSuccess?: (data: P) => Promise<void> | void;
  // serialize form data when on submit
  serialize?: (data: Record<string, any>) => T;
  // prevent event when on submit
  prevent?: boolean;
  // validate timing
  validateTiming?: FormValidateTimingType;
  // allow submitting even if there is an error
  allowForceSubmit?: boolean;
  // validates
  validates?: Record<string, FormItemValidateType>;
  // loading
  loading?: boolean;
}

export type FormThemeType<T extends string = string> = ElementThemeType<T> & {
  // item
  item?: FormItemThemeType;
};
