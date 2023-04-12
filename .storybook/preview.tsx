// @ts-nocheck
import React from 'react';
import type { Preview } from '@storybook/react';
import UI from '../components';

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
      <UI.Theme.Provider theme={themeConfig}>
        <Story />
      </UI.Theme.Provider>
    ),
  ],
};

export default preview;
