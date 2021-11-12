import './App.css';
import React, { Component }  from 'react';
import PayrollForm from './components/payroll-form/payroll-form.jsx';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  
    <Routes>
      <Route path="/" element={<PayrollForm />}/> 
    </Routes>
    </BrowserRouter>
  );
}
export default App;

