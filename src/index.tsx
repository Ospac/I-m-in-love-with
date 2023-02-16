import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import router from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const client = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
