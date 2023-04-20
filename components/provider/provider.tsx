import type { ProviderProps } from './provider.types';

import React from 'react';
import Theme from '../theme';
import Alert from '../alert';
import Toast from '../toast';

const Provider = React.memo<ProviderProps>(function Provider({
  children,
  theme,
}) {
  return (
    <Theme.Provider theme={theme}>
      <Alert.Provider>
        <Toast.Provider>{children}</Toast.Provider>
      </Alert.Provider>
    </Theme.Provider>
  );
});

export default Provider;
