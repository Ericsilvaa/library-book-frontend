import { Route, Routes } from 'react-router-dom';
import { paths } from '../paths';

import SiteBaseLayout from '../../layouts/Institucional/BaseLayout';

import { lazyLoad } from '../utils/LazyLoad';
import LibraryHomeLayout from '../../layouts/Library/Home';

export const routeProtections = {
  ADMIN: 'ADMIN',
  LOGGED_IN: 'LOGGED_IN'
};

// Site Institucional
const LazySiteHomePage = lazyLoad(() => import('../../pages/Home'));

// Site Biblioteca
const LazyHomePage = lazyLoad(() => import('../../pages/library/Home'));
const LazyBookPage = lazyLoad(() => import('../../pages/library/Book'));

export function LazyRouter() {
  return (
    <Routes>
      {/* Unprotected Routes  */}
      {/* SITE */}
      <Route
        path={paths.institution.home.index}
        element={
          <SiteBaseLayout>
            <LazySiteHomePage />
          </SiteBaseLayout>
        }
      />

      {/* LIBRARY */}
      {/* 
        <Route path={paths.auth.register} element={<Register />} />
        <Route path={paths.auth.login.index} element={<Login />} />
        <Route path={paths.auth.login.forgotPassword} element={<ForgotPassword />} />
        <Route path={paths.auth.login.resetPassword} element={<ResetPassword />} />
      */}

      {/* Protected Routes */}
      <Route
        path={paths.library.home}
        element={
          // <div className='PROTECTED ROUTE'>
          <LibraryHomeLayout>
            <LazyHomePage />
          </LibraryHomeLayout>
          // </div>
        }
      />
      <Route
        path={paths.library.book.index}
        element={
          // <div className='PROTECTED ROUTE'>
          <LibraryHomeLayout>
            <LazyBookPage />
          </LibraryHomeLayout>
          // </div>
        }
      />
    </Routes>
  );
}
