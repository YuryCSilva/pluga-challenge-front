'use client';
import { createContext, useContext } from 'react';
import useApps from './useApps';

export type FilterAppsContext = Pick<
  ReturnType<typeof useApps>,
  'filterNameApps' | 'handleFilterNameApps' | 'filterdApps'
>;

const initialValue: FilterAppsContext = {
  filterNameApps: '',
  handleFilterNameApps: () => {
    throw new Error('handle not implemented');
  },
  filterdApps: [],
};

export const FilterAppsContext = createContext<FilterAppsContext>(initialValue);

export function useFilterAppsContext() {
  const ctx = useContext(FilterAppsContext);

  if (!ctx) {
    throw new Error(
      'FilterAppsContext should be used whitin <FilterAppsContext>'
    );
  }

  return ctx;
}
