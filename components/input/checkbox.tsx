import React from 'react';
import { InputCheckboxProps } from './checkbox.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';

const InputCheckbox = React.forwardRef<HTMLInputElement, InputCheckboxProps>(
  function InputCheckbox({ className, children, ...props }, ref) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {children
          ? ({ css, cx }) => (
              <label
                className={cx(
                  getNamespace(theme?.namespace),
                  css`
                    ${theme?.components?.input?.checkbox?.style};
                  `,
                  getClassName(theme?.namespace, 'input__checkbox'),
                  className,
                )}
              >
                <input
                  ref={ref}
                  type="checkbox"
                  className={cx(
                    getNamespace(theme?.namespace),
                    css`
                      ${theme?.components?.input?.checkbox?.style};
                    `,
                    getClassName(theme?.namespace, 'input__checkbox__input'),
                  )}
                  {...props}
                />
                <span
                  className={cx(
                    getNamespace(theme?.namespace),
                    css`
                      ${theme?.components?.input?.checkbox?.label?.style}
                    `,
                    getClassName(theme?.namespace, 'input__checkbox__label'),
                  )}
                >
                  {children}
                </span>
              </label>
            )
          : ({ css, cx }) => (
              <input
                ref={ref}
                type="checkbox"
                className={cx(
                  getNamespace(theme?.namespace),
                  css`
                    ${theme?.components?.input?.checkbox?.input?.style};
                  `,
                  getClassName(theme?.namespace, 'input__checkbox__input'),
                  className,
                )}
                {...props}
              />
            )}
      </ClassNames>
    );
  },
);

export default InputCheckbox;
