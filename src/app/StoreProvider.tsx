'use client';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store, AppStore } from '@/redux/store';

interface Props {
  readonly children: ReactNode;
}

export default function StoreProvider({ children }: Props) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
