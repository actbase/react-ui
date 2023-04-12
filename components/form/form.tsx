import getClassName from '../_util/getClassName';

export * from './form.types';

import React from 'react';
import { ClassNames } from '@emotion/react';
import context from './context';
import { FormProps } from './form.types';
import type { FormContext } from './context.types';
import Theme from '../theme';
import getNamespace from '../_util/getNamespace';

const Form = React.forwardRef<HTMLFormElement, FormProps>(function Form(
  {
    defaultValues,
    children,
    className,
    onSubmit,
    onError,
    serialize,
    prevent = true,
    ...props
  },
  ref,
) {
  const theme = Theme.useContext();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Record<string, string>>();
  const inputsRef = React.useRef<Record<string, HTMLInputElement>>({});
  const contextValue = React.useMemo<FormContext>(
    () => ({
      loading,
      error,
      setError,
      inputs: inputsRef.current,
      getValue: (name) => {
        return inputsRef.current[name]?.value;
      },
      setValue: (name, value) => {
        if (inputsRef.current[name]) {
          inputsRef.current[name].value = value;
        }
      },
    }),
    [loading, error, setError],
  );
  function renderChildren(
    children: React.ReactNode,
    index = 0,
    depth = 0,
  ): React.ReactNode {
    return children && Array.isArray(children)
      ? children.map((children, index) =>
          renderChildren(children, index, depth + 1),
        )
      : React.cloneElement(children as React.ReactElement, {
          key: `Form-Item-${depth}-${index}`,
          defaultValue:
            defaultValues?.[(children as React.ReactElement)?.props?.name],
          ...((children as React.ReactElement)?.props ?? {}),
          children: Array.isArray(
            (children as React.ReactElement).props.children,
          )
            ? (children as React.ReactElement).props.children.map(
                (children: React.ReactElement, index: number) =>
                  renderChildren(children, index, depth + 1),
              )
            : (children as React.ReactElement).props.children,
        });
  }
  return (
    <context.Provider value={contextValue}>
      <ClassNames>
        {({ css, cx }) => (
          <form
            ref={ref}
            className={cx(
              getNamespace(theme?.namespace),
              css``,
              getClassName(theme?.namespace, 'form'),
              className,
            )}
            onSubmit={async (event) => {
              if (prevent) {
                event.preventDefault();
              }
              try {
                setLoading(true);
                const data = Object.entries(inputsRef.current).reduce(
                  (p, [key, value]) => ({ ...p, [key]: value.value }),
                  {},
                );
                await onSubmit?.(serialize?.(data) ?? data, event);
              } catch (error) {
                if (error instanceof Object) {
                  setError(error as Record<string, string>);
                }
                if (onError) {
                  // @ts-ignore
                  await onError?.(error);
                } else {
                  throw error;
                }
              } finally {
                setLoading(false);
              }
            }}
            {...props}
          >
            {renderChildren(children)}
          </form>
        )}
      </ClassNames>
    </context.Provider>
  );
});

export default Form;
