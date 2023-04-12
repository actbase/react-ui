import React from 'react';
import { CheckboxProps } from './checkbox.types';
import Typography from '../typography';
import Theme from '../theme';
import { ClassNames } from '@storybook/theming';
import Space from '../space';

const Checkbox = React.forwardRef(function Checkbox({
  name,
  defaultChecked,
  className,
  ...props
}: CheckboxProps) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
        <input
          type="checkbox"
          className={cx(css`
            ${theme?.components?.input?.style}
          `)}
          defaultChecked={defaultChecked ? true : false}
          name={name ?? ''}
          {...props}
        />
      )}
    </ClassNames>
  );
});

export default Checkbox;
