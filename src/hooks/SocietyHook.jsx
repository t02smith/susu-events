import { useState } from 'react'

import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite"

import db from '../firebase'

function SocietyHook() {

    const [cachedSocs, setCachedSocs] = useState([])

    const isCached = (soc) => {
        for (let s in cachedSocs) {
            if (cachedSocs[s].id === soc) return cachedSocs[s];
        }
    }

    const getSociety = async (id) => {
        const cache = isCached(id);
        if (cache) {
            console.log("boom")
            return cache;
        }

        const socRef = doc(db, "societies", `${id}`);
        const socSnap = await getDoc(socRef);

        if (socSnap.exists()) {
            const res = socSnap.data();
            setCachedSocs([...cachedSocs, {...res, id: id}])

            return res;
        }
    }

    const getSocEvents = async (id) => {

        const eventCol = collection(db, "events");
        const eventQ = query(eventCol, where("society", "==", id));
        const eventQSnap = await getDocs(eventQ);
        const reqs = eventQSnap.docs.map(doc => doc.data());


        return reqs
    }


    return {
        getSociety,
        getSocEvents
    }
}

export default SocietyHook
