import { cn } from '@/src/shared/utils/cn';
import React from 'react';

export type PublicLayoutProps = React.ComponentProps<'main'>;

export default function PublicLayout({
  className,
  ...props
}: PublicLayoutProps) {
  return (
    <main
      className={cn(
        'mx-auto flex w-full max-w-3xl flex-col gap-6 p-6',
        className
      )}
      {...props}
    ></main>
  );
}
