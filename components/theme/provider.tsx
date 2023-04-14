import type { ThemeProviderProps } from './provider.types';

import React from 'react';
import context from './context';
import { Global } from '@emotion/react';

const ThemeProvider = React.memo<ThemeProviderProps>(function ThemeProvider({
  children,
  theme,
}) {
  return (
    <context.Provider value={theme}>
      {theme?.global?.styles && <Global styles={theme?.global?.styles} />}
      {children}
    </context.Provider>
  );
});

export default ThemeProvider;
