export * from './index.types';
export {
  InputProps as InputInputProps,
  InputThemeType as InputInputThemeType,
} from './input.types';
export * from './checkbox.types';
export * from './color.types';
export * from './date.types';
export * from './email.types';
export * from './file.types';
export * from './password.types';
export * from './radio.types';
export * from './textarea.types';

import InternalInput from './input';
import InputCheckbox from './checkbox';
import InputEmail from './email';
import InputFile from './file';
import InputPassword from './password';
import InputNumber from './number';
import InputRadio from './radio';
import InputTextarea from './textarea';

const Input = InternalInput as typeof InternalInput & {
  Checkbox: typeof InputCheckbox;
  Email: typeof InputEmail;
  File: typeof InputFile;
  Input: typeof InternalInput;
  Number: typeof InputNumber;
  Password: typeof InputPassword;
  Radio: typeof InputRadio;
  Textarea: typeof InputTextarea;
};

Input.Input = InternalInput;
Input.Checkbox = InputCheckbox;
Input.Email = InputEmail;
Input.File = InputFile;
Input.Number = InputNumber;
Input.Password = InputPassword;
Input.Radio = InputRadio;
Input.Textarea = InputTextarea;

export default Input;
