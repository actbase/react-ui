import type {
  ComponentProps,
  ComponentTheme,
  ComponentTypeProps,
} from '../component';
import type { ListItemThemeType } from './item.types';

export type ListCssPropsType = {
  index?: number;
};
export type ListType = Record<
  string,
  {
    item?: ListItemThemeType;
  } & ComponentTypeProps<ListCssPropsType>
>;

export type ListProps<T extends keyof JSX.IntrinsicElements = 'ul'> = Omit<
  JSX.IntrinsicElements[T],
  'type'
> &
  ComponentProps<ListType, ListCssPropsType> & {
    // Element
    el?: T;
    // html type
    htmlType?: string;
  };
export type ListThemeType = ComponentTheme<ListType, ListCssPropsType> & {
  item?: ListItemThemeType;
};
