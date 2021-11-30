import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Link } from "react-router-dom"

import "../style/css/components/Navbar.css"


function Navbar({open, close}) {
    const { logout } = useAuth0();

    return (
        <nav className={`navbar ${open && "navbar-open"}`}>

            <Link to="/" onClick={close} className="mob-only">
                <i className="fas fa-home"></i>
            </Link>

            <Link to="/societies" onClick={close}>
                <i className="fas fa-users"></i>
            </Link>

            <Link to="/events" onClick={close}>
                <i className="far fa-calendar"></i>
            </Link>
            
            <Link to="/" onClick={() => {close(); logout();}}>
                <i className="fas fa-sign-out-alt"></i>
            </Link>
            
        </nav>        
        

    )
}

export default Navbar
