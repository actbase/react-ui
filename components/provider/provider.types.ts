import type React from 'react';
import { ThemeType } from '../theme';

export interface ProviderProps {
  children?: React.ReactNode;
  theme?: ThemeType;
}
