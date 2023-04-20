import type { HandleAlertType } from './provider.types';

export * from './alert.types';
export * from './provider.types';
export * from './context.types';

import InternalAlert from './alert';
import AlertProvider, { ref } from './provider';
import context from './context';

const Alert = InternalAlert as typeof InternalAlert & {
  Provider: typeof AlertProvider;
  context: typeof context;
  alert: HandleAlertType;
};

Alert.Provider = AlertProvider;
Alert.context = context;
Alert.alert = function alert(message, options) {
  ref.current?.alert(message, options);
};

export default Alert;
