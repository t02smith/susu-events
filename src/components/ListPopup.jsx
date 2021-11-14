import React from 'react'

import "../style/css/components/ListPopup.css"

import Overlay from './Overlay'

function ListPopup({ data, select, open, close }) {

    return (
        <>
            <Overlay open={open} close={close}/>
            <ul className={`list-popup ${open && "list-popup-open"}`}>
                {
                    data &&
                    data.map((item, i) => <li onClick={() => {select(item);close();}} key={i}>{item}</li>)
                }
            </ul>
        </>
        
    )
}

export default ListPopup
