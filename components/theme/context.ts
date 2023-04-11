import React from 'react';
import type { ThemeProps } from './index';

const context = React.createContext<ThemeProps | undefined>(undefined);

export default context;
