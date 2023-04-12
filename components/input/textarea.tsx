import React from 'react';
import { TextAreaProps } from './textarea.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';

const TextArea = React.forwardRef(function Textarea({
  className,
  placeholder,
  resize,
  rows,
  cols,
  ...props
}: TextAreaProps) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
        <textarea
          type="textarea"
          className={cx(css`
            ${theme?.components?.input?.style};
            resize: ${resize ? 'both' : 'none'};
            width: ${'auto'};
          `)}
          placeholder={placeholder}
          rows={rows ?? 5}
          cols={cols ?? 30}
          {...props}
        />
      )}
    </ClassNames>
  );
});

export default TextArea;
