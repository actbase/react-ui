import type {
  ToastProviderHandle,
  ToastProviderProps,
  ToastState,
  ToastType,
} from './provider.types';
import type { ToastContext } from './context.type';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Toast from './toast';
import context from './context';
import Theme from '../theme';

export const ref = {
  current: undefined,
} as {
  current?: {
    toast: ToastType;
  };
};

const ToastProvider = React.forwardRef<ToastProviderHandle, ToastProviderProps>(
  function ToastProvider({ children }, _ref) {
    const theme = Theme.useContext();
    const [toasts, setToasts] = React.useState<ToastState[]>([]);
    const toastsRef = React.useRef<ToastState[]>([]);
    const toast = React.useCallback<ToastType>(
      (message, options) => {
        setToasts((prevState) => {
          const key = uuidv4();
          toastsRef.current = [
            ...prevState,
            {
              key,
              type: options?.type,
              message,
              render: options?.render,
              timeout: setTimeout(() => {
                toastsRef.current = toastsRef.current.filter(
                  (toast) => toast.key !== key,
                );
                setToasts(toastsRef.current);
              }, options?.timeout ?? theme?.components?.toast?.timeout),
            },
          ];
          return toastsRef.current;
        });
      },
      [theme?.components?.toast?.timeout],
    );
    const value = React.useMemo<ToastContext>(() => {
      return {
        toast,
      };
    }, [toast]);

    React.useImperativeHandle(_ref, () => ({
      toast,
    }));

    React.useEffect(() => {
      ref.current = {
        toast,
      };
    }, [toast]);

    React.useEffect(() => {
      return () => {
        toastsRef.current.forEach((toast) => {
          clearTimeout(toast.timeout);
        });
      };
    }, []);

    return (
      <context.Provider value={value}>
        {children}
        {toasts.map((toast, index) => {
          return (
            <Toast key={toast.key} type={toast.type} index={index}>
              {toast.render ? toast.render(toast.message) : toast.message}
            </Toast>
          );
        })}
      </context.Provider>
    );
  },
);

export default ToastProvider;
