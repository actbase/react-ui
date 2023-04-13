import React from 'react';
import { InputRadioProps } from './radio.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';

const InputRadio = React.forwardRef<HTMLInputElement, InputRadioProps>(
  function Radio({ className, ...props }, ref) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type="radio"
            className={cx(
              getNamespace(theme?.namespace),
              css`
                margin: 0;
                ${theme?.components?.input?.radio?.style}
              `,
              getClassName(theme?.namespace, 'input__radio'),
              className,
            )}
            {...props}
          />
        )}
      </ClassNames>
    );
  },
);

export default InputRadio;
