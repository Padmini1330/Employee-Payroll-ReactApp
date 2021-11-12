import React, { useState, userEffect } from 'react';
import profile1 from '../../assets/profile-images/Ellipse -3.png';
import profile2 from '../../assets/profile-images/Ellipse -4.png';
import profile3 from '../../assets/profile-images/Ellipse -5.png';
import profile4 from '../../assets/profile-images/Ellipse -7.png';
import profile5 from '../../assets/profile-images/Ellipse -2.png';
import profile6 from '../../assets/profile-images/Ellipse -1.png';
import './payroll-form.scss';
import logo from '../../assets/images/logo.png';
import { userParams, Link, withRouter } from 'react-router-dom';
import EmployeeService from '../../services/employee-service';


const PayrollForm = (props) => {
    let initialValue = {
  name: '',
  profileArray: [
      { url: '../../assets/profile-images/Ellipse -3.png'},
      { url: '../../assets/profile-images/Ellipse -4.png'},
      { url: '../../assets/profile-images/Ellipse -5.png'},
      { url: '../../assets/profile-images/Ellipse -7.png'},
      { url: '../../assets/profile-images/Ellipse -2.png'},
      { url: '../../assets/profile-images/Ellipse -1.png'},
  ],
  allDepartments:['HR','Sales','Finance','Engineer','Others'],
  departmentValue: [], 
  gender: '',   
  salary: '40000',
  day: '1',
  month: 'Jan',
  year: '2021',
  startDate: '',
  notes: '',
  id: '',      
  profileUrl:'',
  isUpdate: false,
  isError: false,
  error: {
    department: '',
    name: '',
    gender: '',
    salary:'',
    profileUrl: '',
    startDate: ''    
  }
}
    
const employee=new EmployeeService();
const [formValue,setForm] = useState(initialValue);
const changeValue=(event)=>{
    setForm({...formValue,[event.target.name]: event.target.value})
}
const onCheckChange=(name)=>{
    let index=formValue.departmentValue.indexOf(name);
    let checkArray=[...formValue.departmentValue]
    if(index>-1)
    checkArray.splice(index,1)
    else
    checkArray.push(name);
    setForm({...formValue,departmentValue:checkArray});
}

const getChecked=(name)=>{
    return formValue.departmentValue && formValue.departmentValue.includes(name);
}

const validData=async()=>{
    let isError=false;
    let error={
        department:'',
        name:'',
        gender:'',
        salary:'',
        profileUrl:'',
        startDate:''
    }
    if(formValue.name.length <1)
    {
        error.name='name is required field'
        isError=true;
    }
    if(formValue.gender.length <1)
    {
        error.name='gender is required field'
        isError=true;
    }
    if(formValue.salary.length <1)
    {
        error.name='salaryy is required field'
        isError=true;
    }
    if(formValue.profileUrl.length <1)
    {
        error.name='profile is required field'
        isError=true;
    }
    if(formValue.departmentValue.length <1)
    {
        error.name='department is required field'
        isError=true;
    }
    await setForm({...formValue,error:error})
    return isError;
}

const save = async(event)=>{
  event.preventDefault();
  console.log("save");

  if(await validData())
  {
      console.log('error',formValue);
      return;
  }

  let object ={

      name:formValue.name,
      departmentValue:formValue.departmentValue,
      gender:formValue.gender,
      salary:formValue.salary,
      startDate:`${formValue.day} ${formValue.month} ${formValue.year}`,
      notes:formValue.notes,
      id:2,
      profileUrl:formValue.profileUrl,
  }

  employee.addEmployee(object).then(data=>{
      console.log("data added");
  }).catch(err =>{
      console.log("err while Add");
  })

}
const reset=()=>{
    setForm({
        ...initialValue,id:formValue.id,isUpdate:formValue.isUpdate
    });
    console.log(formValue);
}
  
    return (
      <div className="body">
        <header className="headerContainer header">
          <div className="logoContainer">
            <img src={logo} alt="" />
            <div>
              <span className="emp-text">EMPLOYEE</span><br />
              <span className="emp-text emp-payroll">PAYROLL</span>
            </div>
          </div>
        </header>
        <div className="form-content">
          <form className="form" action="#" onSubmit={save} >
            <div className="form-head">Employee Payroll form</div>
            <div className="row-content">
              <label className="label text" htmlFor="name">Name</label>
              <input className="input" type="text" id="name" name="name" value={formValue.name} onChange={changeValue} placeholder="Your name.." required />
              <div className="error-output">{formValue.error.name}</div>
              </div>

            <div className="row-content">
              <label className="label text" htmlFor="profileUrl">Profile Image</label>
              <div className="profile-radio-content">
                <label>
                  <input type="radio" id="profile1" name="profileUrl" value="../../assets/profile-images/Ellipse -3.png" 
                    checked={formValue.profileUrl === '../../assets/profile-images/Ellipse -3.png'} onChange={changeValue} />
                  <img className="profile" id="image1" src={profile1} alt="" />
                </label>
                <label>
                  <input type="radio" id="profile2" name="profileUrl" value="../../assets/profile-images/Ellipse -4.png" 
                    checked={formValue.profileUrl === '../../assets/profile-images/Ellipse -4.png'} onChange={changeValue} />
                  <img className="profile" id="image2" src={profile2} alt="" />
                </label>
                <label>
                  <input type="radio" id="profile3" name="profileUrl" value="../../assets/profile-images/Ellipse -5.png" 
                    checked={formValue.profileUrl === '../../assets/profile-images/Ellipse -5.png'} onChange={changeValue} />
                  <img className="profile" id="image3" src={profile3} alt="" />
                </label>
                <label>
                  <input type="radio" id="profile4" name="profileUrl" value="../../assets/profile-images/Ellipse -7.png" 
                    checked={formValue.profileUrl === '../../assets/profile-images/Ellipse -7.png'} onChange={changeValue} />
                  <img className="profile" id="image4" src={profile4} alt="" />
                </label>
                <label>
                  <input type="radio" id="profile5" name="profileUrl" value="../../assets/profile-images/Ellipse -2.png" 
                    checked={formValue.profileUrl === '../../assets/profile-images/Ellipse -2.png'} onChange={changeValue} />
                  <img className="profile" id="image5" src={profile5} alt="" />
                </label>
                <label>
                  <input type="radio" id="profile6" name="profileUrl" value="../../assets/profile-images/Ellipse -1.png" 
                    checked={formValue.profileUrl === '../../assets/profile-images/Ellipse -1.png'} onChange={changeValue} />
                  <img className="profile" id="image6" src={profile6} alt="" />
                </label>
              </div>
              <div className="error-output">{formValue.error.profileUrl}</div> 
            </div>
            
            <div className="row-content">
              <label className="label text" htmlFor="gender">Gender</label>
              <div>
                <label>
                  <input type="radio" id="male" checked={formValue.gender === 'male'} onChange={changeValue} name="gender" value="male"  />
                  <label className="text" htmlFor="male">Male</label>
                </label>
                <label>
                  <input type="radio" id="female" checked={formValue.gender === 'female'} onChange={changeValue} name="gender" value="female"  />
                  <label className="text" htmlFor="female">Female</label>
                </label>
              </div>
              <div className="error-output">{formValue.error.gender}</div>
              </div>
              
            
              <div className="row-content">
                        <label className="label text" htmlFor="department">Department</label>
                        <div>
                            {formValue.allDepartments.map(item => (
                                <span key={item}>
                                    <input className="checkbox" type="checkbox" onChange={() => onCheckChange(item)} name={item} defaultChecked={() => getChecked(item)} value={item} />
                                    <label className="text" htmlFor={item}>{item}</label>
                                </span>
                            ))}
                        </div>
                  <div className="error-output">{formValue.error.department}</div>
              </div>

              <div className="row-content">
                        <label className="label text" htmlFor="salary">Salary:</label>
                        <input className="input" type="text" id="salary" name="salary" value={formValue.salary} onChange={changeValue} />
                        <div className="error-output">{formValue.error.salary}</div>
              </div>
              <br />

            
            <div className="row-content">
              <label className="label text" htmlFor="startDate">Start Date</label>
              <div name="startdate" id="startDate">
                <select onChange={changeValue} value={formValue.day} id="day" name="day">
                  <option value="01">1</option>
                  <option value="02">2</option>
                  <option value="03">3</option>
                  <option value="04">4</option>
                  <option value="05">5</option>
                  <option value="06">6</option>
                  <option value="07">7</option>
                  <option value="08">8</option>
                  <option value="09">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <select onChange={changeValue} value={formValue.month} id="month" name="month">
                  <option value="Jan">January</option>
                  <option value="Feb">February</option>
                  <option value="Mar">March</option>
                  <option value="Apr">April</option>
                  <option value="May">May</option>
                  <option value="Jun">June</option>
                  <option value="July">July</option>
                  <option value="Aug">August</option>
                  <option value="Sep">September</option>
                  <option value="Oct">October</option>
                  <option value="Nov">November</option>
                  <option value="Dec">December</option>
                </select>
                <select onChange={changeValue} value={formValue.year} id="year" name="year">
                  <option value="2020">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                </select>
              </div>
              <div className="error-output">{formValue.error.startDate}</div>
             </div>
             
            <div className="row-content">
              <label className="label text" htmlFor="notes">Notes</label>
              <textarea className="input" onChange={changeValue} value={formValue.notes} id="notes" name="notes" placeholder="Write a note..." style={{height:'100px'}}></textarea>
              <div className="error-output">{formValue.error.notes}</div>
            </div>
            <div className="buttonParent">
              <Link to="" className="resetButton button cancelButton">Cancel</Link>
              <div className="submit-reset">
                <button className="button submitButton" type="submit" id="submitButton">{formValue.isUpdate? 'Update' : 'Submit'}</button>
                <button className="resetButton button" onClick={reset} type="reset">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }


export default PayrollForm;