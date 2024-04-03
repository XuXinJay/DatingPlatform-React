export interface PaginationControllerType {
  currentPage: number;
  handleChangePage: (event: ChangeEvent<unknown>, page: number) => void;
  pageCount: number;
}

export interface notifyData {
  [key: string] : string;
}