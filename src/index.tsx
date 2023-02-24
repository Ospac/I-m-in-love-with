import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import router from './Router';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const client = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RecoilRoot>
        <RouterProvider router={router}></RouterProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
