import React from 'react'

import "../style/css/components/SocietyCard.css"

function SocietyCard({ logo }) {
    return (
        <div className="soc-card">
            <img alt="" src={logo} />
        </div>
    )
}

export default SocietyCard
