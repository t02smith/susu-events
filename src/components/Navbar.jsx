import React, { useState } from 'react'
import { Link } from "react-router-dom"

import "../style/css/components/Navbar.css"
import Overlay from './Overlay';


function Navbar({ logout }) {
    const [open, setOpen] = useState(false);

    const close = () => setOpen(false);

    return (
        <>
            <Overlay open={open} close={close} />
            <nav className="navbar">
                <i onClick={() => setOpen(!open)} className="fas fa-bars"></i>
                <div className={`navbar-main ${open && "navbar-open"}`}>

                    <Link to="/events" onClick={close}>
                        <i className="far fa-calendar"></i>
                    </Link>

                    <Link to="/tracker" onClick={close}>
                        <i className="fas fa-compass"></i>
                    </Link>


                    
                </div>

            </nav>
        </>

    )
}

export default Navbar
