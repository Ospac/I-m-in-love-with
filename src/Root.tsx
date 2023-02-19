import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Root() {
  return <div className='bg-gradient-to-r from-red-500 to-green-500'>
    <Header/>
    <Outlet />
  </div>
}

export default Root;
