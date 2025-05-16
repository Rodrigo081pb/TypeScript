import React, { useState, useEffect } from 'react';
import { login } from './services/Login';
import { api } from './api';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Conta from './components/Card/Conta';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/conta"
          element={<Conta/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
