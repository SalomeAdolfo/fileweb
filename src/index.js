import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdministradorPage from './pages/AdministradorPage';
import GeneralPage from './pages/GeneralPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<App />} />
        <Route path='/general' element={<GeneralPage/>}/>
        <Route path='/admin' element={<AdministradorPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);