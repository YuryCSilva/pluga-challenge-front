'use client';
import { Dialog, DialogProps } from '@/src/components/_ui/dialog';
import { useSelectedAppsContext } from '../_contexts/apps-pluga/selected-apps-context';
import Image from 'next/image';
import { useLastSelectedAppsContext } from '../_contexts/apps-pluga/last-selected-apps-context';

export default function HomeDialogSelectedApp({
  ...props
}: Omit<DialogProps, 'children'>) {
  const { selectedApp } = useSelectedAppsContext();
  const { lastSelectedApps } = useLastSelectedAppsContext();

  return (
    <Dialog {...props}>
      {selectedApp && (
        <>
          <div className='mx-auto'>
            <div className='flex gap-6'>
              <figure
                style={{ backgroundColor: selectedApp.color }}
                className='rounded-full p-10'
              >
                <Image
                  src={selectedApp.icon}
                  alt={selectedApp.name}
                  width={48}
                  height={48}
                  className='w-16 max-w-16'
                />
              </figure>
              <div className='py-6'>
                <h2 className='mb-4 text-lg'>{selectedApp.name}</h2>
                <a
                  href={selectedApp.link}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-primary'
                >
                  Acessar
                </a>
              </div>
            </div>
          </div>
          <h2 className='text-center'>Últimas ferramentas visualizadas</h2>
          <div className='grid grid-cols-3 gap-6'>
            {lastSelectedApps.toReversed().map((app: any) => (
              <a
                key={app.app_id}
                // onClick={() => handleSelectedApp(app as never)}
                className='group card cursor-pointer bg-base-100 shadow-sm
                  transition card-sm hover:shadow-lg'
              >
                <figure style={{ backgroundColor: app.color }} className='p-6'>
                  <Image
                    src={app.icon}
                    alt={app.name}
                    width={48}
                    height={48}
                    className='w-16 max-w-16 transition group-hover:scale-110'
                  />
                </figure>
                <div className='card-body min-h-17 justify-center text-center'>
                  <h4>{app.name}</h4>
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </Dialog>
  );
}
