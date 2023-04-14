import type React from 'react';

function mergeStyles(
  ...styles: (React.CSSProperties | undefined | null | false | '')[]
): React.CSSProperties {
  return styles.reduce<React.CSSProperties>(
    (p, c) => (c ? { ...p, ...c } : p),
    {},
  );
}

export default mergeStyles;
