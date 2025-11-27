'use client';
import { useFilterAppsContext } from '@/src/app/(home)/_contexts/apps-pluga/filter-apps-context';
import { Pagination } from '@/src/components/_behavior/pagination';
import SadManIcon from '@/src/components/_ui/icons/sad-man';
import Image from 'next/image';
import { useSelectedAppsContext } from '@/src/app/(home)/_contexts/apps-pluga/selected-apps-context';
import HomeDialog from './home-dialog-selected-app';
import { useRef } from 'react';
import { AppPlugaResponse } from '@/src/app/(home)/types/apps-pluga-response';

function HomeNoCardsFound({ search }: { search: string }) {
  return (
    <div className='text-center'>
      <SadManIcon />
      <p>Nenhum app encontrado para &quot;{search}&quot;.</p>
    </div>
  );
}

export default function HomeCards() {
  const { filterdApps, filterNameApps } = useFilterAppsContext();
  const { handleSelectedApp } = useSelectedAppsContext();

  const dialogSelectedAppRef = useRef<HTMLDialogElement>(null);

  if (filterdApps.length == 0)
    return <HomeNoCardsFound search={filterNameApps} />;

  function showDialog() {
    dialogSelectedAppRef.current?.showModal();
  }

  function onSelectedApp(app: AppPlugaResponse) {
    handleSelectedApp(app, showDialog);
  }

  return (
    <>
      <Pagination
        data={filterdApps}
        initialPage={1}
        itemsPerPage={12}
        render={(items) => (
          <div className='mb-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {items.map((app) => (
              <button
                type='button'
                key={app.app_id}
                onClick={() => onSelectedApp(app)}
                className='group card cursor-pointer bg-base-100 shadow-sm
                  transition card-sm hover:shadow-lg'
              >
                <figure style={{ backgroundColor: app.color }} className='p-6'>
                  <Image
                    src={app.icon}
                    alt={app.name}
                    width={48}
                    height={48}
                    className='w-auto max-w-16 transition group-hover:scale-110'
                  />
                </figure>
                <div className='card-body min-h-17 justify-center text-center'>
                  <h4>{app.name}</h4>
                </div>
              </button>
            ))}
          </div>
        )}
      />
      <HomeDialog ref={dialogSelectedAppRef} />
    </>
  );
}
