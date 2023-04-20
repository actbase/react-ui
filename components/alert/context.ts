import React from 'react';
import { AlertContext } from './context.types';

const context = React.createContext<AlertContext | undefined>(undefined);

export default context;
