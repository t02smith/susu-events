import React, {useState} from 'react'

import "../../../style/css/components/Login.css"

function Login({login}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [stayLoggedIn, setStayLoggedIn] = useState(true);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) return;

        await login(username,password, stayLoggedIn);
    }
    
    return (
        <form className="login" onSubmit={handleSubmit}>


            <input type="text" value={username} onChange={e => setUsername(e.target.value)} id = "" placeholder="USERNAME"/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} id = "" placeholder="PASSWORD"/>

            <button type="submit">Login</button>
            <div className="stay-logged-in">
                <div className={`tickbox ${stayLoggedIn && "tickbox-checked"}`} onClick={() => setStayLoggedIn(!stayLoggedIn)}>
                    <i className="fas fa-check"></i>
                </div>
                Stay logged in?
            </div>
        </form>

    )
}

export default Login