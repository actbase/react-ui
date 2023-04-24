import type { SuspenseProps } from './suspense.types';

import React from 'react';
import Theme from '../theme';

function Suspense<T = any, E = any>({
  fetch,
  fallback,
  error: _error,
  children,
}: SuspenseProps<T, E>) {
  const theme = Theme.useContext();
  const [data, setData] = React.useState<T>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<E>();

  React.useEffect(() => {
    if (fetch) {
      (async () => {
        try {
          setLoading(true);
          const data = await fetch();
          setData(data);
        } catch (error: any) {
          setError(error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [fetch]);

  if (loading && (fallback ?? theme?.components?.suspense?.fallback)) {
    return fallback ?? theme?.components?.suspense?.fallback;
  }

  if (children && data) {
    return children?.({ data });
  }

  if (_error && error) {
    return _error(error);
  }

  return children;
}

export default Suspense;
