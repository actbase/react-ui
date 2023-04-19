import React from 'react';
import { InputFileProps } from './file.types';
import Theme from '../theme';
import { ClassNames } from '@emotion/react';
import getNamespace from '../_util/getNamespace';
import getClassName from '../_util/getClassName';
import mergeStyles from '../_util/mergeStyles';

const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
  function Input(
    { className, type, htmlType, style, css: _css, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    const themeComponent = theme?.components?.input?.file;
    const themeComponentType = type ? themeComponent?.type?.[type] : undefined;
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type={htmlType ?? 'file'}
            style={mergeStyles(
              themeComponent?.style,
              themeComponentType?.style,
              style,
            )}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${typeof themeComponent?.css === 'function'
                  ? themeComponent?.css({ color: theme?.color })
                  : themeComponent?.css}
                ${typeof themeComponentType?.css === 'function'
                  ? themeComponentType.css({
                      color: theme?.color,
                    })
                  : themeComponentType?.css}
                ${typeof _css === 'function'
                  ? _css({ color: theme?.color })
                  : _css}
              `,
              getClassName(theme?.namespace, 'input__file'),
              themeComponent?.className,
              type &&
                getClassName(theme?.namespace, `input__file__type__${type}`),
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

export default InputFile;
