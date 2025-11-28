'use client';
import { cn } from '@/src/shared/utils/cn';
import React from 'react';
import ArrowLeftIcon from '@/src/components/_ui/icons/arrow-left';
import ArrowRightIcon from '@/src/components/_ui/icons/arrow-right';
import usePagination from './usePagination';

export type PaginationProps<T> = {
  data: T[];
  itemsPerPage?: number;
  itemsPerPageMobile?: number;
  initialPage?: number;
  className?: string;
  render: (items: T[], page: number) => React.ReactNode;
};

const Button = ({ className, ...props }: React.ComponentProps<'button'>) => {
  return <button className={cn('btn join-item', className)} {...props} />;
};

export function Pagination<T>({
  data,
  itemsPerPage = 12,
  initialPage = 1,
  itemsPerPageMobile = 4,
  render,
  className,
}: PaginationProps<T>) {
  const {
    currentItems,
    currentPage,
    nextPage,
    pages,
    prevPage,
    setCurrentPage,
    totalPages,
  } = usePagination<T>({ data, initialPage, itemsPerPage, itemsPerPageMobile });

  return (
    <div className={cn('w-full', className)}>
      {render(currentItems, currentPage)}
      <div className='text-center'>
        <div className='join'>
          <Button
            onClick={prevPage}
            className={currentPage === 1 ? 'btn-disabled' : ''}
          >
            <ArrowLeftIcon />
          </Button>
          {pages.map((i) => (
            <Button
              key={`page-${i}`}
              onClick={() => setCurrentPage(i)}
              className={i == currentPage ? 'btn-active' : ''}
            >
              {i}
            </Button>
          ))}
          <Button
            onClick={nextPage}
            className={currentPage == totalPages ? 'btn-disabled' : ''}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
