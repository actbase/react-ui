import React from 'react';
import { ModalProps } from './modal.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function Modal(
  {
    type,
    css: _css,
    children,
    className,
    onDestroy,
    index,
    template,
    render,
    ...props
  },
  ref,
) {
  const theme = Theme.useContext();
  const themeComponent = theme?.components?.modal;
  const themeComponentType = type
    ? theme?.components?.modal?.type?.[type]
    : undefined;

  return (
    <ClassNames>
      {({ css, cx }) => (
        <div
          ref={ref}
          className={cx(
            getNamespace(theme?.namespace),
            css`
              ${typeof themeComponent?.css === 'function'
                ? themeComponent.css({
                    color: theme?.color,
                    index,
                  })
                : themeComponent?.css};
              ${type &&
              (typeof themeComponentType?.css === 'function'
                ? themeComponentType.css({
                    color: theme?.color,
                    index,
                  })
                : themeComponentType?.css)};
              ${typeof _css === 'function'
                ? _css({ color: theme?.color, index })
                : _css};
            `,
            getClassName(theme?.namespace, 'modal'),
            themeComponent?.className,
            type && getClassName(theme?.namespace, `modal__type__${type}`),
            themeComponentType?.className,
            className,
          )}
          {...props}
        >
          {template
            ? template({
                children: render?.({ onDestroy, ...props }),
                onDestroy,
                ...props,
              })
            : themeComponentType?.template
            ? themeComponentType.template({
                children: render?.({ onDestroy, ...props }),
                onDestroy,
                ...props,
              })
            : themeComponent?.template
            ? themeComponent.template({
                children: render?.({ onDestroy, ...props }),
                onDestroy,
                ...props,
              })
            : render?.({ onDestroy, ...props })}
        </div>
      )}
    </ClassNames>
  );
});

export default Modal;
