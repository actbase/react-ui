import React from 'react';
import { InputRadioProps } from './radio.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';

const InputRadio = React.forwardRef<HTMLInputElement, InputRadioProps>(
  function Radio({ className, children, type, htmlType, ...props }, ref) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <label
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${theme?.components?.input?.radio?.style}
                ${type && theme?.components?.input?.radio?.type?.[type]}
              `,
              getClassName(theme?.namespace, 'input__radio'),
              type &&
                getClassName(theme?.namespace, `input__radio__type__${type}`),
              className,
            )}
          >
            <input
              ref={ref}
              type={htmlType ?? 'radio'}
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
            {children && (
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
            )}
          </label>
        )}
      </ClassNames>
    );
  },
);

export default InputRadio;
