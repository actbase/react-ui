import React from 'react';
import { SerializedStyles } from '@emotion/react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type InputThemeType = {
  // default input style
  style?: SerializedStyles;
};
