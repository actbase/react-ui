import React from 'react';
import { ModalContext } from './context.types';

const context = React.createContext<ModalContext | undefined>(undefined);

export default context;
