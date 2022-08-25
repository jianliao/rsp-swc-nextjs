import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/menu/sp-menu-group.js';
import { MenuItem, MenuGroup } from '@spectrum-web-components/menu';

export const SpMenuItem = createComponent(React, 'sp-menu-item', MenuItem, { spMenuItemAdded: 'sp-menu-item-added', spMenuItemRemoved: 'sp-menu-item-removed' }, 'SpMenuItem');
export const SpMenuGroup = createComponent(React, 'sp-menu-group', MenuGroup, {}, 'SpMenuGroup');
