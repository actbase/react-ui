import React from 'react';
import { css } from '@storybook/theming';
import type { ThemeType } from './components';

export default {
  size: 10,
  components: {
    input: {
      style: css`
        position: relative;
        display: flex;
        align-items: center;
      `,
      label: {
        font: 'noto',
        style: css`
          position: absolute;
          width: 50px;
          left: 10px;
        `,
        level: 7,
        color: 'label',
      },
      input: {
        style: css`
          width: 100%;
          border: 1px solid #cccccc;
          padding: 8px 15px 8px 55px;
          border-radius: 4px;
        `,
      },
    },
    typography: {
      defaultFont: 'noto',
      font: {
        noto: 'NotoSansKR, sans-serif',
      },
      level: {
        1: {
          size: 48,
          weight: 800,
        },
        2: {
          size: 40,
          weight: 700,
        },
        3: {
          size: 36,
          weight: 600,
        },
        4: {
          size: 26,
          weight: 500,
        },
        5: {
          size: 20,
          weight: 500,
        },
        6: {
          size: 16,
          weight: 400,
        },
        7: {
          size: 14,
          weight: 400,
        },
        8: {
          size: 13,
          weight: 300,
        },
        9: {
          size: 10,
          weight: 300,
        },
        10: {
          size: 8,
          weight: 300,
        },
      },
      color: {
        label: '#999999',
      },
    },
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
      renderLoadingComponent: () => <span>is Loading</span>,
    },
  },
} satisfies ThemeType;
