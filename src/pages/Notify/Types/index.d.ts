export interface PaginationController {
  currentPage: number;
  handleChangePage: (event: ChangeEvent<unknown>, page: number) => void;
}