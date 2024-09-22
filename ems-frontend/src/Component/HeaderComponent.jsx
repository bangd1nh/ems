import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'


function HeaderComponent() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a className="navbar-brand mb-0 h1 ms-2" href='http://localhost:3000'>Employee Management System</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/employees'>Employees</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/departments'>Department</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default HeaderComponent