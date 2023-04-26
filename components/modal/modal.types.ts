import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentTypeProps,
} from '../component';

export type HandleModalDestroyType = () => void;

export interface ModalTemplateProps {
  onDestroy: HandleModalDestroyType;
  [key: string]: any;
}

export interface ModalRenderProps {
  onDestroy: HandleModalDestroyType;
  [key: string]: any;
}
export type ModalTemplateType = (props: ModalTemplateProps) => React.ReactNode;
export type ModalRenderType = (props: ModalRenderProps) => React.ReactNode;

export type ModalCssPropsType = {
  index?: number;
};
export type ModalType = Record<
  string,
  ComponentTypeProps<ModalCssPropsType> & {
    template?: ModalTemplateType;
  }
>;

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ComponentProps<ModalType, ModalCssPropsType> {
  index?: number;
  template?: ModalTemplateType;
  render?: ModalRenderType;
  onDestroy: HandleModalDestroyType;
}

export type ModalThemeType = ComponentTheme<ModalType, ModalCssPropsType> & {
  template?: ModalTemplateType;
};
