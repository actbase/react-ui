import React from 'react';
import { InputTextAreaProps } from './textarea.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';

const InputTextArea = React.forwardRef<HTMLTextAreaElement, InputTextAreaProps>(
  function Textarea(
    { className, placeholder, resize, rows, cols, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <textarea
            ref={ref}
            type="textarea"
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${theme?.components?.input?.style};
                resize: ${resize ? 'both' : 'none'};
                width: ${'auto'};
              `,
              getClassName(theme?.namespace, 'input__textarea'),
              className,
            )}
            placeholder={placeholder}
            rows={rows ?? 5}
            cols={cols ?? 30}
            {...props}
          />
        )}
      </ClassNames>
    );
  },
);

export default InputTextArea;
