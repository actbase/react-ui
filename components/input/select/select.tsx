import type { InputSelectProps } from './select.types';

import React from 'react';
import { ClassNames } from '@emotion/react';
import Theme from '../../theme';
import mergeStyles from '../../_util/mergeStyles';
import getNamespace from '../../_util/getNamespace';
import getClassName from '../../_util/getClassName';
import InputSelectOption from './option';

const InputSelect = React.forwardRef<HTMLSelectElement, InputSelectProps>(
  function InputSelect(
    { children, css: _css, style, className, placeholder, type, ...props },
    ref,
  ) {
    const theme = Theme.useContext();
    const themeComponent = theme?.components?.input?.select;
    const themeComponentType = type ? themeComponent?.type?.[type] : undefined;

    return (
      <ClassNames>
        {({ css, cx }) => (
          <select
            ref={ref}
            style={mergeStyles(
              themeComponent?.style,
              themeComponentType?.style,
              style,
            )}
            className={cx(
              getNamespace(theme?.namespace),
              css`
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
              getClassName(theme?.namespace, 'input__select'),
              themeComponent?.className,
              type &&
                getClassName(theme?.namespace, `input__select__type__${type}`),
              themeComponentType?.className,
              className,
            )}
            {...props}
          >
            {placeholder && (
              <InputSelectOption value="">{placeholder}</InputSelectOption>
            )}
            {children}
          </select>
        )}
      </ClassNames>
    );
  },
);

export default InputSelect;
