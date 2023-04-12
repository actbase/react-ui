function getClassName(namespace?: string, className?: string): string {
  return `${namespace ?? 'react-ui'}--${className}`;
}

export default getClassName;
