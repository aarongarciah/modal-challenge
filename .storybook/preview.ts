import React from 'react';

import { globalStyles } from '../src/globalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    globalStyles();
    return React.createElement(Story);
  },
];
