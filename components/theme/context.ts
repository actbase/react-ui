import React from 'react';
import type { ThemeType } from './theme.types';

const context = React.createContext<ThemeType | undefined>(undefined);

export default context;
