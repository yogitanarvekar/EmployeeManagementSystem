import React, { useState, useEffect } from 'react'
import { createEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponents = () => {


  const [firstName, setFirstName]=useState("")
  const [lastName, setLastName]=useState("")
  const [email, setEmail]=useState("")
  const navigator = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    if(id){
      getEmployeeById(id).then((res)=>{
        setFirstName(res.data.firstName)
        setLastName(res.data.lastName)
        setEmail(res.data.email)
      }).catch((err)=>{
        console.log(err)
      })
    }
  },[id])


  function saveAndUpdateEmployee(e){
    e.preventDefault();

    const employee = {
      firstName,
      lastName,
      email
    }

    if(id){
      updateEmployee(id, employee).then((res)=>{
        navigator('/')
      }).catch((err)=>{
        console.log(err)
      })
    }else{
      createEmployee(employee).then((res)=>{
        navigator('/')
      }).catch((err)=>{
        console.log(err)
      })
    }
    
  }

  function setPageTitle(){
    if(id){
      return <h1 className='text-center'>Edit Employee</h1>
    }else{
      return <h1 className='text-center'>Add Employee</h1>
    }
  }

  return (
    <div className='container'>
      <br /><br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {setPageTitle()}
                <div className='card-body'>
                  <form>
                    <div className='form-group mb-2'>
                      <label className='form-label'>First Name:</label>
                      <input 
                        type="text"
                        placeholder='Enter Employee First Name'
                        name='firstName'
                        value={firstName}
                        className='form-control'
                        onChange={(e)=>setFirstName(e.target.value)}
                       />
                    </div>
                    <div className='form-group mb-2'>
                      <label className='form-label'>Last Name:</label>
                      <input 
                        type="text"
                        placeholder='Enter Employee Last Name'
                        name='lastName'
                        value={lastName}
                        className='form-control'
                        onChange={(e)=>setLastName(e.target.value)}
                       />
                    </div>
                    <div className='form-group mb-2'>
                      <label className='form-label'>Email:</label>
                      <input 
                        type="text"
                        placeholder='Enter Employee Email'
                        name='Email'
                        value={email}
                        className='form-control'
                        onChange={(e)=>setEmail(e.target.value)}
                       />
                    </div>
                    <button onClick={saveAndUpdateEmployee} className='btn btn-success'>Submit</button>
                  </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponents