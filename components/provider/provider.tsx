import type { ProviderProps } from './provider.types';

import React from 'react';
import Theme from '../theme';
import Toast from '../toast';

const Provider = React.memo<ProviderProps>(function Provider({
  children,
  theme,
}) {
  return (
    <Theme.Provider theme={theme}>
      <Toast.Provider>{children}</Toast.Provider>
    </Theme.Provider>
  );
});

export default Provider;
