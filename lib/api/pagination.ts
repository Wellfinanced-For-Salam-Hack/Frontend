export interface OffsetPage<T> {
  items: T[];
  total: number;
  limit: number;
  offset: number;
}

interface PaginatedResponse<T> {
  data?: OffsetPage<T> | null;
}

interface PaginatedParams<Q> {
  query: Q & {
    currentPage?: number;
    pageSize?: number;
  };
}

export async function fetchAllPages<T, Q extends Record<string, unknown>>(
  listFn: (params: PaginatedParams<Q>) => Promise<PaginatedResponse<T>>,
  query: Q,
  options?: { pageSize?: number; maxPages?: number }
) {
  const pageSize = options?.pageSize ?? 200;
  const maxPages = options?.maxPages ?? 20;
  let currentPage = 1;
  let total = Number.POSITIVE_INFINITY;
  let items: T[] = [];

  while (items.length < total && currentPage <= maxPages) {
    const response = await listFn({
      query: { ...query, currentPage, pageSize }
    });
    const data = response.data;
    if (!data) break;

    items = items.concat(data.items ?? []);
    total = Number.isFinite(data.total) ? data.total : items.length;

    if (data.items.length === 0) break;
    currentPage += 1;
  }

  return items;
}
