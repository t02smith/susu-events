import React from 'react'

function LoginField({ type, placeholder, value, onChange, icon }) {
    return (
        <div className="login-field">
            <i className={icon}></i>
            <input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}

export default LoginField
