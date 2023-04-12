import React from 'react';

export interface InputTextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  // 사이즈 조절 가능여부
  resize?: boolean;
  // 텍스트 에어리어 세로 폭
  rows?: number;
  // 텍스트 에어리어 가로 폭
  cols?: number;
}
