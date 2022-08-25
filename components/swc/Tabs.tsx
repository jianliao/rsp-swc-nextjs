import { Tabs, Tab, TabPanel } from '@spectrum-web-components/tabs';
import '@spectrum-web-components/tabs/sp-tabs.js';
import '@spectrum-web-components/tabs/sp-tab.js';
import '@spectrum-web-components/tabs/sp-tab-panel.js';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';

export const SpTabs = createComponent(React, 'sp-tabs', Tabs, { change: 'change' }, 'SpTabs');
export const SpTab = createComponent(React, 'sp-tab', Tab, {}, 'SpTab');
export const SpTabPanel = createComponent(React, 'sp-tab-panel', TabPanel, {}, 'SpTabPanel');
