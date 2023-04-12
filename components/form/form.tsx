import getClassName from '../_util/getClassName';

export * from './form.types';

import type { FormProps } from './form.types';
import type { FormContext } from './context.types';
import type { FormItemErrorType } from './item.types';

import React from 'react';
import { ClassNames } from '@emotion/react';
import context from './context';
import Theme from '../theme';
import getNamespace from '../_util/getNamespace';
import { FORM_ITEM_ERROR_STATUS } from './constants';

const Form = React.forwardRef<HTMLFormElement, FormProps>(function Form(
  {
    defaultValues,
    children,
    className,
    onSubmit,
    onError,
    serialize,
    prevent = true,
    onReset,
    validateTiming,
    allowForceSubmit,
    validates,
    ...props
  },
  ref,
) {
  const theme = Theme.useContext();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<FormItemErrorType>();
  const inputsRef = React.useRef<Record<string, HTMLInputElement>>({});
  const contextValue = React.useMemo<FormContext>(
    () => ({
      loading,
      error,
      setError,
      inputs: inputsRef.current,
      getValue(name) {
        return inputsRef.current[name]?.value;
      },
      setValue(name, value) {
        if (inputsRef.current[name]) {
          inputsRef.current[name].value = value;
        }
      },
      allowForceSubmit: !!allowForceSubmit,
    }),
    [loading, error, setError, allowForceSubmit],
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
          validate: validates?.[(children as React.ReactElement)?.props?.name]
            ?.rules
            ? {
                rules: [
                  ...((children as React.ReactElement)?.props?.validate
                    ?.rules ?? []),
                  ...validates?.[(children as React.ReactElement)?.props?.name]
                    ?.rules,
                ],
              }
            : (children as React.ReactElement)?.props?.validate,
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
            onReset={(event) => {
              setError(undefined);
              onReset?.(event);
            }}
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
                  setError((prevState) => {
                    const obj = { ...prevState };
                    Object.entries(error as Record<string, string>).forEach(
                      ([name, message]) => {
                        obj[name] = {
                          // @ts-ignore
                          status: FORM_ITEM_ERROR_STATUS.ERROR,
                          message,
                        };
                      },
                    );
                    return obj;
                  });
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
