import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default App;
