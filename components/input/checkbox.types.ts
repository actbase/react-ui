import { InputProps } from "./input.types";

interface CheckboxProps extends InputProps {
    // radio input간에 공유할 name
  name?: string;
  // 기본으로 선택된 radio input표시
  defaultChecked?: boolean;
  // 선택된 radio input 표시
  checked?: boolean;
}