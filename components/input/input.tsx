import React from 'react';
import { InputProps } from './input.types';
import Typography from '../typography';
import Theme from '../theme';
import { ClassNames } from '@storybook/theming';
import Space from '../space';

const Input = React.forwardRef(function Input({
  label,
  error,
  className,
  ...props
}: InputProps) {
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
            type="text"
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
