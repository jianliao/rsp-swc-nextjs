import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import '@spectrum-web-components/divider/sp-divider.js';
import { Divider } from '@spectrum-web-components/divider';

export const SpDivider = createComponent(React, 'sp-divider', Divider, {}, 'SpDivider');
