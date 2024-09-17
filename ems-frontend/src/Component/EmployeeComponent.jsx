import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService.js'
import { useNavigate, useParams } from 'react-router-dom'

function EmployeeComponent() {

    const [firstName, setFistName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()
    const { id } = useParams();

    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    useEffect(() => {
        if (id) {
            getEmployeeById(id).then((response) => {
                setFistName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
            }).catch(error => {
                console.log(error);
            })
        }
    }, [])

    function vaidateForm() {
        let valid = true;
        const errorCopy = { ...error }
        if (firstName.trim()) {
            errorCopy.firstName = ''
        } else {
            errorCopy.firstName = 'First name is required'
            valid = false
        }
        if (lastName.trim()) {
            errorCopy.lastName = ''
        } else {
            errorCopy.lastName = 'Last name is required'
            valid = false
        }
        if (email.trim()) {
            errorCopy.email = ''
        } else {
            errorCopy.email = 'Email is required'
            valid = false
        }
        setError(errorCopy)
        return valid
    }

    function saveEmployee(e) {
        e.preventDefault()
        const emp = { firstName, lastName, email }

        if (vaidateForm()) {

            if (id) {
                updateEmployee(id, emp).then((response) => {
                    console.log(response.data);
                    navigate('/employees')
                }).catch(error => {
                    console.error(error);
                })
            } else {
               

                createEmployee(emp).then((response) => {
                    console.log(response.data)
                    navigate('/employees')
                }).catch(error=>{
                    console.error(error);
                })
            }

        }
    }

    function title() {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add new Employee</h2>
        }

    }

    return (
        <div className='container border p-3 mt-3 rounded'>
            <div>
                {title()}
                <form>
                    <div className="form-group p-2">
                        <label htmlFor="exampleFormControlInput1">First Name</label>
                        <input type="text" className={`form-control ${error.firstName ? 'is-invalid' : ''}`} id="exampleFormControlInput1" value={firstName} onChange={(e) => setFistName(e.target.value)} />
                        {error.firstName && <div className='invalid-feedback'>{error.firstName}</div>}
                    </div>
                    <div className="form-group p-2">
                        <label htmlFor="exampleFormControlInput1">Last Name</label>
                        <input type="text" className={`form-control ${error.lastName ? 'is-invalid' : ''}`} id="exampleFormControlInput1" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        {error.firstName && <div className='invalid-feedback'>{error.lastName}</div>}
                    </div>
                    <div className="form-group p-2">
                        <label htmlFor="exampleFormControlInput1">Email</label>
                        <input type="text" className={`form-control ${error.email ? 'is-invalid' : ''}`} id="exampleFormControlInput1" placeholder='email@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                        {error.firstName && <div className='invalid-feedback'>{error.email}</div>}
                    </div>
                    <button className='btn btn-dark mt-2 ms-2' onClick={saveEmployee}>submit</button>
                </form>
            </div>
        </div>
    )
}

export default EmployeeComponent