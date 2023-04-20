import type React from 'react';
import type {
  ComponentProps,
  ComponentTheme,
  ComponentTypeProps,
} from '../component';

export type HandleAlertDestroyType = () => void;

export interface AlertTemplateProps {
  children?: React.ReactNode;
  onDestroy: HandleAlertDestroyType;
  [key: string]: any;
}
export type AlertTemplateType = (props: AlertTemplateProps) => React.ReactNode;

export type AlertCssPropsType = {
  index?: number;
};
export type AlertType = Record<
  string,
  ComponentTypeProps<AlertCssPropsType> & {
    template?: AlertTemplateType;
  }
>;

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ComponentProps<AlertType, AlertCssPropsType> {
  index?: number;
  template?: AlertTemplateType;
  onDestroy: HandleAlertDestroyType;
}

export type AlertThemeType = ComponentTheme<AlertType, AlertCssPropsType> & {
  template?: AlertTemplateType;
};
