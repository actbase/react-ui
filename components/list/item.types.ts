import type {
  ComponentProps,
  ComponentTheme,
  ComponentType,
} from '../component';

export type ListItemCssPropsType = {};
export type ListItemType = ComponentType<ListItemCssPropsType>;

export type ListItemProps<T extends keyof JSX.IntrinsicElements = 'li'> = Omit<
  JSX.IntrinsicElements[T],
  'type'
> &
  ComponentProps<ListItemType, ListItemCssPropsType> & {
    // Element
    el?: T;
    // html type
    htmlType?: string;
  };
export type ListItemThemeType = ComponentTheme<
  ListItemType,
  ListItemCssPropsType
>;
