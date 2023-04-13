// @ts-nocheck
import React from 'react';
import type { Preview } from '@storybook/react';
import UI from '../components';
import defaultTheme from '../themes/default';

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
      <UI.Provider theme={defaultTheme}>
        <Story />
      </UI.Provider>
    ),
  ],
};

export default preview;
