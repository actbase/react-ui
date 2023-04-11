export interface InputProps {
  // 클래스 이름
  classNames?: string;
  // 기본 값
  defaultValue?: string;
  // 변화하는 값
  value?: string;
  // 입력할 수 있는 최대 길이
  maxLength?: number;
  // 인풋 가능여부
  disabled?: boolean;
  // 에러 발생여부
  error?: boolean;
}
