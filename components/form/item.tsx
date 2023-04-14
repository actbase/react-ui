import useContext from './hooks/useContext';

export * from './item.types';

import React from 'react';
import { FormItemProps, FormItemRef } from './item.types';
import { ClassNames, ClassNamesContent } from '@emotion/react';
import Theme from '../theme';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';
import mergeStyles from '../_util/mergeStyles';
import { FORM_ITEM_ERROR_STATUS, FORM_VALIDATE_TIMING } from './constants';

const FormItem = React.forwardRef(function FormItem<
  T extends keyof JSX.IntrinsicElements,
>(
  {
    el,
    type,
    className,
    children,
    label,
    error,
    name,
    defaultValue,
    defaultChecked,
    validate,
    resetErrorOnChange = true,
    inline,
    style,
    css: _css,
    ...props
  }: FormItemProps<T>,
  ref: FormItemRef,
) {
  const Element = inline ? React.Fragment : el ?? 'label';
  const theme = Theme.useContext();
  const elementProps = React.useCallback(
    ({ css, cx }: ClassNamesContent): any => {
      const obj = props;
      if (!inline) {
        // @ts-ignore
        obj.style = mergeStyles(theme?.components?.form?.item?.style, style);
        // @ts-ignore
        obj.className = cx(
          getNamespace(theme?.namespace),
          css`
            ${theme?.components?.form?.item?.css}
            ${type && theme?.components?.form?.item?.type?.[type]}
            ${_css}
          `,
          getClassName(theme?.namespace, 'form__item'),
          theme?.components?.form?.item?.className,
          type && getClassName(theme?.namespace, `form__item__type__${type}`),
          className,
        );
      }
      return obj;
    },
    [
      _css,
      className,
      inline,
      props,
      style,
      theme?.components?.form?.item?.className,
      theme?.components?.form?.item?.css,
      theme?.components?.form?.item?.style,
      theme?.components?.form?.item?.type,
      theme?.namespace,
      type,
    ],
  );
  const form = useContext();
  const _error = React.useMemo(
    () =>
      // @ts-ignore
      error?.message ??
      error ??
      // @ts-ignore
      (form.error?.[name]?.status === FORM_ITEM_ERROR_STATUS.ERROR &&
        // @ts-ignore
        (form.error?.[name]?.message ??
          // @ts-ignore
          form.error?.[name])),
    [error, form.error, name],
  );

  const handleValidate = React.useCallback<(value: string) => Promise<void>>(
    async (value: string): Promise<void> => {
      if (name) {
        if (validate?.rules) {
          for (let i = 0; i < validate.rules.length; i++) {
            const rule = validate.rules[i];
            if (rule.timing && rule.timing !== FORM_VALIDATE_TIMING.ON_CHANGE) {
              continue;
            }
            form.setError?.((prevState) => {
              const obj = { ...prevState };
              obj[name] = {
                status: FORM_ITEM_ERROR_STATUS.PENDING,
                message: undefined,
              };
              return obj;
            });
            const message = await rule.validate(value);
            if (message) {
              form.setError?.((prevState) => {
                const obj = { ...prevState };
                obj[name] = {
                  status: FORM_ITEM_ERROR_STATUS.ERROR,
                  message: rule.message ?? message,
                };
                return obj;
              });
              return;
            } else {
              form.setError?.((prevState) => {
                const obj = { ...prevState };
                obj[name] = {
                  status: FORM_ITEM_ERROR_STATUS.DONE,
                  message: undefined,
                };
                return obj;
              });
            }
          }
        }
      }
    },
    [form, name, validate?.rules],
  );

  const renderChildren = React.useCallback<
    (children: React.ReactNode) => React.ReactNode
  >(
    (children): React.ReactNode => {
      if (children) {
        if ((children as React.ReactElement)?.props) {
          return React.cloneElement(children as React.ReactElement, {
            name,
            defaultValue,
            defaultChecked,
            ...(children as React.ReactElement).props,
            ref: (ref: HTMLInputElement) => {
              if (name) {
                form.inputs[name] = ref;
              }
              (children as React.ReactElement).props.ref?.(ref);
            },
            onChange: (event: Event) => {
              (children as React.ReactElement).props.onChange?.(event);
              if (name) {
                if (resetErrorOnChange) {
                  form.setError?.((prevState) => {
                    const obj = { ...prevState };
                    obj[name] = {
                      status: FORM_ITEM_ERROR_STATUS.READY,
                      message: undefined,
                    };
                    return obj;
                  });
                }
                handleValidate((event.target as HTMLInputElement)?.value);
              }
            },
          });
        }
      }
      return children;
    },
    [
      defaultChecked,
      defaultValue,
      form,
      handleValidate,
      name,
      resetErrorOnChange,
    ],
  );

  React.useEffect(() => {
    if (name) {
      const input = form.inputs[name];
      if (input) {
        handleValidate(input.value);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.inputs, name]);

  React.useEffect(
    () => {
      if (name && defaultValue) {
        const input = form.inputs[name];
        if (input) {
          handleValidate(defaultValue);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form.resetDate],
  );

  React.useImperativeHandle(
    ref,
    () => {
      return {
        validate() {
          if (name) {
            const input = form.inputs[name];
            if (input) {
              handleValidate(input.value);
            }
          }
        },
      };
    },
    [form.inputs, handleValidate, name],
  );

  return (
    <ClassNames>
      {({ css, cx, ...c }) => (
        // @ts-ignore
        <Element
          // @ts-ignore
          ref={ref}
          {...elementProps({ css, cx, ...c })}
        >
          {label && (
            <legend
              style={theme?.components?.form?.item?.label?.style}
              className={cx(
                getNamespace(theme?.namespace),
                css`
                  padding: 0;
                  margin: 0 0 5px;
                  display: block;
                  ${theme?.components?.form?.item?.label?.css}
                `,
                theme?.components?.form?.item?.label?.className,
                getClassName(theme?.namespace, 'form__item__label'),
              )}
            >
              {label}
            </legend>
          )}
          {renderChildren(children)}
          {_error && (
            <p
              style={theme?.components?.form?.item?.error?.style}
              className={cx(
                getNamespace(theme?.namespace),
                css`
                  margin: 5px 0 0;
                  ${theme?.components?.form?.item?.error?.css}
                `,
                theme?.components?.form?.item?.error?.className,
                getClassName(theme?.namespace, 'form__item__error'),
              )}
            >
              {_error}
            </p>
          )}
        </Element>
      )}
    </ClassNames>
  );
});

export default FormItem;
