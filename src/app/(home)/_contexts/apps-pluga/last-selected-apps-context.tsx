'use client';
import { createContext, useContext } from 'react';
import useApps from './useApps';

export type LastSelectedAppsContext = Pick<
  ReturnType<typeof useApps>,
  'lastSelectedApps'
>;

const initialValue: LastSelectedAppsContext = {
  lastSelectedApps: [],
};

export const LastSelectedAppsContext =
  createContext<LastSelectedAppsContext>(initialValue);

export function useLastSelectedAppsContext() {
  const ctx = useContext(LastSelectedAppsContext);

  if (!ctx) {
    throw new Error(
      'LastSelectedAppsContext should be used whitin <LastSelectedAppsContext>'
    );
  }

  return ctx;
}
