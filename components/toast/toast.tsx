import type { ToastProps } from './toast.type';

import React from 'react';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(function Toast(
  { type, css: _css, children, className, index, ...props },
  ref,
) {
  const theme = Theme.useContext();
  const themeComponent = theme?.components?.toast;
  const themeComponentType = type
    ? theme?.components?.toast?.type?.[type]
    : undefined;

  return (
    <ClassNames>
      {({ css, cx }) => (
        <div
          ref={ref}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${typeof themeComponent?.css === 'function'
                ? themeComponent.css({
                    color: theme?.color,
                    index,
                  })
                : themeComponent?.css};
              ${type &&
              (typeof themeComponentType?.css === 'function'
                ? themeComponentType.css({
                    color: theme?.color,
                    index,
                  })
                : themeComponentType?.css)};
              ${typeof _css === 'function'
                ? _css({ color: theme?.color, index })
                : _css};
            `,
            getClassName(theme?.namespace, 'toast'),
            themeComponent?.className,
            type && getClassName(theme?.namespace, `toast__type__${type}`),
            themeComponentType?.className,
            className,
          )}
          {...props}
        >
          {children}
        </div>
      )}
    </ClassNames>
  );
});

export default Toast;
