'use client';
import { cn } from '@/src/shared/utils/cn';
import React, { useState, useMemo } from 'react';
import ArrowLeftIcon from '@/src/components/_ui/icons/arrow-left';
import ArrowRightIcon from '@/src/components/_ui/icons/arrow-right';
import { useDeviceType } from '@/src/shared/hooks/useDeviceType';
import usePagination from './usePagination';

export type PaginationProps<T> = {
  data: T[];
  itemsPerPage?: number;
  itemsPerPageMobile?: number;
  initialPage?: number;
  className?: string;
  render: (items: T[], page: number) => React.ReactNode;
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
          <button
            onClick={prevPage}
            className={`btn join-item
              ${currentPage === 1 ? 'btn-disabled' : ''}`}
          >
            <ArrowLeftIcon />
          </button>
          {pages.map((i) => (
            <button
              key={`page-${i}`}
              onClick={() => setCurrentPage(i)}
              className={`btn join-item ${i == currentPage ? 'btn-active' : ''}`}
            >
              {i}
            </button>
          ))}
          <button
            onClick={nextPage}
            className={`btn join-item
              ${currentPage === totalPages ? 'btn-disabled' : ''}`}
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
