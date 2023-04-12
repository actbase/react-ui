import React from 'react';
import { InputFileProps } from './file.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';

const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
  function Input({ className, accept, ...props }, ref) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <label>
            <input
              ref={ref}
              type="file"
              className={cx(
                getNamespace(theme?.namespace),
                css`
                  display: ${'none'};
                `,
                getClassName(theme?.namespace, 'input__file'),
                className,
              )}
              {...props}
            />
            파일 업로드
          </label>
        )}
      </ClassNames>
    );
  },
);

export default InputFile;
