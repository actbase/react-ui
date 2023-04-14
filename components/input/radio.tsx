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
    return (
      <ClassNames>
        {({ css, cx }) => (
          <label
            style={mergeStyles(theme?.components?.input?.radio?.style, style)}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${theme?.components?.input?.radio?.css}
                ${type && theme?.components?.input?.radio?.type?.[type]}
                ${_css}
              `,
              getClassName(theme?.namespace, 'input__radio'),
              theme?.components?.input?.radio?.className,
              type &&
                getClassName(theme?.namespace, `input__radio__type__${type}`),
              className,
            )}
          >
            <input
              ref={ref}
              type={htmlType ?? 'radio'}
              style={theme?.components?.input?.radio?.input?.style}
              className={cx(
                getNamespace(theme?.namespace),
                css`
                  ${theme?.components?.input?.radio?.input?.css}
                `,
                theme?.components?.input?.radio?.input?.className,
                getClassName(theme?.namespace, 'input__radio__input'),
                className,
              )}
              {...props}
            />
            {children && (
              <span
                style={theme?.components?.input?.radio?.label?.style}
                className={cx(
                  getNamespace(theme?.namespace),
                  css`
                    ${theme?.components?.input?.radio?.label?.css}
                  `,
                  theme?.components?.input?.radio?.label?.className,
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
