import React from 'react';
import { InputCheckboxProps } from './checkbox.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';
import mergeStyles from '../_util/mergeStyles';

const InputCheckbox = React.forwardRef<HTMLInputElement, InputCheckboxProps>(
  function InputCheckbox(
    { className, children, type, htmlType, style, css: _css, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    const themeComponent = theme?.components?.input?.checkbox;
    const themeComponentType = type ? themeComponent?.type?.[type] : undefined;
    return (
      <ClassNames>
        {({ css, cx }) => (
          <label
            style={mergeStyles(
              themeComponent?.style,
              themeComponentType?.style,
              style,
            )}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${typeof themeComponent?.css === 'function'
                  ? themeComponent.css({
                      color: theme?.color,
                    })
                  : themeComponent?.css};
                ${typeof themeComponentType?.css === 'function'
                  ? themeComponentType?.css({
                      color: theme?.color,
                    })
                  : themeComponentType?.css};
                ${typeof _css === 'function'
                  ? _css({ color: theme?.color })
                  : _css}
              `,
              getClassName(theme?.namespace, 'input__checkbox'),
              themeComponent?.className,
              type &&
                getClassName(
                  theme?.namespace,
                  `input__checkbox__type__${type}`,
                ),
              themeComponentType?.className,
              className,
            )}
          >
            <input
              ref={ref}
              type={htmlType ?? 'checkbox'}
              style={themeComponent?.style}
              className={cx(
                getNamespace(theme?.namespace),
                css`
                  ${typeof themeComponent?.css === 'function'
                    ? themeComponent.css({
                        color: theme?.color,
                      })
                    : themeComponent?.css};
                `,
                themeComponent?.className,
                getClassName(theme?.namespace, 'input__checkbox__input'),
              )}
              {...props}
            />
            {children && (
              <span
                style={themeComponent?.label?.style}
                className={cx(
                  getNamespace(theme?.namespace),
                  css`
                    ${typeof themeComponent?.label?.css === 'function'
                      ? themeComponent.label.css({
                          color: theme?.color,
                        })
                      : themeComponent?.label?.css}
                  `,
                  themeComponent?.label?.className,
                  getClassName(theme?.namespace, 'input__checkbox__label'),
                )}
              >
                {children}
              </span>
            )}
          </label>
        )}
      </ClassNames>
    );
  },
);

export default InputCheckbox;
