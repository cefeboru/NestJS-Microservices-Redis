interface PaginatedResults<T> {
  page: number;
  items: Array<T>;
  pageSize: number;
}
