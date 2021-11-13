import React from 'react'
import {Link} from "react-router-dom"

import "../../../style/css/components/Event.css"



function Event({ title, img, startDate, endDate, location, id }) {
    return (
        <Link className="event" to={`/events/${id}`}>
            <img alt="logo" src={img} />
            <div>
                <h3>{title}</h3>
                <p><i className="far fa-clock"></i> {startDate} - {endDate}</p>
                <p><i className="fas fa-compass"></i> {location}</p>
            </div>
            
        </Link>
    )
}

export default Event
