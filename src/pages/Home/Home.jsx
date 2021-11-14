import React from 'react'

import "../../style/css/pages/Home.css"
import Login from "./components/Login.jsx"



function Home({ login }) {
    
    return (
        <div className="home">
            <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="" />
            <div>
                <Login login={login}/>

                <div>
                    <p>Not a current user?</p>
                    <p>Register Now</p>
                </div>
            </div>
        </div>
    )
}

export default Home
