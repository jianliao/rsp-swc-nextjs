import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import '@spectrum-web-components/button-group/sp-button-group.js';
import { ButtonGroup } from '@spectrum-web-components/button-group';

export const SpButtonGroup = createComponent(React, 'sp-button-group', ButtonGroup, {}, 'SpButtonGroup');
