import React from 'react';
import { FileProps } from './file.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';

const Input = React.forwardRef(function Input({
  className,
  accept,
  maxSize,
  maxCount,
  ...props
}: FileProps) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => <input type="file" className={cx(css``)} {...props} />}
    </ClassNames>
  );
});

export default Input;
