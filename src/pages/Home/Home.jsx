import React, { useState } from 'react'
import Overlay from '../../components/Overlay';

import "../../style/css/pages/Home.css"
import Login from "./components/Login.jsx"



function Home({ login }) {
    
    const [registerOpen, setRegisterOpen] = useState(false);
    

    return (
        <div className="home">
            <img src="/img/logo.png" alt="" />
            <div>
                <Login login={login}/>

                <div>
                    <p>Not a current user?</p>
                    <p onClick={() => setRegisterOpen(true)}>Register Now</p>
                </div>
            </div>
        </div>
    )
}

export default Home
