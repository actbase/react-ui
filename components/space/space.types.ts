import type { ElementProps, ElementThemeType } from '../element';

export type SpaceAlignType = 'start' | 'center' | 'end' | 'stretch';
export type SpaceJustifyType =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type SpaceSizeType = Record<string, number>;
export type SpaceDirectionType = 'horizontal' | 'vertical';

export type SpaceProps<
  T extends keyof JSX.IntrinsicElements,
  P extends string = string,
> = JSX.IntrinsicElements[T] &
  ElementProps<P> & {
    // Element
    el?: T;
    // Vertical Align
    align?: SpaceAlignType;
    // Justify Content
    justify?: SpaceJustifyType;
    // Gap Size
    size?: keyof SpaceSizeType | number;
    // Inline
    inline?: boolean;
    // Flex Direction
    direction?: SpaceDirectionType;
    // Flex Wrap
    wrap?: boolean;
    // Reverse
    reverse?: boolean;
    // html type
    htmlType?: string;
  };

export type SpaceThemeType<T extends string = string> = ElementThemeType<T> & {
  // default size
  defaultSize?: keyof SpaceSizeType;
  // size
  size?: SpaceSizeType;
};
