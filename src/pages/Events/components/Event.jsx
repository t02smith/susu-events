import React from 'react'

import "../../../style/css/components/Event.css"

function Event({ title, startTime, endTime, location, open}) {
    return (
        <div className="event">
            <img alt="logo" src="https://www.susu.org/images/calendar/ecss-presents---communityhackpng" />
            <div>
                <h3>{title}</h3>
                <p><i className="far fa-clock"></i> {startTime} - {endTime}</p>
                <p><i className="fas fa-compass"></i> {location}</p>
            </div>
            
        </div>
    )
}

export default Event
