import React, { useEffect, useState } from 'react'
import { addNewDepartment, getDepartmentById, updateDepartment } from '../services/DepartmentService'
import { useNavigate, useParams } from 'react-router-dom'
import { getEmployeeById } from '../services/EmployeeService'

function DepartmentComponent() {

    const [departmentDescription, setDepartmentDescription] = useState('')
    const [departmentName, setDepartmentName] = useState('')
    const [error, setError] = useState({
        departmentName: '',
        departmentDescription: ''
    })

    const { id } = useParams()

    const navigate = useNavigate()

    function saveDepartment(e) {
        e.preventDefault()
        const dp = { departmentName, departmentDescription }
        if (id) {
            updateDepartment(dp, id).then((response) => {
                console.log(response.data);
                navigate('/departments')
            }).catch(error => {
                console.error(error);
            })
        } else {
            addNewDepartment(dp).then((response) => {
                console.log(response);
                navigate('/departments')
            }).catch(error => {
                console.error(error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            getDepartmentById(id).then((response) => {
                setDepartmentName(response.data.departmentName)
                setDepartmentDescription(response.data.departmentDescription)
            }).catch(error => {
                console.error(error);
            })
        }
    }, [])


    return (
        <div className='container'>
            {id ? <h2 className='text-center'>Update Department</h2> : <h2 className='text-center'>Add new Department</h2>}
            <form>
                <div className="form-group p-2">
                    <label htmlFor="exampleFormControlInput1">Department Name</label>
                    <input type="text" className={`form-control ${error.departmentName ? 'is-invalid' : ''}`} id="exampleFormControlInput1" value={departmentName} onChange={(e) => setDepartmentName(e.target.value)} />
                    {error.departmentName && <div className='invalid-feedback'>{error.departmentName}</div>}
                </div>
                <div className="form-group p-2">
                    <label htmlFor="exampleFormControlInput1">Department description</label>
                    <input type="text-area" className={`form-control ${error.departmentDescription ? 'is-invalid' : ''}`} id="exampleFormControlInput1" value={departmentDescription} onChange={(e) => setDepartmentDescription(e.target.value)} />
                    {error.departmentDescription && <div className='invalid-feedback'>{error.departmentDescription}</div>}
                </div>
                <button className='btn btn-dark mt-2 ms-2' onClick={saveDepartment}>submit</button>
            </form>
        </div>
    )
}

export default DepartmentComponent