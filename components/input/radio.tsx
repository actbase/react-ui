import React from 'react';
import { RadioProps } from './radio.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';

const Radio = React.forwardRef(function Radio({
  name,
  defaultChecked,
  className,
  ...props
}: RadioProps) {
  const theme = Theme.useContext();
  return (
    <ClassNames>
      {({ css, cx }) => (
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
      )}
    </ClassNames>
  );
});

export default Radio;
