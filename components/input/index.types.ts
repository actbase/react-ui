import { InputThemeType as InternalInputThemeType } from './input.types';
import { InputCheckboxThemeType } from './checkbox.types';
import { InputFileThemeType } from './file.types';
import { InputRadioThemeType } from './radio.types';
import { InputTextareaThemeType } from './textarea.types';
import { InputNumberThemeType } from './number.types';
import { InputPasswordThemeType } from './password.types';
import { InputEmailThemeType } from './email.types';

export type InputThemeType = InternalInputThemeType & {
  checkbox?: InputCheckboxThemeType;
  email?: InputEmailThemeType;
  file?: InputFileThemeType;
  number?: InputNumberThemeType;
  password?: InputPasswordThemeType;
  radio?: InputRadioThemeType;
  textarea?: InputTextareaThemeType;
};
