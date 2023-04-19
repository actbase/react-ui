import React from 'react';
import { InputRadioProps } from './radio.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import mergeStyles from '../_util/mergeStyles';

const InputRadio = React.forwardRef<HTMLInputElement, InputRadioProps>(
  function Radio(
    { className, style, children, type, css: _css, htmlType, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    const themeComponent = theme?.components?.input?.radio;
    const themeComponentType = type ? themeComponent?.type?.[type] : undefined;
    return (
      <ClassNames>
        {({ css, cx }) => (
          <label
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
              getClassName(theme?.namespace, 'input__radio'),
              themeComponent?.className,
              type &&
                getClassName(theme?.namespace, `input__radio__type__${type}`),
              themeComponentType?.className,
              className,
            )}
          >
            <input
              ref={ref}
              type={htmlType ?? 'radio'}
              style={themeComponent?.input?.style}
              className={cx(
                getNamespace(theme?.namespace),
                css`
                  ${typeof themeComponent?.input?.css === 'function'
                    ? themeComponent?.input?.css({
                        color: theme?.color,
                      })
                    : themeComponent?.input?.css}
                `,
                themeComponent?.input?.className,
                getClassName(theme?.namespace, 'input__radio__input'),
                className,
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
                  getClassName(theme?.namespace, 'input__radio__label'),
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

export default InputRadio;
