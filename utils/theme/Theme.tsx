import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { Theme as SpTheme } from '@spectrum-web-components/theme';

import '@spectrum-web-components/theme/sp-theme.js';

import '@spectrum-web-components/theme/theme-light.js';
import '@spectrum-web-components/theme/scale-medium.js';
import '@spectrum-web-components/theme/scale-large.js';

import '@spectrum-web-components/theme/express/theme-light.js';
import '@spectrum-web-components/theme/express/scale-medium.js';
import '@spectrum-web-components/theme/express/scale-large.js';

export const Theme = createComponent({
  displayName: 'Theme',
  elementClass: SpTheme,
  react: React,
  tagName: 'sp-theme',
  events: {},
});

export type ThemeType = SpTheme;
