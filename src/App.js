import './App.css';
import React, { Component }  from 'react';
import PayrollForm from './components/payroll-form/payroll-form.jsx';
import EmployeePayrollHome from './components/employee-payroll-home/employee-payroll-home.jsx';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  
    <Routes>
      <Route exact path="/" element={<PayrollForm />}/> 
      <Route exact path = "/home" element={<EmployeePayrollHome />}/>
      <Route exact path="/home/payroll-form" element={<PayrollForm />}/> 
    </Routes>
    </BrowserRouter>
  );
}
export default App;
