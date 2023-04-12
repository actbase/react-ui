export type FormContextErrorType = Record<string, string>;

export interface FormContext {
  // loading
  loading?: boolean;
  // error
  error?: FormContextErrorType;
  // set error
  setError?: (error: FormContextErrorType) => void;
  // inputs
  inputs: Record<string, HTMLInputElement>;
  // get value
  getValue: (name: string) => string | undefined;
  // set value
  setValue: (name: string, value: string) => void;
}
