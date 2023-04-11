import context from './context';
import React from 'react';
import type { ThemeType } from './theme.types';

export interface ProviderProps {
  children?: React.ReactNode;
  theme?: ThemeType;
}

const Provider = React.memo<ProviderProps>(function Provider({
  children,
  theme,
}) {
  return <context.Provider value={theme}>{children}</context.Provider>;
});

export default Provider;
