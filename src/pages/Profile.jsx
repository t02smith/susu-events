import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'

import SocietyCard from "../components/SocietyCard"

import "../style/css/pages/Profile.css"
import Feed from './Feed'

const soc = require("../data/societies").default

function Profile() {
    const { user } = useAuth0();

    useEffect(() => console.log(user))
    
    return (
        <div className="profile-container">
            <div className="profile">
                <div className="user-info">
                    <img src={user.picture} alt=""/>
                    <h1>{user.nickname}</h1>
                </div>

                <div className="society-list">
                    <h2>Your Societies</h2>
                    <div>
                        {
                            soc &&
                            soc.map((s, i) => <SocietyCard key={i} logo={s.logo}/>)
                        }
                    </div>
                </div>
            </div>
            <Feed />
        </div>
        
    )
}

export default Profile


