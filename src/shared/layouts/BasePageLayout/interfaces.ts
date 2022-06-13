import { ReactNode } from 'react';

export interface IBasePageLayoutProps {
  children: ReactNode;
  title: string;
  toolBar: ReactNode | undefined;
}
