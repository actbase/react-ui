import React from 'react';
import { FormProps } from './form.types';
import { ClassNames } from '@emotion/react';

function Form({ children, className, ...props }: FormProps) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <form className={cx(css``, className)} {...props}>
          {children}
        </form>
      )}
    </ClassNames>
  );
}

export default Form;
