'use client';
import { useFilterAppsContext } from '@/src/app/(home)/_contexts/apps-pluga/filter-apps-context';
import { Pagination } from '@/src/components/_behavior/pagination';
import SadManIcon from '@/src/components/_ui/icons/sad-man';
import { useSelectedAppsContext } from '@/src/app/(home)/_contexts/apps-pluga/selected-apps-context';
import HomeDialog from './home-dialog-selected-app';
import { useRef } from 'react';
import { AppPlugaResponse } from '@/src/app/(home)/types/apps-pluga-response';
import Card from '@/src/components/_ui/card';
import CardImageContainer from '@/src/components/_ui/card/card-image-container';
import CardImage from '@/src/components/_ui/card/card-image';
import CardBody from '@/src/components/_ui/card/card-body';

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
          <div
            className='mb-6 grid grid-cols-2 gap-6 lg:grid-cols-3
              xl:grid-cols-4'
          >
            {items.map((app) => (
              <Card key={app.app_id} onClick={() => onSelectedApp(app)}>
                <CardImageContainer style={{ backgroundColor: app.color }}>
                  <CardImage
                    src={app.icon}
                    alt={app.name}
                    width={48}
                    height={48}
                    className='w-16 max-w-16'
                  />
                </CardImageContainer>
                <CardBody>
                  <h4>{app.name}</h4>
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      />
      <HomeDialog ref={dialogSelectedAppRef} />
    </>
  );
}
