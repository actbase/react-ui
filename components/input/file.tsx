import React from 'react';
import { InputFileProps } from './file.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';

const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
  function Input({ className, type, htmlType, ...props }, ref) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type={htmlType ?? 'file'}
            style={theme?.components?.input?.file?.style}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${theme?.components?.input?.file?.css}
                ${type && theme?.components?.input?.file?.type?.[type]}
              `,
              getClassName(theme?.namespace, 'input__file'),
              theme?.components?.input?.file?.className,
              type &&
                getClassName(theme?.namespace, `input__file__type__${type}`),
              className,
            )}
            {...props}
          />
        )}
      </ClassNames>
    );
  },
);

export default InputFile;
