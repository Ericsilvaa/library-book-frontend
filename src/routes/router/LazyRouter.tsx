import { lazyLoad } from '../utils/LazyLoad';
import BaseLayout from '@/layouts/BaseLayout';
import { Route, Routes } from 'react-router-dom';
import { paths } from '../paths';

export const routeProtections = {
  ADMIN: 'ADMIN',
  LOGGED_IN: 'LOGGED_IN'
};

const LazyHomePage = lazyLoad(() => import('@/pages/Home'));

export function LazyRouter() {
  return (
    <Routes>
      {/* Unprotected Routes  */}
      {/* 
        <Route path={paths.auth.register} element={<Register />} />
        <Route path={paths.auth.login.index} element={<Login />} />
        <Route path={paths.auth.login.forgotPassword} element={<ForgotPassword />} />
        <Route path={paths.auth.login.resetPassword} element={<ResetPassword />} />
      */}

      {/* Protected Routes */}
      <Route
        path={paths.home}
        element={
          <div className='PROTECTED ROUTE'>
            <BaseLayout>
              <LazyHomePage />
            </BaseLayout>
          </div>
        }
      />
    </Routes>
  );
}
