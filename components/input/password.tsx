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
              type && theme?.components?.input?.password?.type?.[type]?.style,
              style,
            )}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${typeof theme?.components?.input?.password?.css === 'function'
                  ? theme.components.input.password.css({ color: theme?.color })
                  : theme?.components?.input?.password?.css}
                ${type &&
                (typeof theme?.components?.input?.password?.type?.[type]
                  ?.css === 'function'
                  ? // @ts-ignore
                    theme.components.input.password.type[type].css({
                      color: theme?.color,
                    })
                  : theme?.components?.input?.password?.type?.[type]?.css)}
                ${typeof _css === 'function'
                  ? _css({ color: theme?.color })
                  : _css}
              `,
              getClassName(theme?.namespace, 'input__password'),
              theme?.components?.input?.password?.className,
              type &&
                getClassName(
                  theme?.namespace,
                  `input__password__type__${type}`,
                ),
              type &&
                theme?.components?.input?.password?.type?.[type]?.className,
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
