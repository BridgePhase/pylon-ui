import { ReactNode } from 'react';

export interface DataListItemProps {
  image?: ReactNode;
  side?: ReactNode;
}

export interface InteractiveDataListItemProps {
  image?: ReactNode;
  side?: ReactNode;
  onSelect: React.MouseEventHandler<HTMLButtonElement>;
}
