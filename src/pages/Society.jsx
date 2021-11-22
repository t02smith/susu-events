import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Page from "./Page"

import "../style/css/pages/Society.css";

function Society({ getSociety }) {
    const { socId } = useParams();

    const [soc, setSoc] = useState(null);

    useEffect(() => {
        setSoc(getSociety(parseInt(socId)));

        // eslint-disable-next-line
    }, [])

    return (
        <Page className="society" title={soc && soc.name}>
             {
                soc &&
                <>
                    <img src={soc.logo} alt="" />
                </>
            }   
        </Page>
    )
}

export default Society
