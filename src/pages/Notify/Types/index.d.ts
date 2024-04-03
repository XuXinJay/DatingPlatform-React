export interface PaginationControllerType {
  currentPage: number;
  handleChangePage: (event: ChangeEvent<unknown>, page: number) => void;
}