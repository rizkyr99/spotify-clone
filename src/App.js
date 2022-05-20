import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Login from './components/Login';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Sidebar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
