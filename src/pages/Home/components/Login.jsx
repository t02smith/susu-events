import React, {useState} from 'react'

import "../../../style/css/components/Login.css"

import LoginField from "./LoginField";

function Login({login}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [stayLoggedIn, setStayLoggedIn] = useState(true);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) return;

        const res = await login(username,password, stayLoggedIn);
        if (res) {
            setUsername("");
        }
        
        setPassword("");
    }
    
    return (
        <form className="login" onSubmit={handleSubmit}>

            <LoginField type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="USERNAME" icon="fas fa-user"/>
            <LoginField type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="PASSWORD" icon="fas fa-lock"/>


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