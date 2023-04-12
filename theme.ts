import { css } from '@storybook/theming';
import type { ThemeType } from './components';

export default {
  components: {
    button: {
      style: css`
        background-color: transparent;
        border: none;
        font-size: 12px;
        cursor: pointer;
        transition: 0.2s all ease;

        &:disabled {
          background-color: #cccccc !important;
          cursor: not-allowed;
        }
      `,
      type: {
        primary: css`
          background-color: #029cfd;
          color: #ffffff;

          &:hover {
            background-color: #6cc0f6;
          }
        `,
        danger: css`
          background-color: #ee0000;
          color: #ffffff;

          &:hover {
            background-color: #ff0000;
          }
        `,
      },
      defaultType: 'primary',
      size: {
        small: css`
          font-size: 14px;
          padding: 4px 8px;
          border-radius: 6px;
        `,
        medium: css`
          font-size: 16px;
          padding: 6px 15px;
          border-radius: 10px;
        `,
        large: css`
          font-size: 20px;
          padding: 10px 20px;
          border-radius: 12px;
        `,
      },
      defaultSize: 'medium',
      renderLoadingComponent: () => 'is loading',
    },
    form: {
      item: {
        style: css`
          display: block;
          width: 100%;
        `,
        label: {
          style: css`
            font-family: NotoSansKR, sans-serif;
            color: #999999;
            font-size: 14px;
            font-weight: 500;
          `,
        },
        error: {
          style: css`
            font-family: NotoSansKR, sans-serif;
            color: #ff0000;
            font-size: 14px;
            font-weight: 500;
          `,
        },
      },
    },
    input: {
      style: css`
        width: 100%;
        border: 1px solid #cccccc;
        padding: 8px 15px;
        border-radius: 4px;
        box-sizing: border-box;
      `,
    },
    space: {
      defaultSize: 'm',
      size: {
        xs: 10,
        s: 12,
        m: 14,
        l: 16,
        xl: 18,
      },
    },
    typography: {
      defaultFont: 'noto',
      font: {
        noto: 'NotoSansKR, sans-serif',
      },
      defaultLevel: 5,
      level: {
        1: css`
          font-size: 26px;
          font-weight: 800;
        `,
        2: css`
          font-size: 24px;
          font-weight: 600;
        `,
        3: css`
          font-size: 22px;
          font-weight: 500;
        `,
        4: css`
          font-size: 20px;
          font-weight: 500;
        `,
        5: css`
          font-size: 18px;
          font-weight: 500;
        `,
        6: css`
          font-size: 16px;
          font-weight: 400;
        `,
      },
      defaultColor: 'default',
      color: {
        default: '#333333',
      },
    },
  },
} satisfies ThemeType;
