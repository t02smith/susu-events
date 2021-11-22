import React, { useState } from 'react'
import Navbar from './Navbar';
import Overlay from './Overlay';

import "../style/css/components/Header.css";
import Profile from '../pages/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function Header({ title }) {
    const { user } = useAuth0();
    const [navOpen, setNavOpen] = useState(false);
    const [profOpen, setProfOpen] = useState(false);

    const close = () => {
        if (navOpen) setNavOpen(false);
        else if (profOpen) setProfOpen(false)
    }

    return (
        <div className="header">
            <Overlay open={navOpen || profOpen} close={close} />
            <div className="header-content">
                <img className="open-profile" src={user.picture} onClick={() => setProfOpen(true)} alt=""/>
                {   
                    title ?
                    <h1><b>{title.split(" ")[0]}</b> {title.substr(title.indexOf(" ") + 1)}</h1>
                    : <h1><b>SUSU</b> Events</h1>
                }
                <i onClick={() => setNavOpen(!navOpen)} className="fas fa-bars"></i>
            </div>


            <Navbar open={navOpen} close={() => setNavOpen(false)}/>
            <Profile open={profOpen} close={() => setProfOpen(false)}/>
        </div>
    )
}

export default Header
