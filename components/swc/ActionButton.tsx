import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import '@spectrum-web-components/action-button/sp-action-button.js';
import { ActionButton } from '@spectrum-web-components/action-button';

export const SpActionButton = createComponent(React, 'sp-action-button', ActionButton, {onclick: 'click'}, 'SpActionButton');
