'use client';
import { useEffect, useState } from 'react';
import { AppPlugaResponse } from '@/src/app/(home)/types/apps-pluga-response';
import { localStorageService } from '@/src/shared/services/localStorage';
import { normalizedText } from '@/src/shared/utils/formatters';

export default function useApps(appsResponse: AppPlugaResponse[]) {
  const { set, get } = localStorageService;
  const apps = appsResponse;

  const [selectedApp, setSelectedApp] = useState<AppPlugaResponse | null>(null);
  const [lastSelectedApps, setLastSelectedApps] = useState<AppPlugaResponse[]>(
    []
  );

  const [filterNameApps, setFilterNameApps] = useState('');

  useEffect(function onInit() {
    const appsByAppId = apps.reduce((acc: any, app: any) => {
      acc[app.app_id] = app;
      return acc;
    }, {});

    const storedLastSelectedAppIds =
      get<AppPlugaResponse[]>('lastSelectedApps') || [];

    setLastSelectedApps(
      storedLastSelectedAppIds.map((appId: any) => appsByAppId[appId])
    );
  }, []);

  function handleFilterNameApps(value: string) {
    setFilterNameApps(value);
  }

  function handleSelectedApp(
    app: AppPlugaResponse,
    onSelectedApp?: () => void
  ) {
    setSelectedApp(app);
    const lastSelectedAppsSet = new Set(lastSelectedApps);
    lastSelectedAppsSet.delete(app);
    lastSelectedAppsSet.add(app);

    const newLastSelectedApps = Array.from(lastSelectedAppsSet).slice(-3);
    setLastSelectedApps(newLastSelectedApps);

    const newLastSelectedAppIds = newLastSelectedApps.map((app) => app.app_id);

    set<string[]>('lastSelectedApps', newLastSelectedAppIds);

    if (onSelectedApp) onSelectedApp();
  }

  const filterdApps = apps.filter((app) => {
    const appName = normalizedText(app.name);
    return appName.includes(normalizedText(filterNameApps));
  });

  return {
    apps,
    selectedApp,
    lastSelectedApps,
    filterNameApps,
    handleFilterNameApps,
    handleSelectedApp,
    filterdApps,
  };
}
