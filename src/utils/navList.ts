import { paths } from '../routes/paths';

interface bottomNavigationProps {
  title: string;
  path: string;
  icon?: React.ReactNode;
  hasFilter?: boolean;
}

export const navList: bottomNavigationProps[] = [
  { title: 'Home', path: paths.library.home },
  { title: 'Livros', path: paths.library.book.index }
];
