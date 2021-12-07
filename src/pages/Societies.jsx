import React from 'react'
import SocietyCard from '../components/SocietyCard'
import Page from './Page'

import "../style/css/pages/Societies.css"
import { Link } from 'react-router-dom'

const socs = require("../data/societies").default

function Societies() {
    return (
        <Page title="My Societies" className="societies">
            <Link to="/societies/create" className="create-soc">Create a Society</Link>
            {
                socs &&
                socs.map((soc, i) => <SocietyCard
                    id={soc.id}
                    key={i}
                    name={soc.name}
                    logo={soc.logo}
                    desc={soc.desc}
                />)
            }
        </Page>
    )
}

export default Societies
