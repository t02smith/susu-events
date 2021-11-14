
import { collection, addDoc } from 'firebase/firestore/lite';

import db from '../firebase';

function EventHook() {

    const createEvent = async (name, img, location, society, startDate, endDate) => {
        
        const eventObj = {
            name: name,
            location: location,
            startDate: startDate,
            endDate: endDate,
            society: society,
            img: img
        }

        const eventRef = collection(db, "events");
        await addDoc(eventRef, eventObj);
    }


    return {
        createEvent
    }
}

export default EventHook
