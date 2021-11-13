import React, { useState, useEffect } from 'react'

import {Link} from "react-router-dom"

import "../../style/css/pages/EventPage.css"

const events = require("../../data/events").default

function EventPage({match}) {
    const e = events[match.params.id]

    return (
        <div className='event-info'>
            <div>
                <img alt="logo" src={e.img} />  
            </div>
            
            <div>
                <h1>{e.title}</h1>
                
                <div className="date">
                <i className="fas fa-calendar-day"></i>
                    <div>
                        <h3><strong>{e.startDate}</strong></h3>
                        <h3><strong>{e.endDate}</strong></h3>
                    </div>
                </div>

                <Link className="location" to={`/tracker/${e.location}`}><i className="fas fa-compass"></i> {e.location}</Link>
                    
                <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec ac odio. Tellus mauris a diam maecenas sed enim ut sem. Nec ultrices dui sapien eget mi proin sed. Dictum sit amet justo donec. Adipiscing elit pellentesque habitant morbi tristique. Feugiat sed lectus vestibulum mattis ullamcorper. Eget nunc scelerisque viverra mauris in. Pellentesque elit eget gravida cum sociis natoque penatibus. Gravida dictum fusce ut placerat orci nulla pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Est ante in nibh mauris cursus mattis. Cras sed felis eget velit aliquet. Sed vulputate mi sit amet. Facilisis magna etiam tempor orci eu lobortis elementum. Cursus risus at ultrices mi tempus imperdiet nulla. Egestas integer eget aliquet nibh. Sollicitudin nibh sit amet commodo.
                </div>
            </div>

        </div>
    )
}

export default EventPage
