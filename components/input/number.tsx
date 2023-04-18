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
            style={mergeStyles(
              theme?.components?.input?.number?.style,
              type && theme?.components?.input?.number?.type?.[type]?.style,
              style,
            )}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${typeof theme?.components?.input?.number?.css === 'function'
                  ? theme.components.input.number.css({
                      color: theme?.color,
                    })
                  : theme?.components?.input?.number?.css}
                ${type &&
                (typeof theme?.components?.input?.number?.type?.[type]?.css ===
                'function'
                  ? // @ts-ignore
                    theme.components.input.number.type[type].css({
                      color: theme?.color,
                    })
                  : theme?.components?.input?.number?.type?.[type]?.css)}
                ${typeof _css === 'function'
                  ? _css({ color: theme?.color })
                  : _css}
              `,
              getClassName(theme?.namespace, 'input__number'),
              theme?.components?.input?.number?.className,
              type &&
                getClassName(theme?.namespace, `input__number__type__${type}`),
              type && theme?.components?.input?.number?.type?.[type]?.className,
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
