import type React from 'react';
import type { ThemeType } from './theme.types';

export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme?: ThemeType;
}
