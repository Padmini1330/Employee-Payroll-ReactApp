import React from 'react';
import './employee-payroll-home.scss';
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import editIcon from '../../assets/icons/create-black-18dp.svg';
import profile1 from '../../assets/profile-images/Ellipse -3.png';
import profile2 from '../../assets/profile-images/Ellipse -4.png';
import profile3 from '../../assets/profile-images/Ellipse -5.png';
import profile4 from '../../assets/profile-images/Ellipse -7.png';
import profile5 from '../../assets/profile-images/Ellipse -2.png';
import profile6 from '../../assets/profile-images/Ellipse -1.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Display = (props) => {
  //alert(typeof(props.employeeArray));
  return (
    <table id="display" className="table">
      <tbody>
        
        <tr key={-1}>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Startdate</th>
            <th>Actions</th>
        </tr>
        {
            props.employeeArray && props.employeeArray.map((employee,index) => (
              <tr key={index}>
                  <td><img className="profile" src={profile1} alt="" /></td>
                  <td>{employee.name}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.departmentValue && employee.departmentValue.map(dept => 
                    (<div className="dept-label">{dept}</div>))}</td>
                  <td> ₹ {employee.salary}</td>
                  <td>{employee.startDate}</td>
                  <td><img src={deleteIcon} onClick={() => remove(employee.id)} alt="delete" />
                      <img src={editIcon} onClick={() => edit(employee.id)} alt="edit" /></td>
              </tr>
            ))
          }
        </tbody>
    </table>
  )
}
const remove = (id) => {
}

const edit = (id) => {
}

export default Display;