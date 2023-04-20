import type {
  HandleAlertType,
  AlertProviderProps,
  AlertProviderState,
} from './provider.types';
import type { AlertContext } from './context.types';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import context from './context';
import Alert from './alert';

export const ref = {
  current: undefined,
} as {
  current?: {
    alert: HandleAlertType;
  };
};

const AlertProvider = React.memo<AlertProviderProps>(function AlertProvider({
  children,
}) {
  const [alerts, setAlerts] = React.useState<AlertProviderState[]>([]);
  const value = React.useMemo<AlertContext>(
    () => ({
      alert(message, options) {
        setAlerts((prevState) => [
          ...prevState,
          {
            key: uuidv4(),
            message,
            ...options,
          },
        ]);
      },
    }),
    [],
  );
  React.useEffect(() => {
    ref.current = {
      alert: value.alert,
    };
  }, [value.alert]);
  return (
    <context.Provider value={value}>
      {children}
      {alerts.map(({ key, message, ...props }) => {
        return (
          <Alert
            key={key}
            onDestroy={() => {
              setAlerts((prevState) =>
                prevState.filter((alert) => alert.key !== key),
              );
            }}
            {...props}
          >
            {message}
          </Alert>
        );
      })}
    </context.Provider>
  );
});

export default AlertProvider;
