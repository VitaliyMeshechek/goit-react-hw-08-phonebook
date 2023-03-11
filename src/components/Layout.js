import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Outlet } from 'react-router-dom';
import { AppMenu } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer position="top-center" autoClose={5000} theme="colored" />
    </div>
  );
};
