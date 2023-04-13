import { InputThemeType as InternalInputThemeType } from './input.types';
import { InputCheckboxThemeType } from './checkbox.types';
import { InputFileThemeType } from './file.types';
import { InputRadioThemeType } from './radio.types';
import { InputTextareaThemeType } from './textarea.types';

export type InputThemeType = InternalInputThemeType & {
  checkbox?: InputCheckboxThemeType;
  file?: InputFileThemeType;
  radio?: InputRadioThemeType;
  textarea?: InputTextareaThemeType;
};
