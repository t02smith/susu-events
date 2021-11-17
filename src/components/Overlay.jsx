import React from 'react'

import "../style/css/components/Overlay.css"

function Overlay({open, close}) {

    return (
        <div 
            onClick={close} 
            className={`overlay ${open && "overlay-open"}`}
        >
            
        </div>

    )
}

export default Overlay
