import context from './context';
import React from 'react';
import type { ThemeProps } from './index';

export interface ProviderProps {
  children?: React.ReactNode;
  theme?: ThemeProps;
}

const Provider = React.memo<ProviderProps>(function Provider({
  children,
  theme,
}) {
  return <context.Provider value={theme}>{children}</context.Provider>;
});

export default Provider;
