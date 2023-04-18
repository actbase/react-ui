import React from 'react';
import { ToastContext } from './context.type';

const context = React.createContext<ToastContext | undefined>(undefined);

export default context;
