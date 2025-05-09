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

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  const Queryclient = new QueryClient();
  const Router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<App />}></Route>),
  );

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={Queryclient}>
        <RouterProvider router={Router}></RouterProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  );
}
