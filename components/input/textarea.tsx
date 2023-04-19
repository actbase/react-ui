import type { InputTextareaProps } from './textarea.types';

import React from 'react';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import mergeStyles from '../_util/mergeStyles';

const InputTextarea = React.forwardRef<HTMLTextAreaElement, InputTextareaProps>(
  function Textarea(
    { className, resize, type, style, css: _css, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    const themeComponent = theme?.components?.input?.textarea;
    const themeComponentType = type ? themeComponent?.type?.[type] : undefined;
    return (
      <ClassNames>
        {({ css, cx }) => (
          <textarea
            ref={ref}
            style={mergeStyles(
              themeComponent?.style,
              themeComponentType?.style,
              style,
            )}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                resize: ${resize
                  ? typeof resize === 'boolean'
                    ? 'both'
                    : resize === 'horizontal'
                    ? 'horizontal'
                    : resize === 'vertical' && 'vertical'
                  : 'none'};
                ${typeof themeComponent?.css === 'function'
                  ? themeComponent.css({
                      color: theme?.color,
                    })
                  : themeComponent?.css}
                ${type &&
                (typeof themeComponentType?.css === 'function'
                  ? themeComponentType?.css({
                      color: theme?.color,
                    })
                  : themeComponentType?.css)}
                ${typeof _css === 'function'
                  ? _css({ color: theme?.color })
                  : _css}
              `,
              getClassName(theme?.namespace, 'input__textarea'),
              themeComponent?.className,
              type &&
                getClassName(
                  theme?.namespace,
                  `input__textarea__type__${type}`,
                ),
              themeComponentType?.className,
              className,
            )}
            {...props}
          />
        )}
      </ClassNames>
    );
  },
);

export default InputTextarea;
