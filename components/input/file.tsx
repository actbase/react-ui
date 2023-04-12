import React from 'react';
import { FileProps } from './file.types';
import { ClassNames } from '@emotion/react';

const Input = React.forwardRef(function Input({
  className,
  accept,
  ...props
}: FileProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <label>
          <input
            type="file"
            className={cx(
              css`
                display: ${'none'};
              `,
            )}
            {...props}
          />
          파일 업로드
        </label>
      )}
    </ClassNames>
  );
});

export default Input;
