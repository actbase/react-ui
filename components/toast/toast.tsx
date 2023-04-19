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

  return (
    <ClassNames>
      {({ css, cx }) => (
        <div
          ref={ref}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${typeof theme?.components?.toast?.css === 'function'
                ? theme?.components?.toast?.css({
                    color: theme?.color,
                    index,
                  })
                : theme?.components?.toast?.css};
              ${type &&
              (typeof theme?.components?.toast?.type?.[type]?.css === 'function'
                ? // @ts-ignore
                  theme.components.toast.type[type].css({
                    color: theme?.color,
                    index,
                  })
                : theme?.components?.toast?.type?.[type]?.css)};
              ${typeof _css === 'function'
                ? _css({ color: theme?.color, index })
                : _css};
            `,
            getClassName(theme?.namespace, 'toast'),
            theme?.components?.toast?.className,
            type && getClassName(theme?.namespace, `toast__type__${type}`),
            type && theme?.components?.toast?.type?.[type]?.className,
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
