import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getEmployeeById } from '../services/EmployeeService'

const ShowEmployeeComponents = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const {id} = useParams();

  useEffect(()=>{
    getEmployeeById(id).then((res)=>{
      setFirstName(res.data.firstName)
      setLastName(res.data.lastName)
      setEmail(res.data.email)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div className='container'>
      <br />
      <br />
      <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h1 className='text-center'>View Employee</h1>
            <div className='card-body'>
              <div className='show-form-group mb-2'>
                <label className='form-label'>Id: </label>
                <h5>{id}</h5>
              </div>
              <div className='show-form-group mb-2'>
                <label className='form-label'>First Name: </label>
                <h5>{firstName}</h5>
              </div>
              <div className='show-form-group mb-2'>
                <label className='form-label'>Last Name: </label>
                <h5>{lastName}</h5>
              </div>
              <div className='show-form-group mb-2'>
                <label className='form-label'>Email Id: </label>
                <h5>{email}</h5>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ShowEmployeeComponents