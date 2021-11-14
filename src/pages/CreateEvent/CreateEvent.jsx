import React, {useEffect, useState} from 'react'

import "../../style/css/pages/CreateEvent.css"
import Calendar from 'react-calendar'
import Overlay from "../../components/Overlay"
import ListPopup from '../../components/ListPopup'
import LoginField from '../Home/components/LoginField'

import 'react-calendar/dist/Calendar.css';


function CreateEvent({ createEvent, avSocs, getSociety }) {

    const [soc, setSoc] = useState();
    const [socNames, setSocNames] = useState();
    const [socListOpen, setSocListOpen] = useState(false);

    const [evName, setEvName] = useState("");
    const [location, setLocation] = useState("");

    const [value, onChange] = useState(new Date());
    const [calendarOpen, setCalendarOpen] = useState(false)

    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [changingStart, setChangingStart] = useState(true);

    const getSoc = async (socName) => {
        for (let i in avSocs) {
            const soc = await getSociety(avSocs[i]);
            if (soc.name === socName) return soc;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!soc || !evName || !location) return;

        await createEvent(evName, soc.icon ,location, soc.id ,start.toDateString(), end.toDateString())
    }

    const updateSoc = async (name) => {
        const soc = await getSoc(name);
        setSoc(soc);
    }

    const getSocNames = async () => {
        let arr = [];
        for (let soc in avSocs) {
            let s = await getSociety(avSocs[soc]);
            arr.push(s.name);
        }

        setSocNames(arr);
    }

    useEffect(() => {
        getSocNames()

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        console.log(soc)
    },[soc])

    useEffect(() => {
        if (changingStart) setStart(value);
        else setEnd(value);

        // eslint-disable-next-line
    }, [value])


    return (
        <>
            <Overlay open={calendarOpen} close={() => setCalendarOpen(false)}/>
            <ListPopup data={socNames} select={(s) => updateSoc(s)} open={socListOpen} close={() => setSocListOpen(false)}/>
            <form className="create-event" onSubmit={handleSubmit}>
                <h1>Your event</h1>
                <div>
                    <div onClick={() => setSocListOpen(true)} className="soc-select">
                    {
                        soc ?
                        <div className="soc-logo" >
                            <img src={soc.icon} alt="" />
                        </div> :
                        <p>Select Society</p>
                    }
                    </div>
                    
                    <div>
                        <LoginField type="text" value={evName} onChange={e => setEvName(e.target.value)} placeholder="EVENT NAME" icon="fas fa-signature"/>
                        <LoginField type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="LOCATION" icon="fas fa-map-marker-alt"/>
               
                        <div className="calendars">
                            <div>
                                <div className="open-calendar" onClick={() => {setCalendarOpen(true);setChangingStart(true);}}><i className="far fa-calendar"></i></div>
                                <p>START</p>
                            </div>
                            <div>
                                <div className="open-calendar" onClick={() => {setCalendarOpen(true);setChangingStart(false);}}><i className="far fa-calendar-times"></i></div>
                                <p>FINISH</p>
                            </div>
                        </div>


                        <Calendar
                            onChange={onChange}
                            value={changingStart ? start: end}
                            maxDate={new Date(2022,2,1)}
                            minDate={new Date(2021,10,13)}
                            className={`${calendarOpen && "calendar-open"}`}
                            
                        />
                    </div>


                    <button type="submit">Create!</button>
                    

                </div>
                
                


            </form>
        </>
        
    )
}

export default CreateEvent
