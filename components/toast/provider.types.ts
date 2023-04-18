import type React from 'react';
import type { ToastProps } from './toast.type';

export interface ToastProviderProps {
  children?: React.ReactNode;
}

export interface ToastProviderHandle {
  toast: ToastType;
}

export interface ToastState {
  key?: React.Key;
  type?: ToastProps['type'];
  message?: string;
  render?: (message?: string) => React.ReactNode;
  timeout?: NodeJS.Timeout;
}

export type ToastOptionsType = {
  type?: ToastProps['type'];
  render?: (message?: string) => React.ReactNode;
  timeout?: number;
};

export type ToastType = (message?: string, options?: ToastOptionsType) => void;
