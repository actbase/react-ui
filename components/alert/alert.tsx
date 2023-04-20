import React from 'react';
import { AlertProps } from './alert.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  {
    type,
    css: _css,
    children,
    className,
    onDestroy,
    index,
    template,
    ...props
  },
  ref,
) {
  const theme = Theme.useContext();
  const themeComponent = theme?.components?.alert;
  const themeComponentType = type
    ? theme?.components?.alert?.type?.[type]
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
            getClassName(theme?.namespace, 'alert'),
            themeComponent?.className,
            type && getClassName(theme?.namespace, `alert__type__${type}`),
            themeComponentType?.className,
            className,
          )}
          {...props}
        >
          {template
            ? template({ children, onDestroy })
            : themeComponentType?.template
            ? themeComponentType.template({ children, onDestroy })
            : themeComponent?.template
            ? themeComponent.template({ children, onDestroy })
            : children}
        </div>
      )}
    </ClassNames>
  );
});

export default Alert;
