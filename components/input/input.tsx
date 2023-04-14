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
          style={mergeStyles(theme?.components?.input?.style, style)}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${theme?.components?.input?.css}
              ${type && theme?.components?.input?.type?.[type]}
              ${_css}
            `,
            getClassName(theme?.namespace, 'input'),
            theme?.components?.input?.className,
            type && getClassName(theme?.namespace, `input__type__${type}`),
            className,
          )}
          {...props}
        />
      )}
    </ClassNames>
  );
});

export default Input;
