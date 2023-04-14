import React from 'react';
import { InputNumberProps } from './number.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import mergeStyles from '../_util/mergeStyles';

const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  function InputNumber(
    { className, type, style, htmlType, css: _css, placeholder, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type={htmlType ?? 'number'}
            style={mergeStyles(theme?.components?.input?.number?.style, style)}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${theme?.components?.input?.number?.css}
                ${type && theme?.components?.input?.number?.type?.[type]}
                ${_css}
              `,
              getClassName(theme?.namespace, 'input__number'),
              theme?.components?.input?.number?.className,
              type &&
                getClassName(theme?.namespace, `input__number__type__${type}`),
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

export default InputNumber;
