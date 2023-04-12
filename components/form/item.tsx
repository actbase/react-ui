import useContext from './hooks/useContext';

export * from './item.types';

import React from 'react';
import { FormItemProps } from './item.types';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';

function FormItem<T extends keyof JSX.IntrinsicElements>({
  el,
  className,
  children,
  label,
  error,
  name,
  defaultValue,
  ...props
}: FormItemProps<T>) {
  const theme = Theme.useContext();
  const form = useContext();
  const _error = React.useMemo(
    // @ts-ignore
    () => error ?? form.error?.[name],
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
