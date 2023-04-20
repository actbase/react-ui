import type React from 'react';
import type { AlertType, AlertTemplateType } from './alert.types';

export interface AlertOptions {
  type?: keyof AlertType;
  template?: AlertTemplateType;
  [key: string]: any;
}
export type HandleAlertType = (
  message?: React.ReactNode,
  options?: AlertOptions,
) => void;

export interface AlertProviderState {
  key?: React.Key;
  message?: React.ReactNode;
  type?: keyof AlertType;
  template?: AlertTemplateType;
}

export interface AlertProviderProps {
  children?: React.ReactNode;
}
