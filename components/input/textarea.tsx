import React from 'react';
import { InputTextareaProps } from './textarea.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';

const InputTextarea = React.forwardRef<HTMLTextAreaElement, InputTextareaProps>(
  function Textarea({ className, resize, ...props }, ref) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <textarea
            ref={ref}
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
                ${theme?.components?.input?.style}
                ${theme?.components?.input?.textarea?.style}
              `,
              getClassName(theme?.namespace, 'input__textarea'),
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
