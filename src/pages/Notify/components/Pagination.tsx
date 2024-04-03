import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { PaginationControllerType } from '../Types';


function PaginationController({
  currentPage,
  handleChangePage
}: PaginationControllerType) {
  return (
    <Stack spacing={2}>
      <Typography>Page: {currentPage}</Typography>
      <Pagination count={10} page={currentPage} onChange={handleChangePage} />
    </Stack>
  );
}

export default PaginationController;
