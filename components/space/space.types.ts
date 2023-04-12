import { SerializedStyles } from '@emotion/react';

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

export type SpaceProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T] & {
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
  };

export type SpaceThemeType = {
  // default justify
  justify?: SpaceJustifyType;
  // default align
  align?: SpaceAlignType;
  // default size
  defaultSize?: keyof SpaceSizeType;
  // size
  size?: SpaceSizeType;
  // style
  style?: SerializedStyles;
};
