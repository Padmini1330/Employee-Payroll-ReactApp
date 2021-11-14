import React from 'react';
import logo from '../../assets/images/logo.png';
import addIcon from '../../assets/icons/add-24px.svg';
import './employee-payroll-home.scss';
import {Link} from 'react-router-dom';
import Display from './employee-home';
import EmployeeService from '../../services/employee-service';

var employeeService = new EmployeeService();  

class EmployeePayrollHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeArray: []
    };
      
  }


 getAllEmployeeList = () => {
    employeeService.getAllEmployees()
    .then(responseData => {
      console.log("Data received after GET Call " + responseData.data);
      this.setState({employeeArray: responseData.data});
    }).catch(error => {
      console.log("Error while fetching Employee List\nError : " +JSON.stringify(error));
    })
  }
  
  render () {
    return (
      <div className="body" onLoad={this.getAllEmployeeList}>
        <header className="header-content header">
            <div className="logo-content">
                <img className = "logo-content-img" src={logo} alt="Logo" />
                <div>
                    <span className="emp-text">EMPLOYEE</span><br />
                    <span className="emp-text emp-payroll">PAYROLL</span>
                </div>
            </div>
        </header>
        <div className="main-content">
            <div className="header-content">
                <div className="heading">
                    Employee Details
                    <div className="emp-count">
                        {this.state.employeeArray.length}
                    </div>
                </div>
                {/* <div className="search-box" onClick={this.openSearch}>
                  <input className={"search-input " + (this.state.searchExpand && "input-expand")}
                    onChange={this.search} type="text" placeholder="" />
                  <img className="search-icon" src={addIcon} alt="Search Icon" />
                </div> */}
                <Link to="payroll-form" className="add-button">
                  <img src={addIcon} alt="Add Button" />Add User
                </Link>
            </div>
            <div className="table-main">
                <Display employeeArray = {this.state.employeeArray} />
            </div>
        </div>
      </div>
    );
  }
}

export default EmployeePayrollHome;