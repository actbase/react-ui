import React from 'react';
import { ButtonProps } from './button.types';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import Form, { FormItemErrorStatusType } from '../form';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';
import { FORM_ITEM_ERROR_STATUS } from '../form/constants';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    type,
    htmlType,
    children,
    className,
    radius,
    loading,
    disabled,
    renderLoadingComponent,
    size,
    ...props
  },
  ref,
) {
  const form = Form.useContext();
  const theme = Theme.useContext();
  const _loading = React.useMemo(
    () => loading || (htmlType === 'submit' && form.loading),
    [loading, form.loading, htmlType],
  );
  const _disabled = React.useMemo(
    () =>
      disabled ||
      (htmlType === 'submit' &&
        (_loading ||
          (!form.allowForceSubmit &&
            form.error &&
            Object.values(form.error).some((error) =>
              (
                [
                  FORM_ITEM_ERROR_STATUS.PENDING,
                  FORM_ITEM_ERROR_STATUS.ERROR,
                ] as FormItemErrorStatusType[]
              ).includes(error.status),
            )))),
    [disabled, htmlType, _loading, form.error, form.allowForceSubmit],
  );
  return (
    <ClassNames>
      {({ css, cx }) => (
        <button
          ref={ref}
          type={htmlType ?? 'button'}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${theme?.components?.button?.style}
              ${theme?.components?.button?.type?.[
                // @ts-ignore
                type ?? theme?.components?.button?.defaultType
              ]}
              ${theme?.components?.button?.size?.[
                // @ts-ignore
                size ?? theme?.components?.button?.defaultSize
              ]}
              ${(radius || theme?.components?.button?.radius) &&
              `border-radius: ${
                radius ?? theme?.components?.button?.radius
              }px`};
            `,
            getClassName(theme?.namespace, 'button'),
            type && getClassName(theme?.namespace, `button--type--${type}`),
            size && getClassName(theme?.namespace, `button--size--${size}`),
            className,
          )}
          disabled={_disabled}
          {...props}
        >
          {_loading &&
          (renderLoadingComponent ||
            theme?.components?.button?.renderLoadingComponent)
            ? renderLoadingComponent
              ? renderLoadingComponent()
              : theme?.components?.button?.renderLoadingComponent &&
                theme?.components?.button?.renderLoadingComponent()
            : children}
        </button>
      )}
    </ClassNames>
  );
});

export default Button;
