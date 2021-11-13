import React, {useState} from 'react'

import Event from "./components/Event"

import "../../style/css/pages/Events.css"

function Events() {
    const [openPage, setOpenPage] = useState(false)

    return (
        <div className="events">
            <h1>Your Events</h1>
            <div>
                <Event onClick = {() => setOpenPage(true)} title="Hackathon" startTime="now" endTime="in 24 hours" location="Zepler"/>
            </div>
            
        </div>
    )
}

export default Events
