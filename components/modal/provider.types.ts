import type React from 'react';
import type { ModalType, ModalTemplateType } from './modal.types';

export interface ModalOptions {
  type?: keyof ModalType;
  render?: ModalTemplateType;
  [key: string]: any;
}
export type HandleModalType = (options?: ModalOptions) => void;

export interface ModalProviderState {
  key?: React.Key;
  message?: React.ReactNode;
  type?: keyof ModalType;
  render?: ModalTemplateType;
}

export interface ModalProviderProps {
  children?: React.ReactNode;
}
