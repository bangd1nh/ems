import React, { useEffect, useState } from 'react'
import { deleteDepartment, getAllDepartment } from '../services/DepartmentService.js'
import { useNavigate } from 'react-router-dom'

function ListDeparmentComponent() {

    const navigate = useNavigate()

    const [data, setData] = useState([])

    useEffect(() => {
        getAllDepartments()
    }, [])

    function getAllDepartments() {
        getAllDepartment().then((Response) => {
            setData(Response.data)
            console.log();
        }).catch(errors => {
            console.error(errors)
        })
    }

    function addNewDepartment() {
        navigate('/add-new-department')
    }

    function updateDepartment(id) {
        navigate(`/update-department/${id}`)
    }

    function removeDepartment(id) {
        deleteDepartment(id).then((response) => {
            console.log(response.data);
            getAllDepartments()
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Department List</h2>
            <button className='btn btn-outline-dark m-2' onClick={addNewDepartment}>Add Department</button>
            <table className='table table-striped table-bordered p-2'>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Department Name
                        </th>
                        <th>
                            Department Descrpition
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.departmentName}</td>
                        <td>{d.departmentDescription}</td>
                        <td><button className='btn btn-primary' onClick={() => updateDepartment(d.id)}>Update</button>
                            <button className='btn btn-danger ms-2' onClick={() => removeDepartment(d.id)}>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListDeparmentComponent