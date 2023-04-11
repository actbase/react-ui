import React from 'react';
import type { ThemeProps } from './theme.types';

const context = React.createContext<ThemeProps | undefined>(undefined);

export default context;
