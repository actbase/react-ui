import React from 'react';
import { InputTextareaProps } from './textarea.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import mergeStyles from '../_util/mergeStyles';

const InputTextarea = React.forwardRef<HTMLTextAreaElement, InputTextareaProps>(
  function Textarea(
    { className, resize, type, style, css: _css, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <textarea
            ref={ref}
            style={mergeStyles(
              theme?.components?.input?.textarea?.style,
              type && theme?.components?.input?.textarea?.type?.[type]?.style,
              style,
            )}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                resize: ${resize
                  ? typeof resize === 'boolean'
                    ? 'both'
                    : resize === 'horizontal'
                    ? 'horizontal'
                    : resize === 'vertical' && 'vertical'
                  : 'none'};
                ${theme?.components?.input?.textarea?.css}
                ${type && theme?.components?.input?.textarea?.type?.[type]?.css}
                ${_css}
              `,
              getClassName(theme?.namespace, 'input__textarea'),
              theme?.components?.input?.textarea?.className,
              type &&
                getClassName(
                  theme?.namespace,
                  `input__textarea__type__${type}`,
                ),
              type &&
                theme?.components?.input?.textarea?.type?.[type]?.className,
              className,
            )}
            {...props}
          />
        )}
      </ClassNames>
    );
  },
);

export default InputTextarea;
