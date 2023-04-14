import React from 'react';
import { InputCheckboxProps } from './checkbox.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';

const InputCheckbox = React.forwardRef<HTMLInputElement, InputCheckboxProps>(
  function InputCheckbox(
    { className, children, type, htmlType, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <label
            style={theme?.components?.input?.checkbox?.style}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${theme?.components?.input?.checkbox?.css};
                ${type && theme?.components?.input?.checkbox?.type?.[type]};
              `,
              getClassName(theme?.namespace, 'input__checkbox'),
              theme?.components?.input?.checkbox?.className,
              type &&
                getClassName(
                  theme?.namespace,
                  `input__checkbox__type__${type}`,
                ),
              className,
            )}
          >
            <input
              ref={ref}
              type={htmlType ?? 'checkbox'}
              style={theme?.components?.input?.checkbox?.style}
              className={cx(
                getNamespace(theme?.namespace),
                css`
                  ${theme?.components?.input?.checkbox?.css};
                `,
                theme?.components?.input?.checkbox?.className,
                getClassName(theme?.namespace, 'input__checkbox__input'),
              )}
              {...props}
            />
            {children && (
              <span
                style={theme?.components?.input?.checkbox?.label?.style}
                className={cx(
                  getNamespace(theme?.namespace),
                  css`
                    ${theme?.components?.input?.checkbox?.label?.css}
                  `,
                  theme?.components?.input?.checkbox?.label?.className,
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
