import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Page from "./Page"

import "../style/css/pages/Society.css";
import Feed from '../components/Feed';

function Society({ getSociety }) {
    const { socId } = useParams();

    const [soc, setSoc] = useState(null);

    useEffect(() => {
        setSoc(getSociety(parseInt(socId)));

        // eslint-disable-next-line
    }, [socId])

    const filter = ev => ev.society === parseInt(socId);

    return (
        <Page className="society" title={soc && " " + soc.name}>
            {
                soc ?
                <>
                    <img src={soc.logo} alt="" />
                    <div className="socials">
                        {soc.socials.facebook && <a href={soc.socials.facebook}><i className="fab fa-facebook"></i></a>}
                        {soc.socials.twitter && <a href={soc.socials.twitter}><i className="fab fa-twitter"></i></a>}
                        {soc.socials.susu && <a href={soc.socials.susu}><i className="fas fa-laptop"></i></a>}
                    </div>
                    <p className="description">{soc.desc}</p>
                    <div className="event-list">
                        <p>Our events:</p>
                        <Feed filter={filter} />
                    </div>

                </> :
                <h1>Page not found :(</h1>
            }

  
        </Page>
    )
}

export default Society
