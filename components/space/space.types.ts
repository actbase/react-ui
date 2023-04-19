import type {
  ComponentType,
  ComponentProps,
  ComponentTheme,
} from '../component';

export type SpaceCssPropsType = {};
export type SpaceType = ComponentType<SpaceCssPropsType>;

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

export type SpaceProps<T extends keyof JSX.IntrinsicElements = 'div'> =
  JSX.IntrinsicElements[T] &
    ComponentProps<SpaceType, SpaceCssPropsType> & {
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

export type SpaceThemeType = ComponentTheme<SpaceType, SpaceCssPropsType> & {
  // default size
  defaultSize?: keyof SpaceSizeType;
  // size
  size?: SpaceSizeType;
};
