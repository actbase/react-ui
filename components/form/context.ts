import React from 'react';
import type { FormContext } from './context.types';

const context = React.createContext<FormContext>({
  loading: undefined,
  error: undefined,
  setError: undefined,
  inputs: {},
});

export default context;
