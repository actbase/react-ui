import React from 'react';
import { ButtonProps } from './button.types';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import Form, { FormItemErrorStatusType } from '../form';
import getClassName from '../_util/getClassName';
import getNamespace from '../_util/getNamespace';
import { FORM_ITEM_ERROR_STATUS } from '../form/constants';
import mergeStyles from '../_util/mergeStyles';

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
    style,
    css: _css,
    ...props
  },
  ref,
) {
  const form = Form.useContext();
  const theme = Theme.useContext();
  const themeComponent = theme?.components?.button;
  const themeComponentType = type ? themeComponent?.type?.[type] : undefined;
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
          style={mergeStyles(
            themeComponent?.style,
            themeComponentType?.style,
            style,
          )}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${typeof themeComponent?.css === 'function'
                ? themeComponent.css({ color: theme?.color })
                : themeComponent?.css}
              ${type &&
              (typeof themeComponentType?.css === 'function'
                ? themeComponentType.css({
                    color: theme?.color,
                  })
                : themeComponentType?.css)}
              ${typeof _css === 'function'
                ? _css({ color: theme?.color })
                : _css}
            `,
            getClassName(theme?.namespace, 'button'),
            themeComponent?.className,
            type && getClassName(theme?.namespace, `button__type__${type}`),
            _loading && getClassName(theme?.namespace, 'button__loading'),
            themeComponentType?.className,
            className,
          )}
          disabled={_disabled}
          {...props}
        >
          {_loading &&
          (renderLoadingComponent || themeComponent?.renderLoadingComponent)
            ? renderLoadingComponent
              ? renderLoadingComponent()
              : themeComponent?.renderLoadingComponent &&
                themeComponent?.renderLoadingComponent()
            : children}
        </button>
      )}
    </ClassNames>
  );
});

export default Button;
