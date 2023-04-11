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
  },
} satisfies ThemeType;
