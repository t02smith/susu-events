import React from 'react'

function TextField({ placeholder, value, onChange, icon }) {
    return (
        <div className="text-field">
            <i className={icon}></i>
            <input type="text" value={value} onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}

export default TextField