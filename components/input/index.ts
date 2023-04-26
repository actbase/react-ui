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
export * from './select';
export * from './radio.types';
export * from './textarea.types';

import InternalInput from './input';
import InputCheckbox from './checkbox';
import InputEmail from './email';
import InputFile from './file';
import InputDate from './date';
import Inputcolor from './color';
import InputPassword from './password';
import InputNumber from './number';
import InputSelect from './select';
import InputRadio from './radio';
import InputTextarea from './textarea';

const Input = InternalInput as typeof InternalInput & {
  Checkbox: typeof InputCheckbox;
  Email: typeof InputEmail;
  File: typeof InputFile;
  Input: typeof InternalInput;
  Number: typeof InputNumber;
  Password: typeof InputPassword;
  Select: typeof InputSelect;
  Radio: typeof InputRadio;
  Textarea: typeof InputTextarea;
  Date: typeof InputDate;
  Color: typeof Inputcolor;
};

Input.Input = InternalInput;
Input.Checkbox = InputCheckbox;
Input.Email = InputEmail;
Input.File = InputFile;
Input.Number = InputNumber;
Input.Password = InputPassword;
Input.Select = InputSelect;
Input.Radio = InputRadio;
Input.Textarea = InputTextarea;

export default Input;
