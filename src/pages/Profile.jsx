import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

import SocietyCard from "../components/SocietyCard"

import "../style/css/pages/Profile.css"

const soc = require("../data/societies").default

function Profile({ open, close }) {
    const { user } = useAuth0();
    
    return (
        <div className={`profile ${open && "profile-open"}`}>

            <div className="user-info">
                <img src={user.picture} alt=""/>
                <h1>{user.nickname}</h1>
            </div>

            <div className="society-list">
                <h2>Your Societies</h2>
                <div>
                    {
                        soc &&
                        soc.map((s, i) => <SocietyCard key={i} logo={s.logo} id={s.id} onClick={() => close()}/>)
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Profile


