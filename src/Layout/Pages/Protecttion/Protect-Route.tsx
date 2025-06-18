import React, { Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { CustomErrorfun } from './../../Custom-Error/useErrorhook';
import { ErrorBoundary } from 'react-error-boundary';
import { CheckUser } from './../../Custom-Elements/Buttonclick';
const Header = React.lazy(
  () => import('./../../Pages/Dashboard/Header/Header'),
);

const ProtectRoute = () => {
  return CheckUser() ? (
    <>
      <Header />
      <Suspense fallback={<>Loading</>}>
        <ErrorBoundary FallbackComponent={CustomErrorfun}>
          <Outlet />
        </ErrorBoundary>
      </Suspense>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectRoute;
