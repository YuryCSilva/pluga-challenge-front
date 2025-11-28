export default function usePagination() {
  return {
    currentItems: ['item1', 'item2'],
    currentPage: 1,
    nextPage: jest.fn(),
    prevPage: jest.fn(),
    setCurrentPage: jest.fn(),
    pages: [1, 2, 3],
    totalPages: 3,
  };
}