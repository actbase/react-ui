import useContext from './hooks/useContext';

export * from './item.types';

import React from 'react';
import { FormItemProps } from './item.types';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';
import { FORM_ITEM_ERROR_STATUS, FORM_VALIDATE_TIMING } from './constants';

function FormItem<T extends keyof JSX.IntrinsicElements>({
  el,
  className,
  children,
  label,
  error,
  name,
  defaultValue,
  validate,
  ...props
}: FormItemProps<T>) {
  const theme = Theme.useContext();
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
  const Element = el ?? 'label';
  return (
    <ClassNames>
      {({ css, cx }) => (
        // @ts-ignore
        <Element
          // @ts-ignore
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${theme?.components?.form?.item?.style}
            `,
            getClassName(theme?.namespace, 'form__item'),
            className,
          )}
          {...props}
        >
          {label && (
            <legend
              className={cx(
                getNamespace(theme?.namespace),
                css`
                  padding: 0;
                  margin: 0 0 5px;
                  ${theme?.components?.form?.item?.label?.style}
                `,
                getClassName(theme?.namespace, 'form__item__label'),
              )}
            >
              {label}
            </legend>
          )}
          {(children as React.ReactElement)?.props
            ? React.cloneElement(children as React.ReactElement, {
                name,
                defaultValue,
                ...(children as React.ReactElement).props,
                ref: (ref: HTMLInputElement) => {
                  if (name) {
                    form.inputs[name] = ref;
                  }
                  (children as React.ReactElement).props.ref?.(ref);
                },
                onChange: async (event: Event) => {
                  (children as React.ReactElement).props.onChange?.(event);
                  if (validate?.rules) {
                    if (name) {
                      for (let i = 0; i < validate.rules.length; i++) {
                        const rule = validate.rules[i];
                        if (
                          rule.timing &&
                          rule.timing !== FORM_VALIDATE_TIMING.ON_CHANGE
                        ) {
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
                        const message = await rule.validate(
                          (event.target as HTMLInputElement)?.value,
                        );
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
              })
            : children}
          {_error && (
            <p
              className={cx(
                getNamespace(theme?.namespace),
                css`
                  margin: 5px 0 0;
                  ${theme?.components?.form?.item?.error?.style}
                `,
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
}

export default FormItem;
