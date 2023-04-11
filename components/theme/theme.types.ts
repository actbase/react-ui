import { SpaceSizeType } from '../space/space.types';

export interface ThemeProps {
  size: 10;
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
