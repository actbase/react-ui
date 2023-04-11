import React from 'react';

export type InputErrorType = {};

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'label'> {
  label?: React.ReactNode;
  error?: InputErrorType;
}
