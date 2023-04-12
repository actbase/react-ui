import React from 'react';
import { CheckboxProps } from './checkbox.types';
import Typography from '../typography';
import Theme from '../theme';
import { ClassNames } from '@storybook/theming';
import Space from '../space';

const Checkbox = React.forwardRef(function Checkbox({
  label,
  name,
  defaultChecked,
  error,
  className,
  ...props
}: CheckboxProps) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
        <Space el="label" className={cx(className)}>
          <input
            type="checkbox"
            className={cx(css`
              ${theme?.components?.input?.style}
            `)}
            defaultChecked={defaultChecked ? true : false}
            name={name ?? ''}
            {...props}
          />
          {label && (
            <Typography el="span" {...(theme?.components?.input?.label ?? {})}>
              {label}
            </Typography>
          )}
        </Space>
      )}
    </ClassNames>
  );
});

export default Checkbox;
