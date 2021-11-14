import React from 'react'
import {Link} from "react-router-dom"

import "../../../style/css/components/SocietyCard.css"



function SocietyCard({ title, img, id}) {
    return (
        <Link to={`/societies/${id}`} className="society-card">
            <img alt="logo" src={img} />
        </Link>
    )
}

export default SocietyCard
