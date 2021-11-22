import React from 'react'
import Header from '../components/Header'

function Page({ title, children, className }) {
    return (
        <div className={className}>
            <Header title={title} />
            {children}
        </div>
    )
}

export default Page
