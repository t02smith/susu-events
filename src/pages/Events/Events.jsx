import React from 'react'
import {Link} from "react-router-dom"

import Event from "./components/Event"

import "../../style/css/pages/Events.css"

const events = require("../../data/events").default

function Events() {

    return (
        <div className="events">
            <h1>Your Events</h1>
            <Link to="/create-event"><b>[</b> Create Event <b>]</b></Link>
            
            <div>
                {
                    events &&
                    events.map((ev,i) => <Event title={ev.title} img={ev.img} startDate={ev.startDate} endDate={ev.endDate} location={ev.location} key={i} id={i}/>)
                }

            </div>

            
        </div>
    )
}

export default Events
