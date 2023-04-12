import React from 'react';
import { PasswordProps } from './password.types';
import Typography from '../typography';
import Theme from '../theme';
import { ClassNames } from '@storybook/theming';
import Space from '../space';

const Input = React.forwardRef(function Input({
  label,
  error,
  hidden = true,
  className,
  ...props
}: PasswordProps) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
        <Space
          el="label"
          className={cx(
            css`
              ${theme?.components?.input?.style}
            `,
            className,
          )}
        >
          {label && (
            <Typography
              el="span"
              {...(theme?.components?.input?.label ?? {})}
              className={cx(css`
                ${theme?.components?.input?.label?.style}
              `)}
            >
              {label}
            </Typography>
          )}
          <input
            type={hidden ? 'password' : 'text'}
            className={cx(css`
              ${theme?.components?.input?.input?.style}
            `)}
            {...props}
          />
        </Space>
      )}
    </ClassNames>
  );
});

export default Input;
