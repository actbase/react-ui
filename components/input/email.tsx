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
    const themeComponent = theme?.components?.input?.email;
    const themeComponentType = type ? themeComponent?.type?.[type] : undefined;
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type="email"
            style={mergeStyles(
              themeComponent?.style,
              themeComponentType?.style,
              style,
            )}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${typeof themeComponent?.css === 'function'
                  ? themeComponent?.css({
                      color: theme?.color,
                    })
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
              getClassName(theme?.namespace, 'input__email'),
              themeComponent?.className,
              type &&
                getClassName(theme?.namespace, `input__email__type__${type}`),
              themeComponentType?.className,
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
