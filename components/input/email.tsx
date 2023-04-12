import React from 'react';
import { EmailProps } from './email.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';

const Email = React.forwardRef(function Email({
  className,
  placeholder,
  ...props
}: EmailProps) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
        <input
          type="email"
          className={cx(css`
            ${theme?.components?.input?.style}
          `)}
          placeholder={placeholder}
          {...props}
        />
      )}
    </ClassNames>
  );
});

export default Email;
