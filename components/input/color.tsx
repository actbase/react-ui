import type { InputColorProps } from './color.types';

import React from 'react';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import mergeStyles from '../_util/mergeStyles';

const InputColor = React.forwardRef<HTMLInputElement, InputColorProps>(
  function InputColor(
    { className, type, style, htmlType, css: _css, placeholder, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    const themeComponent = theme?.components?.input?.color;
    const themeComponentType = type ? themeComponent?.type?.[type] : undefined;
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type={htmlType ?? 'color'}
            style={mergeStyles(
              themeComponent?.style,
              type && themeComponentType?.style,
              style,
            )}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${typeof themeComponent?.css === 'function'
                  ? themeComponent.css({
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
              getClassName(theme?.namespace, 'input__color'),
              themeComponent?.className,
              type &&
                getClassName(theme?.namespace, `input__color__type__${type}`),
              type && themeComponentType?.className,
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

export default InputColor;
