interface PaginatedResults<T> {
  page: number;
  items: Array<T>;
  size: number;
}
