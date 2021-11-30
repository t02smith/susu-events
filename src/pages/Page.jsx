import React from 'react'
import Header from '../components/Header'

function Page({ title, children, className }) {
    return (
        <div className="page">
            <Header title={title} />
            <div className={`page-content ${className}`}>
                {children}
            </div>
            
        </div>
    )
}

export default Page
