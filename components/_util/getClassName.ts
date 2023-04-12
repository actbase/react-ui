import getNamespace from './getNamespace';

function getClassName(namespace?: string, className?: string): string {
  return `${getNamespace(namespace)}--${className}`;
}

export default getClassName;
