import React from 'react';
import { InputCheckboxProps } from './checkbox.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';

const InputCheckbox = React.forwardRef<HTMLInputElement, InputCheckboxProps>(
  function Checkbox({ name, defaultChecked, className, ...props }, ref) {
    const theme = Theme.useContext();
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type="checkbox"
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${theme?.components?.input?.style};
                width: ${'auto'};
              `,
              getClassName(theme?.namespace, 'input__checkbox'),
              className,
            )}
            defaultChecked={defaultChecked ? true : false}
            name={name ?? ''}
            {...props}
          />
        )}
      </ClassNames>
    );
  },
);

export default InputCheckbox;
