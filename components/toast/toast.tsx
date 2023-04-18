import type { ToastProps, ToastThemeProps } from './toast.type';

import React from 'react';
import { useCreateElement } from '../element';

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(function Toast(
  { children, index, ...props },
  ref,
) {
  return useCreateElement<ToastProps, ToastThemeProps>(
    'toast',
    <div ref={ref} {...props}>
      {children}
    </div>,
    {
      index,
    },
  );
});

export default Toast;
