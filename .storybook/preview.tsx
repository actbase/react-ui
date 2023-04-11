import React from 'react';
import type { Preview } from '@storybook/react';
import Theme from '../components/theme';
import theme from '../components/theme';
import themeConfig from '../theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <Theme.Provider theme={themeConfig}>
        <Story />
      </Theme.Provider>
    ),
  ],
};

export default preview;
