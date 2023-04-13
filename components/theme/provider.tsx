import type { ThemeProviderProps } from './provider.types';

import React from 'react';
import context from './context';

const ThemeProvider = React.memo<ThemeProviderProps>(function ThemeProvider({
  children,
  theme,
}) {
  return <context.Provider value={theme}>{children}</context.Provider>;
});

export default ThemeProvider;
