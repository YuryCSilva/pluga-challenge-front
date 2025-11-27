'use client';
import SearchIcon from '@/src/components/_ui/icons/search';
import { InputWithIcon } from '@/src/components/_ui/input/input-with-icon';
import { useFilterAppsContext } from '@/src/app/(home)/_contexts/apps-pluga/filter-apps-context';

export default function HomeInput() {
  const { filterNameApps, handleFilterNameApps } = useFilterAppsContext();
  return (
    <InputWithIcon
      Icon={SearchIcon}
      value={filterNameApps}
      onChange={(e) => handleFilterNameApps(e.target.value)}
    />
  );
}
