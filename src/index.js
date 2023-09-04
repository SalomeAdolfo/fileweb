import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdministradorPage from './pages/AdministradorPage';
import GeneralPage from './pages/GeneralPage';
import SubCarpetasPage from './pages/SubCarpetasPage';
import SGCPage from './pages/SGCPage';
import FormEmpleado from './components/FormEmleados';
import BirthPage from './components/BirthPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<App />} />
        <Route path='/general' element={<GeneralPage />} />
        <Route path='/admin' element={<AdministradorPage />} />
        <Route path='/folder/:backFolder' element={<SubCarpetasPage />} />
        <Route path='/sgc' element={<SGCPage />} />
        <Route path='/sgc/nuevo' element={<FormEmpleado />} />
        <Route path='/sgc/birthdays' element={<BirthPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);