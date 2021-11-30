import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Page from './Page'

import "../style/css/pages/Event.css"

function Event({ getEvent }) {
    const { eventId } = useParams();

    const [event, setEvent] = useState(null);

    useEffect(() => {
        setEvent(getEvent(parseInt(eventId)));

        // eslint-disable-next-line
    }, [])

    return (
        <Page className="event" title={event && " " + event.title}>
           {
               event &&
               <>
                    <h2>{event.description}</h2>
                    <div>
                        <p><i className="fas fa-map-marker-alt"></i>{event.location}</p>
                        <p><i className="far fa-clock"></i>{event.date}</p>
                    </div>
                    
               </>
           } 
        </Page>
    )
}

export default Event
