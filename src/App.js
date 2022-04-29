import React, { createContext } from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './About'
import { Home } from './Home'
import { NotFound } from './NotFound'
import { Login } from './Login'
import { UserProvider } from './userContext';

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App;
