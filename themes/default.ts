import { css } from '@emotion/react';
import UI from '../components';

export default {
  color: {
    primary: '#029cfd',
    danger: '#ee0000',
    text: '#333333',
  },
  global: {
    styles: UI.styles.reset,
  },
  components: {
    button: {
      css: css`
        background-color: transparent;
        font-size: 16px;
        cursor: pointer;
        transition: 0.2s all ease;
        border: 1px solid #999999;
        color: #333333;
        padding: 5px 10px;
        border-radius: 8px;

        &:disabled {
          background-color: #cccccc !important;
          cursor: not-allowed;
        }
      `,
      type: {
        primary: css`
          background-color: #029cfd;
          border-color: #029cfd;
          color: #ffffff;

          &:hover {
            background-color: #6cc0f6;
            border-color: #6cc0f6;
          }
        `,
        danger: css`
          background-color: #ee0000;
          border-color: #ee0000;
          color: #ffffff;

          &:hover {
            background-color: #ff0000;
            border-color: #ff0000;
          }
        `,
      },
      renderLoadingComponent: () => 'is loading',
    },
    form: {
      item: {
        css: css`
          display: block;
          width: 100%;
        `,
        label: {
          css: css`
            font-family: NotoSansKR, sans-serif;
            color: #999999;
            font-size: 14px;
            font-weight: 500;
          `,
        },
        error: {
          css: css`
            font-family: NotoSansKR, sans-serif;
            color: #ff0000;
            font-size: 14px;
            font-weight: 500;
          `,
        },
      },
    },
    input: {
      css: css`
        width: 100%;
        border: 1px solid #cccccc;
        padding: 8px 10px;
        border-radius: 4px;
        box-sizing: border-box;
        font-family: NotoSansKR, sans-serif;
      `,
      checkbox: {
        css: css`
          display: flex;
          align-items: center;
        `,
        input: {
          css: css``,
        },
        label: {
          css: css`
            font-family: NotoSansKR, sans-serif;
            font-size: 14px;
            margin-left: 3px;
          `,
        },
      },
      radio: {
        css: css`
          display: flex;
          align-items: center;
        `,
        input: {
          css: css``,
        },
        label: {
          css: css`
            font-family: NotoSansKR, sans-serif;
            font-size: 14px;
            margin-left: 3px;
          `,
        },
      },
      textarea: {
        css: css`
          width: 100%;
          border: 1px solid #cccccc;
          padding: 8px 10px;
          border-radius: 4px;
          box-sizing: border-box;
          font-family: NotoSansKR, sans-serif;
        `,
      },
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
      css: css`
        font-size: 16px;
        font-weight: 500;
        color: #333333;
        margin: 0;
        font-family: 'NotoSansKR', sans-serif;
      `,
      type: {
        h1: css`
          font-size: 32px;
          font-weight: 600;
          color: #333333;
        `,
      },
    },
  },
} satisfies UI.ThemeType;
