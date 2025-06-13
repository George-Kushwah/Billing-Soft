import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Assets/Scss/Custom.scss';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProtectRoute from './Layout/Pages/Protecttion/Protect-Route';
const Index = React.lazy(() => import('./Layout/Pages/Login/Index'));
const Dashboard = React.lazy(() => import('./Layout/Pages/Dashboard/Index'));

const CustomErrorPage = React.lazy(() => import('./Layout/Custom-Error/Error'));

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  const Queryclient = new QueryClient();
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/Login" element={<Index />} />
        <Route path="/" element={<ProtectRoute />}>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<CustomErrorPage />} />
      </Route>,
    ),
  );

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={Queryclient}>
        <RouterProvider router={Router}></RouterProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  );
}
