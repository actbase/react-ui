import type React from 'react';

export interface SuspenseChildrenProps<T = any> {
  data?: T;
}

export interface SuspenseProps<T = any, E = any> {
  fetch?: () => Promise<T> | T;
  fallback?: React.ReactNode;
  error?: (error: E) => React.ReactNode;
  children?: (props: SuspenseChildrenProps) => React.ReactNode;
}

export type SuspenseThemeType = {
  fallback?: React.ReactNode;
};
