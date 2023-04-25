export * from './select.types';
export * from './option.types';

import InternalSelect from './select';
import InputSelectOption from './option';

const Select = InternalSelect as typeof InternalSelect & {
  Option: typeof InputSelectOption;
};
Select.Option = InputSelectOption;

export default Select;
