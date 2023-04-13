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
    type,
    defaultValues,
    children,
    className,
    onSubmit,
    onSuccess,
    onError,
    serialize,
    prevent = true,
    onReset,
    validateTiming,
    allowForceSubmit,
    validates,
    loading: _loading,
    ...props
  },
  ref,
) {
  const theme = Theme.useContext();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<FormItemErrorType>();
  const [resetDate, setResetDate] = React.useState<Date>();
  const inputsRef = React.useRef<Record<string, HTMLInputElement>>({});
  const contextValue = React.useMemo<FormContext>(
    () => ({
      loading: loading || _loading,
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
      resetDate,
    }),
    [loading, _loading, error, allowForceSubmit, resetDate],
  );

  const renderChildren = React.useCallback<
    (
      children: React.ReactNode,
      index?: number,
      key?: React.Key,
    ) => React.ReactNode
  >(
    (children, index = 0, key = 'Form-Item'): React.ReactNode => {
      if (Array.isArray(children)) {
        return React.Children.map(children, (child, index) => {
          return renderChildren(child, index);
        });
      }

      // if not react element
      if (!(children as React.ReactElement)?.props) {
        return children;
      }

      const props = {
        key: `${key}-${index}`,
        ...((children as React.ReactElement).props ?? {}),
      };

      // set default value
      const defaultValue =
        defaultValues?.[(children as React.ReactElement)?.props?.name];
      if (defaultValue !== undefined) {
        if (typeof defaultValue === 'boolean') {
          props.defaultChecked = defaultValue;
          delete props.defaultValue;
        } else {
          props.defaultValue = defaultValue;
        }
      }

      // set validate
      const validate =
        validates?.[(children as React.ReactElement)?.props?.name];
      if (validate) {
        props.validate = {
          ...(props.validate ?? {}),
          rules: [...(props?.validate?.rules ?? []), ...(validate.rules ?? [])],
        };
      }

      if (props.children) {
        if (Array.isArray(props.children)) {
          props.children = React.Children.map(
            props.children,
            (child, index) => {
              return renderChildren(child, index, props.key);
            },
          );
        } else {
          props.children = renderChildren(props.children, 0, props.key);
        }
      }

      return React.cloneElement(children as React.ReactElement, props);
    },
    [defaultValues, validates],
  );

  return (
    <context.Provider value={contextValue}>
      <ClassNames>
        {({ css, cx }) => (
          <form
            ref={ref}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${theme?.components?.form?.style}
                ${type && theme?.components?.form?.type?.[type]}
              `,
              getClassName(theme?.namespace, 'form'),
              getClassName(theme?.namespace, `form__type__${type}`),
              className,
            )}
            onReset={(event) => {
              setError(undefined);
              onReset?.(event);
              setResetDate(new Date());
            }}
            onSubmit={async (event) => {
              if (prevent) {
                event.preventDefault();
              }
              try {
                setLoading(true);
                const data = await (() => {
                  const data = Object.entries(inputsRef.current).reduce(
                    (p, [key, value]) => {
                      return {
                        ...p,
                        [key]:
                          {
                            checkbox: value.checked,
                          }[value.type] ?? value.value,
                      };
                    },
                    {},
                  );
                  // @ts-ignore
                  return onSubmit?.(serialize?.(data) ?? data, event);
                })();
                if (onSuccess) {
                  await onSuccess(data);
                }
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
