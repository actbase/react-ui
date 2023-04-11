import type { SpaceSizeType } from '../space/space.types';

export interface ThemeProps {
  size: number;
  components: {
    button: {};
    divider: {};
    form: {};
    input: {};
    space: {
      size: Record<SpaceSizeType, number>;
    };
    table: {};
    typography: {};
  };
}
