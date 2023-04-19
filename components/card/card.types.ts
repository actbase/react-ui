import type {
  ComponentType,
  ComponentProps,
  ComponentTheme,
} from '../component';

export type CardCssPropsType = {};
export type CardType = ComponentType<CardCssPropsType>;

export type CardProps<T extends keyof JSX.IntrinsicElements = 'div'> = Omit<
  JSX.IntrinsicElements[T],
  'color'
> &
  ComponentProps<CardType, CardCssPropsType> & {
    // Element
    el?: T;
    // html type
    htmlType?: string;
  };

export type CardThemeType = ComponentTheme<CardType, CardCssPropsType>;
