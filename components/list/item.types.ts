import type { ElementProps, ElementThemeType } from '../element';

export type ListItemProps<
  T extends keyof JSX.IntrinsicElements,
  P extends string = string,
> = Omit<JSX.IntrinsicElements[T], 'type'> &
  ElementProps<P> & {
    // Element
    el?: T;
    // html type
    htmlType?: string;
  };
export type ListItemThemeType<T extends string = string> = ElementThemeType<T>;
