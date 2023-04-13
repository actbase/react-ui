// @ts-nocheck
import React from 'react';
import type { Preview } from '@storybook/react';
import UI from '../components';
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
      <UI.Provider theme={themeConfig}>
        <Story />
      </UI.Provider>
    ),
  ],
};

export default preview;
