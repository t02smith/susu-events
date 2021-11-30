import React from 'react'
import { Link } from "react-router-dom"

import "../style/css/components/SocietyCard.css"

function SocietyCard({ onClick, logo, id }) {
    return (
        <Link to={`/societies/${id}`} className="soc-card" onClick={onClick}>
            <img alt="" src={logo} />
        </Link>
    )
}

export default SocietyCard
