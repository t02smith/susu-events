import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

import Event from "./components/Event"

import "../../style/css/pages/Events.css"

function Events({ avSocs, adminOf, getSocEvents }) {

    const [events, setEvents] = useState();

    const getEvents = async () => {
        let arr = [];
        for (let i in avSocs) {
            const ev = await getSocEvents(avSocs[i])
            
            arr = arr.concat(ev);
        }

        setEvents(arr)
    }

    useEffect(() => {
        getEvents();

        // eslint-disable-next-line
    }, [])

    return (
        <div className="events">
            
            {adminOf.length > 0 &&
                <>
                    <h1>Your Events</h1>
                    <Link to="/susu-events/create-event"><b>[</b> Create Event <b>]</b></Link>
                </>
            }
            
            <div className="event-list">
                {
                    events &&
                    events.map((ev,i) => <Event title={ev.name} img={ev.img} startDate={ev.startDate} endDate={ev.endDate} location={ev.location} key={i} id={i}/>)
                }

            </div>
        </div>
    )
}

export default Events
