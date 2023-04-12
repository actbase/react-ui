import React from 'react';
import type { FormContext } from './context.types';

const context = React.createContext<FormContext>({
  loading: undefined,
  error: undefined,
  setError: undefined,
  inputs: {},
  getValue() {
    return undefined;
  },
  setValue() {},
  allowForceSubmit: false,
});

export default context;
