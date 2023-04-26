import type { ProviderProps } from './provider.types';

import React from 'react';
import Theme from '../theme';
import Modal from '../modal';
import Alert from '../alert';
import Toast from '../toast';

const Provider = React.memo<ProviderProps>(function Provider({
  children,
  theme,
}) {
  return (
    <Theme.Provider theme={theme}>
      <Modal.Provider>
        <Alert.Provider>
          <Toast.Provider>{children}</Toast.Provider>
        </Alert.Provider>
      </Modal.Provider>
    </Theme.Provider>
  );
});

export default Provider;
