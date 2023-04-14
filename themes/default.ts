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
        primary: {
          css: css`
            background-color: #029cfd;
            border-color: #029cfd;
            color: #ffffff;

            &:hover {
              background-color: #6cc0f6;
              border-color: #6cc0f6;
            }
          `,
        },
        danger: {
          css: css`
            background-color: #ee0000;
            border-color: #ee0000;
            color: #ffffff;

            &:hover {
              background-color: #ff0000;
              border-color: #ff0000;
            }
          `,
        },
      },
      renderLoadingComponent: () => 'is loading',
    },
    card: {
      css: css`
        display: inline-block;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        background-color: #ffffff;
        .card__title {
          padding: 18px 24px;
          color: #333333;
          font-weight: 600;
          font-size: 16px;
          border-bottom: 1px solid #f0f0f0;
        }
        .card__contents {
          padding: 18px 24px;
          color: #333333;
          font-weight: 400;
          font-size: 14px;
          border-bottom: 1px solid #f0f0f0;
        }
      `,
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
        border-radius: 8px;
        box-sizing: border-box;
        font-family: NotoSansKR, sans-serif;
      `,
      email: {
        css: css`
          width: 100%;
          border: 1px solid #cccccc;
          padding: 8px 10px;
          border-radius: 8px;
          box-sizing: border-box;
          font-family: NotoSansKR, sans-serif;
        `,
      },
      number: {
        css: css`
          width: 100%;
          border: 1px solid #cccccc;
          padding: 8px 10px;
          border-radius: 8px;
          box-sizing: border-box;
          font-family: NotoSansKR, sans-serif;
        `,
      },
      password: {
        css: css`
          width: 100%;
          border: 1px solid #cccccc;
          padding: 8px 10px;
          border-radius: 8px;
          box-sizing: border-box;
          font-family: NotoSansKR, sans-serif;
        `,
      },
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
          border-radius: 8px;
          box-sizing: border-box;
          font-family: NotoSansKR, sans-serif;
        `,
      },
    },
    list: {
      css: css`
        border: 1px solid #eeeeee;
        border-radius: 8px;
      `,
      item: {
        css: css`
          font-size: 14px;
          font-family: sans-serif;
          padding: 12px 16px;
          &:not(:last-child) {
            border-bottom: 1px solid #eeeeee;
          }
        `,
      },
      type: {
        red: {
          css: css`
            border-color: #f00;
            background-color: rgba(255, 0, 0, 0.15);
          `,
          item: {
            css: css`
              color: #f00;
              &:not(:last-child) {
                border-bottom-color: #f00;
              }
            `,
          },
        },
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
        h1: {
          css: css`
            font-size: 32px;
            font-weight: 600;
            color: #333333;
          `,
        },
      },
    },
  },
} satisfies UI.ThemeType;
