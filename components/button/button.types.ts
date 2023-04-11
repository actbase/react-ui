interface ButtonProps {
  // 클래스 이름
  classNames?: string;
  // 버튼 스타일 type
  type?: string;
  // 버튼에 지정할 htmlType
  htmlType?: 'button' | 'submit' | 'reset';
  // 버튼의 형태, 둥근 정도
  radius?: number;
  // 버튼의 로딩상태
  loading?: boolean;
  // 버튼 사용 가능 여부
  disabled?: boolean;
}