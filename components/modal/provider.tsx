import type {
  HandleModalType,
  ModalProviderProps,
  ModalProviderState,
} from './provider.types';
import type { ModalContext } from './context.types';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import context from './context';
import Modal from './modal';

export const ref = {
  current: undefined,
} as {
  current?: {
    modal: HandleModalType;
  };
};

const ModalProvider = React.memo<ModalProviderProps>(function ModalProvider({
  children,
}) {
  const [modals, setModals] = React.useState<ModalProviderState[]>([]);
  const value = React.useMemo<ModalContext>(
    () => ({
      modal(options) {
        setModals((prevState) => [
          ...prevState,
          {
            key: uuidv4(),
            ...options,
          },
        ]);
      },
    }),
    [],
  );
  React.useEffect(() => {
    ref.current = {
      modal: value.modal,
    };
  }, [value.modal]);
  return (
    <context.Provider value={value}>
      {children}
      {modals.map(({ key, message, ...props }) => {
        return (
          <Modal
            key={key}
            onDestroy={() => {
              setModals((prevState) =>
                prevState.filter((modal) => modal.key !== key),
              );
            }}
            {...props}
          >
            {message}
          </Modal>
        );
      })}
    </context.Provider>
  );
});

export default ModalProvider;
