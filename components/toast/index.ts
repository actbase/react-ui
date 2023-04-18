export * from './provider.types';
export * from './toast.type';
export * from './context.type';

import type { ToastType } from './provider.types';

import InternalToast from './toast';
import useContext from './hooks/useContext';
import ToastProvider, { ref } from './provider';

const Toast = InternalToast as typeof InternalToast & {
  Provider: typeof ToastProvider;
  toast: ToastType;
  useContext: typeof useContext;
};
Toast.Provider = ToastProvider;
Toast.toast = function toast(message, options) {
  ref.current?.toast(message, options);
};
Toast.useContext = useContext;

export default Toast;
