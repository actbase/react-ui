import React from 'react';
import { InputEmailProps } from './email.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import mergeStyles from '../_util/mergeStyles';

const InputEmail = React.forwardRef<HTMLInputElement, InputEmailProps>(
  function InputEmail(
    { className, placeholder, style, type, css: _css, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type="email"
            style={mergeStyles(
              theme?.components?.input?.email?.style,
              type && theme?.components?.input?.email?.type?.[type]?.style,
              style,
            )}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${typeof theme?.components?.input?.email?.css === 'function'
                  ? theme?.components?.input?.email?.css({
                      color: theme?.color,
                    })
                  : theme?.components?.input?.email?.css}
                ${type &&
                (typeof theme?.components?.input?.email?.type?.[type]?.css ===
                'function'
                  ? // @ts-ignore
                    theme.components.input.email.type[type].css({
                      color: theme?.color,
                    })
                  : theme?.components?.input?.email?.type?.[type]?.css)}
                ${typeof _css === 'function'
                  ? _css({ color: theme?.color })
                  : _css}
              `,
              getClassName(theme?.namespace, 'input__email'),
              theme?.components?.input?.email?.className,
              type &&
                getClassName(theme?.namespace, `input__email__type__${type}`),
              type && theme?.components?.input?.email?.type?.[type]?.className,
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

export default InputEmail;
