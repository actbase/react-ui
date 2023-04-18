import type { ThemeComponentsType } from '../../theme';
import type { ElementProps, ElementThemeType } from '../elementsType';
import type { ClassNamesContent } from '@emotion/react';

import React from 'react';
import Theme from '../../theme';
import { ClassNames } from '@emotion/react';
import getClassName from '../../_util/getClassName';
import mergeStyles from '../../_util/mergeStyles';

function useCreateElement<
  P extends React.HTMLAttributes<any> & ElementProps,
  T extends Record<any, any>,
>(
  name: keyof ThemeComponentsType,
  element:
    | React.ReactElement<P>
    | ((classNamesContent: ClassNamesContent) => React.ReactElement<P>),
  props?: T,
): React.ReactElement {
  const theme = Theme.useContext();
  const themeComponent = React.useMemo<ElementThemeType | undefined>(
    () => theme?.components?.[name],
    [theme?.components, name],
  );
  return (
    <ClassNames>
      {(classNamesContent) => {
        const _element =
          typeof element === 'function' ? element(classNamesContent) : element;
        return React.cloneElement(_element, {
          ..._element.props,
          style: mergeStyles(themeComponent?.style, _element.props.style),
          className: classNamesContent.cx(
            classNamesContent.css`
              ${
                typeof themeComponent?.css === 'function'
                  ? themeComponent.css({
                      color: theme?.color,
                      ...(props ?? {}),
                    })
                  : themeComponent?.css
              }
              ${
                _element.props.type &&
                (typeof themeComponent?.type?.[_element.props.type]?.css ===
                'function'
                  ? // @ts-ignore
                    themeComponent?.type?.[_element.props.type]?.css?.({
                      color: theme?.color,
                      ...(props ?? {}),
                    })
                  : themeComponent?.type?.[_element.props.type]?.css)
              }
              ${
                typeof _element.props.css === 'function'
                  ? _element.props.css({
                      color: theme?.color,
                      ...(props ?? {}),
                    })
                  : _element.props.css
              }
            `,
            getClassName(theme?.namespace, name),
            themeComponent?.className,
            _element.props.type &&
              getClassName(
                theme?.namespace,
                `${name}__type__${_element.props.type}`,
              ),
            _element.props.type &&
              themeComponent?.type?.[_element.props.type]?.className,
            _element.props.className,
          ),
        });
      }}
    </ClassNames>
  );
}

export default useCreateElement;
