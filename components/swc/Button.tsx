import { Button, ClearButton, CloseButton } from '@spectrum-web-components/button';
import '@spectrum-web-components/button/sp-button.js';
import '@spectrum-web-components/button/sp-clear-button.js';
import '@spectrum-web-components/button/sp-close-button.js';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';

export const SpButton = createComponent(React, 'sp-button', Button, {onclick: 'click'}, 'SpButton');
export const SpClearButton = createComponent(React, 'sp-clear-button', ClearButton, {}, 'SpClearButton');
export const SpCloseButton = createComponent(React, 'sp-close-button', CloseButton, {}, 'SpCloseButton');
