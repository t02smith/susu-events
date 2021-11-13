import React, { useState } from 'react'
import Overlay from '../../components/Overlay';

import "../../style/css/pages/Home.css"
import Login from "./components/Login.jsx"
import Register from './components/Register';


function Home({ login }) {
    const [registerOpen, setRegisterOpen] = useState(false);
    

    return (
        <div className="home">
            <Overlay open={registerOpen} close={() => setRegisterOpen(false)} />

            <img src="/img/logo.png" alt="" />
            <Login login={login}/>



            <div>
                <p>Not a current user?</p>
                <p onClick={() => setRegisterOpen(true)}>Register Now</p>
            </div>
            
            <Register open={registerOpen} />
        </div>
    )
}

export default Home
