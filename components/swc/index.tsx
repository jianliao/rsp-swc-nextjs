import dynamic from "next/dynamic";

const ssr = false;

export const SpButton = dynamic<any>(() => import('@components/swc/Button').then(m => m.SpButton), { ssr });
export const SpClearButton = dynamic<any>(() => import('@components/swc/Button').then(m => m.SpClearButton), { ssr });
export const SpCloseButton = dynamic<any>(() => import('@components/swc/Button').then(m => m.SpCloseButton), { ssr });
export const SpButtonGroup = dynamic<any>(() => import('@components/swc/ButtonGroup').then(m => m.SpButtonGroup), { ssr });

export const SpTheme = dynamic<any>(() => import('@components/swc/Theme').then(m => m.SpTheme), { ssr });

export const SpTabs = dynamic<any>(() => import('@components/swc/Tabs').then(m => m.SpTabs), { ssr });
export const SpTab = dynamic<any>(() => import('@components/swc/Tabs').then(m => m.SpTab), { ssr });
export const SpTabPanel = dynamic<any>(() => import('@components/swc/Tabs').then(m => m.SpTabPanel), { ssr });

export const SpIconBell = dynamic<any>(() => import('@components/swc/WorkflowIcons').then(m => m.SpIconBell), { ssr });
export const SpIconEdit = dynamic<any>(() => import('@components/swc/WorkflowIcons').then(m => m.SpIconEdit), { ssr });
export const SpIconStar = dynamic<any>(() => import('@components/swc/WorkflowIcons').then(m => m.SpIconStar), { ssr });
export const SpIconDraw = dynamic<any>(() => import('@components/swc/WorkflowIcons').then(m => m.SpIconDraw), { ssr });
export const SpIconCopy = dynamic<any>(() => import('@components/swc/WorkflowIcons').then(m => m.SpIconCopy), { ssr });
export const SpIconDelete = dynamic<any>(() => import('@components/swc/WorkflowIcons').then(m => m.SpIconDelete), { ssr });
export const SpIconGradient = dynamic<any>(() => import('@components/swc/WorkflowIcons').then(m => m.SpIconGradient), { ssr });
export const SpIconBook = dynamic<any>(() => import('@components/swc/WorkflowIcons').then(m => m.SpIconBook), { ssr });
export const SpIconTable = dynamic<any>(() => import('@components/swc/WorkflowIcons').then(m => m.SpIconTable), { ssr });
export const SpIconCut = dynamic<any>(() => import('@components/swc/WorkflowIcons').then(m => m.SpIconCut), { ssr });
export const SpIconPaste = dynamic<any>(() => import('@components/swc/WorkflowIcons').then(m => m.SpIconPaste), { ssr });

export const SpActionButton = dynamic<any>(() => import('@components/swc/ActionButton').then(m => m.SpActionButton), { ssr });
export const SpActionGroup = dynamic<any>(() => import('@components/swc/ActionGroup').then(m => m.SpActionGroup), { ssr });

export const SpActionMenu = dynamic<any>(() => import('@components/swc/ActionMenu').then(m => m.SpActionMenu), { ssr });
export const SpMenuItem = dynamic<any>(() => import('@components/swc/Menu').then(m => m.SpMenuItem), { ssr });
export const SpMenuGroup = dynamic<any>(() => import('@components/swc/Menu').then(m => m.SpMenuGroup), { ssr });
export const SpDivider = dynamic<any>(() => import('@components/swc/Divider').then(m => m.SpDivider), { ssr });