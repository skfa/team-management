import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Login from './components/Login';
import { AuthProvider, useAuth } from './components/AuthProvider';


function App() {
  const {auth} = useAuth();

  return (
    <AuthProvider>
    <div>
      <header className='bg-gray-800 shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-white'>
            <Link to="/">Team Management</Link>
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {
            (()=>{
              if(!auth.isAuthenticated){
                return (
                  <Login></Login>
                );
              }
              else {
                  <Outlet></Outlet>
              }
            })()
          }

        </div>
      </main>

    </div>
    </AuthProvider>
  );
}

export default App;
