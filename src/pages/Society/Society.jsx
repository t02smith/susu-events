import React from 'react'

import "../../style/css/pages/Society.css"
import Event from "../Events/components/Event"

const societies = require("../../data/societies").default;
const events = require("../../data/events").default;

function Society({match}) {
    const soc = societies[match.params.id];
    const socEvents = events.filter(ev => ev.soc === match.params.id);

    return (
        <div className="society">
            <div>
                <img src={soc.logo} alt="" />
            </div>
            
            <h1>{soc.name}</h1>
            <div className="socials">
                <a href={soc.socials.facebook}><i class="fab fa-facebook"></i></a>
                <a href={soc.socials.twitter}><i class="fab fa-twitter"></i></a>
                <a href={soc.socials.webpage}><i class="fas fa-laptop"></i></a>
            </div>

            <h2>Upcoming Events</h2>
            <div className="social-events">
                {
                    socEvents &&
                    socEvents.map((ev,i) => <Event title={ev.title} img={ev.img} startDate={ev.startDate} endDate={ev.endDate} location={ev.location} key={i} id={i}/>)
                }

            </div>
            
        </div>
    )
}

export default Society
