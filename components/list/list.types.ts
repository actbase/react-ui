import type { ElementProps, ElementThemeType } from '../element';
import type { ListItemThemeType } from './item.types';

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
export type ListThemeType<T extends string = string> = ElementThemeType<T> & {
  item?: ListItemThemeType;
};
