import type {
  ComponentType,
  ComponentProps,
  ComponentTheme,
} from '../component';

export type BlockCssPropsType = {};
export type BlockType = ComponentType<BlockCssPropsType>;

export type BlockProps<T extends keyof JSX.IntrinsicElements = 'div'> =
  JSX.IntrinsicElements[T] &
    ComponentProps<BlockType, BlockCssPropsType> & {
      // Element
      el?: T;
      // html type
      htmlType?: string;
    };

export type BlockThemeType = ComponentTheme<BlockType, BlockCssPropsType>;
