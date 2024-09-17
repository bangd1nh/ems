import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService.js'
import { useNavigate } from 'react-router-dom'


function ListEmployeeComponent() {

    const [empList, setEmpList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllEmp()
    }, [])

    function getAllEmp() {
        listEmployees().then((response) => {
            setEmpList(response.data)
        }).catch(error => {
            console.error(error)
        })
    }

    function addNewEmployee() {
        navigate('/add-new-employee')
    }
    function removeEmp(id) {
        console.log(id);
        deleteEmployee(id).then((response) => {
            getAllEmp()
        }).catch(error => {
            console.log(error);
        })
    }

    function editHandler(id) {
        navigate(`/update/${id}`)
    }

    return (
        <div className='container'>
            <h3 className='text-center p-2'>List of Employees</h3>
            <button className='btn btn-dark mt-3 mb-3' onClick={addNewEmployee}>Add employee</button>
            <table className='table table-striped table-bordered p-2'>
                <thead className='thead-dark'>
                    <tr>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            id
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {empList.map(emp => <tr key={emp.id}>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.email}</td>
                        <td>{emp.id}</td>
                        <td>
                            <button className='btn btn-outline-dark' onClick={() => editHandler(emp.id)}>Update</button>
                            <button className='btn btn-danger' onClick={() => removeEmp(emp.id)}>Delete</button>
                            </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent