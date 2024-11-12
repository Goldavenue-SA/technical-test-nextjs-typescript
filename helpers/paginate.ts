// from a set of items, returns a subset
export const paginate = <T>(items: T[], page: number, itemsPerPage = 20) => {
  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;
  return items.slice(start, end);
};