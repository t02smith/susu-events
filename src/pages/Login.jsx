import React from 'react'

import { useAuth0 } from "@auth0/auth0-react"

import "../style/css/pages/Login.css"

function Login() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="login">
            <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="" />
            <div>
                <div className="login-info">
                    <h1><b>Welcome</b> to SUSU Events</h1>
                    <p>Your personalised society event manager</p>
                </div>
                <button onClick={() => loginWithRedirect()}>
                    Log In
                </button>
                <p><i className="fas fa-lock"></i> Login powered by Auth0</p>
            </div>
            
        </div>
    )
}

export default Login
