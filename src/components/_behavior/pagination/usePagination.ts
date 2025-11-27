import { useDeviceType } from '@/src/shared/hooks/useDeviceType';
import { useMemo, useState } from 'react';
import { PaginationProps } from '.';

export default function usePagination<T>({
  data,
  initialPage,
  itemsPerPage,
  itemsPerPageMobile,
}: Omit<Required<PaginationProps<T>>, 'className' | 'render'>) {
  const { isMobile } = useDeviceType();

  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.ceil(data.length / itemsPerPage) || 1;

  let pages: number[];

  if (isMobile) {
    const half = Math.floor(itemsPerPageMobile / 2);

    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + itemsPerPageMobile - 1);

    // Ajusta se o final ultrapassar o total
    if (end - start < itemsPerPageMobile - 1) {
      start = Math.max(1, end - itemsPerPageMobile + 1);
    }
    pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  } else {
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }, [currentPage, data, itemsPerPage]);

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage + 1, 1));
  };

  return {
    currentPage,
    setCurrentPage,
    pages,
    currentItems,
    prevPage,
    nextPage,
    totalPages,
  };
}
