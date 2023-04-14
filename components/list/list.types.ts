import type { ElementProps, ElementThemeType } from '../element';
import type { ListItemThemeType } from './item.types';
import { ElementTypeProps } from '../element';

export type ListProps<
  T extends keyof JSX.IntrinsicElements,
  P extends string = string,
> = Omit<JSX.IntrinsicElements[T], 'type'> &
  ElementProps<P> & {
    // Element
    el?: T;
    // html type
    htmlType?: string;
  };
export type ListTypePropsThemeType = ElementTypeProps & {
  item?: ElementTypeProps;
};
export type ListThemeType<T extends string = string> = Omit<
  ElementThemeType<T>,
  'type'
> & {
  item?: ListItemThemeType;
  type?: Record<T, ListTypePropsThemeType>;
};
