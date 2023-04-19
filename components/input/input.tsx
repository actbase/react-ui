import type { InputProps } from './input.types';

import React from 'react';
import { ClassNames } from '@emotion/react';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';
import Theme from '../theme';
import mergeStyles from '../_util/mergeStyles';

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type, htmlType, style, css: _css, ...props },
  ref,
) {
  const theme = Theme.useContext();
  const themeComponent = theme?.components?.input;
  const themeComponentType = type ? themeComponent?.type?.[type] : undefined;
  return (
    <ClassNames>
      {({ css, cx }) => (
        <input
          ref={ref}
          type={htmlType ?? 'text'}
          style={mergeStyles(
            themeComponent?.style,
            themeComponentType?.style,
            style,
          )}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${typeof themeComponent?.css === 'function'
                ? themeComponent.css({ color: theme?.color })
                : themeComponent?.css}
              ${type &&
              (typeof themeComponentType?.css === 'function'
                ? themeComponentType.css({
                    color: theme?.color,
                  })
                : themeComponentType?.css)}
              ${typeof _css === 'function'
                ? _css({ color: theme?.color })
                : _css}
            `,
            getClassName(theme?.namespace, 'input'),
            themeComponent?.className,
            type && getClassName(theme?.namespace, `input__type__${type}`),
            themeComponentType?.className,
            className,
          )}
          {...props}
        />
      )}
    </ClassNames>
  );
});

export default Input;
