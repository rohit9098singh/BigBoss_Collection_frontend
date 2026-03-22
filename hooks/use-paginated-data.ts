import { useState } from "react";

interface UsePaginationProps<T> {
  data: T[];
  itemsPerPage: number;
}

export function usePagination<T>({
  data,
  itemsPerPage = 50,
}: UsePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const paginatedData = data.slice(0, currentPage * itemsPerPage);
  const hasMore = currentPage * itemsPerPage < data.length;
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMore = () => {
    setLoadingMore(true);
    if (hasMore) {
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setLoadingMore(false);
      }, 500);
    }
  };

  return { paginatedData, hasMore, loadMore, loadingMore };
}
