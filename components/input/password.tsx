import React from 'react';
import { InputPasswordProps } from './password.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import mergeStyles from '../_util/mergeStyles';

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  function InputPassword(
    {
      hidden = true,
      className,
      type,
      htmlType,
      css: _css,
      style,
      placeholder,
      ...props
    },
    ref,
  ) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type={htmlType ?? (hidden ? 'password' : 'text')}
            style={mergeStyles(
              theme?.components?.input?.password?.style,
              style,
            )}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${theme?.components?.input?.password?.css}
                ${type && theme?.components?.input?.password?.type?.[type]}
                ${_css}
              `,
              getClassName(theme?.namespace, 'input__password'),
              theme?.components?.input?.password?.className,
              type &&
                getClassName(
                  theme?.namespace,
                  `input__password__type__${type}`,
                ),
              className,
            )}
            placeholder={placeholder}
            {...props}
          />
        )}
      </ClassNames>
    );
  },
);

export default InputPassword;
