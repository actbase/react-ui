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
    return (
      <ClassNames>
        {({ css, cx }) => (
          <input
            ref={ref}
            type={htmlType ?? 'file'}
            style={mergeStyles(
              theme?.components?.input?.file?.style,
              type && theme?.components?.input?.file?.type?.[type]?.style,
              style,
            )}
            className={cx(
              getNamespace(theme?.namespace),
              css`
                ${typeof theme?.components?.input?.file?.css === 'function'
                  ? theme?.components?.input?.file?.css({ color: theme?.color })
                  : theme?.components?.input?.file?.css}
                ${type &&
                (typeof theme?.components?.input?.file?.type?.[type]?.css ===
                'function'
                  ? // @ts-ignore
                    theme.components.input.file.type[type].css({
                      color: theme?.color,
                    })
                  : theme?.components?.input?.file?.type?.[type]?.css)}
                ${typeof _css === 'function'
                  ? _css({ color: theme?.color })
                  : _css}
              `,
              getClassName(theme?.namespace, 'input__file'),
              theme?.components?.input?.file?.className,
              type &&
                getClassName(theme?.namespace, `input__file__type__${type}`),
              type && theme?.components?.input?.file?.type?.[type]?.className,
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
