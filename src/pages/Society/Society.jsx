import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import "../../style/css/pages/Society.css"
import Event from "../Events/components/Event"


function Society({ getSociety, getSocEvents}) {
    const { id } = useParams()

    const [soc, setSoc] = useState(null);
    const [socEvents, setSocEvents] = useState(null);

    useEffect(() => {
        getSociety(id).then(data => setSoc(data))
        getSocEvents(id).then(data => {
            console.log(data)
            setSocEvents(data)
        
        })

        // eslint-disable-next-line
    }, [])


    return (
        <div className="society">
            {
                soc &&
                <>
                    <div>
                        <img src={soc.icon} alt="" />
                    </div>
                    
                    <h1>{soc.name}</h1>
                    <div className="socials">
                        {soc.socials.facebook && <a href={soc.socials.facebook}><i class="fab fa-facebook"></i></a>}
                        {soc.socials.twitter && <a href={soc.socials.twitter}><i class="fab fa-twitter"></i></a>}
                        {soc.socials.susu && <a href={soc.socials.susu}><i class="fas fa-laptop"></i></a>}
                    </div>

                    <h2>Upcoming Events</h2>
                    <div className="social-events">
                        {
                            socEvents &&
                            socEvents.map((ev,i) => <Event title={ev.title} img={ev.img} startDate={ev.startDate} endDate={ev.endDate} location={ev.location} key={i} id={i}/>)
                        }

                    </div>
                </>
            }
            
            
        </div>
    )
}

export default Society
