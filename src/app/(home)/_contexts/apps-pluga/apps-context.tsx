'use client';
import { createContext, useContext } from 'react';
import useApps from './useApps';

export type AppsContext = Pick<
  ReturnType<typeof useApps>,
  'apps'
>;

const initialValue: AppsContext = {
  apps: [],
};

export const AppsContext = createContext<AppsContext>(initialValue);

export function useAppsContext() {
  const ctx = useContext(AppsContext);

  if (!ctx) {
    throw new Error('AppsContext should be used whitin <AppsContext>');
  }

  return ctx;
}
