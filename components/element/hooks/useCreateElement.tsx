import type { ThemeComponentsType } from '../../theme';
import type { ElementProps, ElementThemeType } from '../elementsType';

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
  element: React.ReactElement<P>,
  props?: T,
): React.ReactElement {
  const theme = Theme.useContext();
  const themeComponent = React.useMemo<ElementThemeType | undefined>(
    () => theme?.components?.[name],
    [theme?.components, name],
  );
  return (
    <ClassNames>
      {({ css, cx }) =>
        React.cloneElement(element, {
          ...element.props,
          style: mergeStyles(themeComponent?.style, element.props.style),
          className: cx(
            css`
              ${typeof themeComponent?.css === 'function'
                ? themeComponent.css({
                    color: theme?.color,
                    ...(props ?? {}),
                  })
                : themeComponent?.css}
              ${element.props.type &&
              (typeof themeComponent?.type?.[element.props.type]?.css ===
              'function'
                ? // @ts-ignore
                  themeComponent?.type?.[element.props.type]?.css?.({
                    color: theme?.color,
                    ...(props ?? {}),
                  })
                : themeComponent?.type?.[element.props.type]?.css)}
              ${typeof element.props.css === 'function'
                ? element.props.css({
                    color: theme?.color,
                    ...(props ?? {}),
                  })
                : element.props.css}
            `,
            getClassName(theme?.namespace, name),
            themeComponent?.className,
            element.props.type &&
              getClassName(
                theme?.namespace,
                `${name}__type__${element.props.type}`,
              ),
            element.props.type &&
              themeComponent?.type?.[element.props.type]?.className,
            element.props.className,
          ),
        })
      }
    </ClassNames>
  );
}

export default useCreateElement;
