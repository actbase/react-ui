import Theme from '../theme';
import { ProviderProps } from './provider.types';
import React from 'react';

const Provider = React.memo<ProviderProps>(function Provider({
  children,
  theme,
}) {
  return <Theme.Provider theme={theme}>{children}</Theme.Provider>;
});

export default Provider;
