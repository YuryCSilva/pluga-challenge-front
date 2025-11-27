'use client';
import { createContext, useContext } from 'react';
import useApps from './useApps';

export type SelectedAppsContext = Pick<
  ReturnType<typeof useApps>,
  'selectedApp' | 'handleSelectedApp'
>;

const initialValue: SelectedAppsContext = {
  selectedApp: null,
  handleSelectedApp: () => {
    throw new Error('handle not implemented');
  },
};

export const SelectedAppsContext =
  createContext<SelectedAppsContext>(initialValue);

export function useSelectedAppsContext() {
  const ctx = useContext(SelectedAppsContext);

  if (!ctx) {
    throw new Error(
      'SelectedAppsContext should be used whitin <SelectedAppsContext>'
    );
  }

  return ctx;
}
