import React from 'react';
import { RadioProps } from './radio.types';
import Typography from '../typography';
import Theme from '../theme';
import { ClassNames } from '@storybook/theming';
import Space from '../space';

const Radio = React.forwardRef(function Radio({
  label,
  name,
  defaultChecked,
  error,
  className,
  ...props
}: RadioProps) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
        <Space el="label" className={cx(className)} size={5}>
          <input
            type="radio"
            className={cx(
              css`
                margin: ${'0'};
              `,
            )}
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

export default Radio;
