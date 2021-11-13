import React, { useState } from 'react'

import "../../../style/css/components/Register.css"

function Register({ open, registerUser, login }) {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    
    const [passwordFst, setPasswordFst] = useState("");
    const [passwordSnd, setPasswordSnd] = useState("");



    const handleSubmit = async () => {
        if (passwordFst === passwordSnd) {
            await registerUser(name, username, passwordFst);
        }

        setPasswordFst("");
        setPasswordSnd("");
    }

    return (
        <div className={`register ${open && "register-open"}`}>
            <h2>Register an account</h2>
            <form onSubmit={handleSubmit}>
                <h3>Your name:</h3>
                <input onChange={e => setName(e.target.value)} type="text" name="name" id="" value={name}/>
                <h3>Your username:</h3>
                <input onChange={e => setUsername(e.target.value)} type="text" name="username" id="" value={username}/>
                <h3>Your password:</h3>
                <input onChange={e => setPasswordFst(e.target.value)} type="password" name="password-fst" id="" value={passwordFst}/>
                <input onChange={e => setPasswordSnd(e.target.value)} type="password" name="password-snd" id="" value={passwordSnd}/>

                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register