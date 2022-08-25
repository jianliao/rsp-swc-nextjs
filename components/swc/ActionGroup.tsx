import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import '@spectrum-web-components/action-group/sp-action-group.js';
import { ActionGroup } from '@spectrum-web-components/action-group';

export const SpActionGroup = createComponent(React, 'sp-action-group', ActionGroup, { change: 'change' }, 'SpActionGroup');
