import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponents = () => {

    const [employees, setEmployees]=useState([]);
    const navigator = useNavigate();


    useEffect(()=>{
        getAllEmployees();
    })

    function getAllEmployees(){
        listEmployees().then((res)=>{
            setEmployees(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    function removeEmployee(id){
        deleteEmployee(id).then((res)=>{
            // getAllEmployees()
        }).catch((err)=>{
            console.log(err)
        })
    }


  return (
    <div className='container'>
        <h1 className='text-center'>List of Employees</h1>

        <button
            className='btn btn-primary mb-2'
            onClick={()=>{
                navigator("/add-employee")
            }}
        >Add Employee</button>

        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee)=>(
                    <tr key={employee.id}>
                        
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button 
                            className='btn btn-warning'
                            onClick={
                                ()=>{
                                    navigator(`/view-employee/${employee.id}`)
                                }}
                            >View</button>
                            <button 
                            className='btn btn-info'
                            style={{marginLeft:"10px"}}
                            onClick={
                                ()=>{
                                    navigator(`/edit-employee/${employee.id}`)
                                }}
                            >Edit</button>
                            <button 
                            className='btn btn-danger'
                            style={{marginLeft:"10px"}}
                            onClick={
                                ()=>{
                                    removeEmployee(employee.id)
                                }}
                            >Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponents