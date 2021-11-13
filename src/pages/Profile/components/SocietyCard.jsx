import React from 'react'
import {Link} from "react-router-dom"

import "../../../style/css/components/Soceity.css"



function SocietyCard({ title, img, id }) {
    return (
        <Link to={`/societies/${id}`} className="society">
            <img alt="logo" src={img} />
            <div>
                <h3>{title}</h3>
            </div>
            
        </Link>
    )
}

export default SocietyCard
