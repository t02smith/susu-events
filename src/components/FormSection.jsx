import React from 'react'

function FormSection({ text, children }) {
    return (
        <div className="form-section">
            <h2>{text}</h2>
            {children}
        </div>
    )
}

export default FormSection
