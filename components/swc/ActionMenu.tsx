import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import '@spectrum-web-components/action-menu/sp-action-menu.js';
import { ActionMenu } from '@spectrum-web-components/action-menu';

export const SpActionMenu = createComponent(React, 'sp-action-menu', ActionMenu, { change: 'change', spClosed: 'sp-closed', spOpened: 'sp-opened' }, 'SpActionMenu');
