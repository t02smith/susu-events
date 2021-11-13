import React from 'react'

import "../../style/css/pages/Society.css"

const societies = require("../../data/societies").default;

function Society({match}) {
    const soc = societies[match.params.id];

    return (
        <div className="society">
            <img src={soc.logo} alt="" />
            <h1>{soc.name}</h1>
        </div>
    )
}

export default Society
