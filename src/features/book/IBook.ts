export interface IBookResponse {
  code: number;
  success: boolean;
  message: string;
  data: IDataBook;
}

export interface IBookState {
  isLoading: boolean;
  message: string | null;
  success: boolean | null;
  books: IBook[];
}

interface IDataBook {
  books: IBook[];
  infoPage: IInfoPage;
}

interface IInfoPage {
  offset: number;
  per_page: number;
  page: number;
}

export interface IBook {
  id: string;
  title: string;
  description: string;
  img_url: string;
  page_count: number;
  loan_count: number;
  quantity: number;
  available: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  owner: any;
  owner_id: string;
  author: any;
  author_id: string;
  publisher: any;
  publisher_id: string;
}
