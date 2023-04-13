import React from 'react';
import { InputRadioProps } from './radio.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';

const InputRadio = React.forwardRef<HTMLInputElement, InputRadioProps>(
  function Radio({ className, children, ...props }, ref) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) =>
          children ? (
            <label
              className={cx(
                getNamespace(theme?.namespace),
                css`
                  ${theme?.components?.input?.radio?.style}
                `,
                getClassName(theme?.namespace, 'input__radio'),
                className,
              )}
            >
              <input
                ref={ref}
                type="radio"
                className={cx(
                  getNamespace(theme?.namespace),
                  css`
                    ${theme?.components?.input?.radio?.input?.style}
                  `,
                  getClassName(theme?.namespace, 'input__radio__input'),
                  className,
                )}
                {...props}
              />
              <span
                className={cx(
                  getNamespace(theme?.namespace),
                  css`
                    ${theme?.components?.input?.radio?.label?.style}
                  `,
                  getClassName(theme?.namespace, 'input__radio__label'),
                )}
              >
                {children}
              </span>
            </label>
          ) : (
            <input
              ref={ref}
              type="radio"
              className={cx(
                getNamespace(theme?.namespace),
                css`
                  ${theme?.components?.input?.radio?.style}
                `,
                getClassName(theme?.namespace, 'input__radio__input'),
                className,
              )}
              {...props}
            />
          )
        }
      </ClassNames>
    );
  },
);

export default InputRadio;
