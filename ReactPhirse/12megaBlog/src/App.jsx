import React, { useState } from 'react'
import './App.css'
import authService from './appwrite/auth';
import { useEffect } from 'react';
import { login, logout } from './store/authSlice';
import {useDispatch} from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false));
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
      {/* <Header /> */}
        <main>
          Todo: {/* Outlet */}
        </main>
        <Footer />
      </div>
    </div>
  ) : <p> Loading.......... </p>
}

export default App
