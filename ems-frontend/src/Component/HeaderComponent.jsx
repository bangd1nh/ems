import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function HeaderComponent() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand mb-0 h1 ms-2" href='http://localhost:3000'>Employee Management System</a>
            </nav>
        </div>
    )
}

export default HeaderComponent