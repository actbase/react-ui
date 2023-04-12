import React from 'react';
import { ButtonProps } from './button.types';
import { ClassNames } from '@emotion/react';
import Theme from '../theme';
import Form from '../form';

function Button({
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
}: ButtonProps) {
  const form = Form.useContext();
  const theme = Theme.useContext();
  const _loading = React.useMemo(
    () => loading || (htmlType === 'submit' && form.loading),
    [loading, form.loading, htmlType],
  );
  return (
    <ClassNames>
      {({ css, cx }) => (
        <button
          type={htmlType ?? 'button'}
          className={cx(
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
            className,
          )}
          disabled={disabled || _loading}
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
}

export default Button;