'use client';
import { AppPlugaResponse } from '@/src/app/(home)/types/apps-pluga-response';
import AppsProvider from '@/src/app/(home)/_contexts/apps-pluga/apps-provider';
import HomeInput from './home-input';
import HomeCards from './home-cards';

export default function HomeClient({ apps }: { apps: AppPlugaResponse[] }) {
  return (
    <AppsProvider appsResponse={apps}>
      <HomeInput />
      <HomeCards />
    </AppsProvider>
  );
}
