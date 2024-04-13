import { IBook } from '@/features/book/IBook';
import { getBooks } from '../../../features/book/bookSlice';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { paths } from '../../../routes/paths';

export default function BookPage() {
  const dispatch = useDispatch<any>();
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoading, ...data } = useSelector((state: any) => state.book);
  const books = data.books as IBook[];

  const filterLimit = ({ limit = '10', page = '1' }: { limit: string; page?: string }) => {
    const formParams = { limit, page };

    navigate({
      pathname: paths.library.book.index,
      search: `?${createSearchParams(formParams)}`
    });
  };

  console.log('books', books);

  useEffect(() => {
    if (!location.search) {
      const queryDefault = '?limit=10&page=1';
      navigate({
        pathname: paths.library.book.index,
        search: queryDefault
      });

      return;
    }

    dispatch(getBooks(location.search));
  }, [location.search]);

  return (
    <Box mx={2} height={'100vh'} sx={{ boxSizing: 'border-box' }}>
      <Typography variant='h1' mb={2}>
        Book Page
      </Typography>
      {/* button to set query */}
      <Box my={2} display='flex' gap={2}>
        <button onClick={() => filterLimit({ limit: '1' })}>1</button>
        <button onClick={() => filterLimit({ limit: '2' })}>2</button>
        <button onClick={() => filterLimit({ limit: '10' })}>10</button>
      </Box>

      {isLoading ? (
        <Grid item xs={12} textAlign='center' mt={2}>
          <CircularProgress color='primary' />
        </Grid>
      ) : (
        books.map((book: IBook) => (
          <Box key={book.id} my={2} p={2} sx={{ border: '1px solid #ccc' }}>
            <Typography variant='h2'>Titulo: {book.title}</Typography>
            <Typography variant='body1'>Qnt: {book.quantity}</Typography>
            <Typography variant='body1'>Proprietario: {book.owner.first_name}</Typography>
          </Box>
        ))
      )}
    </Box>
  );
}
