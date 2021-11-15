import './App.css';
import React, { Component }  from 'react';
import PayrollForm from './components/payroll-form/payroll-form.jsx';
import EmployeePayrollHome from './components/employee-payroll-home/employee-payroll-home.jsx';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  
    <Routes>
      <Route exact path="/payroll-form" element={<PayrollForm />}/> 
      <Route exact path="/" element={<EmployeePayrollHome />}/>
      <Route exact path="/payroll-form/:id" element={<PayrollForm />}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
