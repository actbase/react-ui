import type { InputPasswordProps } from './password.types';

import React from 'react';
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
    const themeComponent = theme?.components?.input?.password;
    const themeComponentType = type ? themeComponent?.type?.[type] : undefined;
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type={htmlType ?? (hidden ? 'password' : 'text')}
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
              getClassName(theme?.namespace, 'input__password'),
              themeComponent?.className,
              type &&
                getClassName(
                  theme?.namespace,
                  `input__password__type__${type}`,
                ),
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

export default InputPassword;
