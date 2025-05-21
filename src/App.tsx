import React from 'react';
import { Outlet } from 'react-router-dom';
const Index = React.lazy(() => import('./Layout/Pages/Login/Index'));

const App = () => {
  return (
    <>
      <Index />
    </>
  );
};

export default App;
