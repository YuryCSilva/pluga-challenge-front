import PublicLayout from '@/src/components/_layouts/public';
import { TitlePage } from '@/src/components/_ui/title/title-page';
import { Suspense } from 'react';
import HomeSkeleton from './_components/home-skeleton';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PublicLayout>
        <Suspense fallback={<HomeSkeleton />}>
          <TitlePage>Pluga Challenge Front</TitlePage>
          {children}
        </Suspense>
    </PublicLayout>
  );
}
