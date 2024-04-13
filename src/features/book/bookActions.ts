import { paths } from '../../routes/paths';
import { apiInstance } from '../../api';
import { HttpClientResponse } from '../../api/types';
import { headerConfig } from '../../utils/headerConfig';

const getBooks = async (query: any): Promise<HttpClientResponse> => {
  const url = `${paths.library.book.index}${query}`;

  try {
    const config = await headerConfig();
    const response = await apiInstance(url, config);
    return response;
  } catch (err: any) {
    return err.message;
  }
};

const getBookById = async (): Promise<HttpClientResponse> => {
  const id = '123';
  const url = `${paths.library.book.index}/${id}`;

  try {
    const config = await headerConfig();
    const response = await apiInstance(url, config);
    return response;
  } catch (err: any) {
    return err.message;
  }
};

const bookActions = {
  getBooks,
  getBookById
};

export default bookActions;
