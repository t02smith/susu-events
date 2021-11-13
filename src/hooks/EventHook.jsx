import React, { useEffect, useState } from 'react'

import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore/lite';

import db from '../firebase';

function EventHook() {

    const [events, setEvents] = useState([]);
    const [societies, setSocieties] = useState(["XNvNxcM6zGKkh9M2IXlT"])

    const getUserEvents = async () => {  

        console.log(societies)
        for (let soc in societies) {
            const socCol = collection(db, "events")
            const socQ = query(socCol, where("society", "==", societies[soc]))
            const socSnap = await getDocs(socQ);
            const reqs = socSnap.docs.map(doc => doc.data());

        }

        // societies.forEach(async (soc) => {
        //     console.log(soc)
        //     const socCol = collection(db, "events")
        //     const socQ = query(socCol, where("society", "==", soc))
        //     const socSnap = await getDocs(socQ);
        //     const reqs = socSnap.docs.map(doc => doc.data());

            
        // })

    }

    useEffect(() => {
        getUserEvents();

        // eslint-disable-next-line
    }, [societies])


    return {
        events,
        setSocieties
    }
}

export default EventHook
