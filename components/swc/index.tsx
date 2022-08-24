import dynamic from "next/dynamic";

const ssr = false;

export const SpButton = dynamic<any>(() => import('@components/swc/Button').then(m => m.SpButton), { ssr });
export const SpClearButton = dynamic<any>(() => import('@components/swc/Button').then(m => m.SpClearButton), { ssr });
export const SpCloseButton = dynamic<any>(() => import('@components/swc/Button').then(m => m.SpCloseButton), { ssr });

export const SpTheme = dynamic<any>(() => import('@components/swc/Theme').then(m => m.SpTheme), { ssr });

export const SpTabs = dynamic<any>(() => import('@components/swc/Tabs').then(m => m.SpTabs), { ssr });
export const SpTab = dynamic<any>(() => import('@components/swc/Tabs').then(m => m.SpTab), { ssr });
export const SpTabPanel = dynamic<any>(() => import('@components/swc/Tabs').then(m => m.SpTabPanel), { ssr });

export const SpIconBell = dynamic<any>(() => import('@components/swc/WorkflowIcons').then(m => m.SpIconBell), { ssr });
export const SpIconEdit = dynamic<any>(() => import('@components/swc/WorkflowIcons').then(m => m.SpIconEdit), { ssr });
export const SpIconStar = dynamic<any>(() => import('@components/swc/WorkflowIcons').then(m => m.SpIconStar), { ssr });

export const SpActionButton = dynamic<any>(() => import('@components/swc/ActionButton').then(m => m.SpActionButton), { ssr });
