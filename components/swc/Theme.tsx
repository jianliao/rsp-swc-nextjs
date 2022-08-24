import { Theme } from '@spectrum-web-components/theme';
import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/theme-darkest.js';
import '@spectrum-web-components/theme/theme-dark.js';
import '@spectrum-web-components/theme/theme-light.js';
import '@spectrum-web-components/theme/theme-lightest.js';
import '@spectrum-web-components/theme/scale-medium.js';
import '@spectrum-web-components/theme/scale-large.js';
import '@spectrum-web-components/theme/express/theme-darkest.js';
import '@spectrum-web-components/theme/express/theme-dark.js';
import '@spectrum-web-components/theme/express/theme-light.js';
import '@spectrum-web-components/theme/express/theme-lightest.js';
import '@spectrum-web-components/theme/express/scale-medium.js';
import '@spectrum-web-components/theme/express/scale-large.js';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';

export const SpTheme = createComponent(React, 'sp-theme', Theme, {}, 'SpTheme');
