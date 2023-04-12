import { InputProps } from './input.types';

export interface CheckboxProps extends InputProps {
  // radio input간에 공유할 name
  name?: string;
  // 기본으로 선택된 radio input표시
  defaultChecked?: boolean;
}
