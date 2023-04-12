import { InputProps } from './input.types';

export interface FileProps extends InputProps {
  // 업로드 할 수 있는 파일의 최대크기
  maxSize?: number;
  // 업로드 할 수 있는 파일의 최대 갯수
  maxCount?: number;
}
