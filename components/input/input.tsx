import React from 'react';
import { ClassNames } from '@emotion/react';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';
import Theme from '../theme';
import { InputProps } from './input.types';
import mergeStyles from '../_util/mergeStyles';

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type, htmlType, style, css: _css, ...props },
  ref,
) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
        <input
          ref={ref}
          type={htmlType ?? 'text'}
          style={mergeStyles(
            theme?.components?.input?.style,
            type && theme?.components?.input?.type?.[type]?.style,
            style,
          )}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${typeof theme?.components?.input?.css === 'function'
                ? theme.components.input.css({ color: theme?.color })
                : theme?.components?.input?.css}
              ${type &&
              (typeof theme?.components?.input?.type?.[type]?.css === 'function'
                ? // @ts-ignore
                  theme.components.input.type[type].css({
                    color: theme?.color,
                  })
                : theme?.components?.input?.type?.[type]?.css)}
              ${typeof _css === 'function'
                ? _css({ color: theme?.color })
                : _css}
            `,
            getClassName(theme?.namespace, 'input'),
            theme?.components?.input?.className,
            type && getClassName(theme?.namespace, `input__type__${type}`),
            type && theme?.components?.input?.type?.[type]?.className,
            className,
          )}
          {...props}
        />
      )}
    </ClassNames>
  );
});

export default Input;
