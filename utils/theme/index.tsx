import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Theme } from '@spectrum-web-components/theme';

export const SpTheme = dynamic<
  | Partial<Theme>
  | { children?: ReactNode }
  | { startManagingContentDirection: Function }
  | { stopManagingContentDirection: Function }
>(() => import('./Theme').then((m) => m.Theme as any), { ssr: false });
