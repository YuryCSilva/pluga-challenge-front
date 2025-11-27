'use client';
import { ReactNode } from 'react';
import useApps from './useApps';
import { AppsContext } from '@/src/app/(home)/_contexts/apps-pluga/apps-context';
import { FilterAppsContext } from '@/src/app/(home)/_contexts/apps-pluga/filter-apps-context';
import { SelectedAppsContext } from '@/src/app/(home)/_contexts/apps-pluga/selected-apps-context';
import { LastSelectedAppsContext } from '@/src/app/(home)/_contexts/apps-pluga/last-selected-apps-context';
import { AppPlugaResponse } from '@/src/app/(home)/types/apps-pluga-response';

export default function AppsProvider({ children, appsResponse }: { children: ReactNode, appsResponse: AppPlugaResponse[] }) {
  const {
    apps,
    filterNameApps,
    filterdApps,
    handleFilterNameApps,
    handleSelectedApp,
    lastSelectedApps,
    selectedApp,
  } = useApps(appsResponse);

  return (
    <AppsContext.Provider value={{ apps }}>
      <FilterAppsContext.Provider
        value={{ filterNameApps, filterdApps, handleFilterNameApps }}
      >
        <SelectedAppsContext.Provider
          value={{ handleSelectedApp, selectedApp }}
        >
          <LastSelectedAppsContext.Provider value={{ lastSelectedApps }}>
            {children}
          </LastSelectedAppsContext.Provider>
        </SelectedAppsContext.Provider>
      </FilterAppsContext.Provider>
    </AppsContext.Provider>
  );
}
