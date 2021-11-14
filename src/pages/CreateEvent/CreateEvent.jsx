import React, {useEffect, useState} from 'react'

import "../../style/css/pages/CreateEvent.css"
import Calendar from 'react-calendar'
import Overlay from "../../components/Overlay"
import ListPopup from '../../components/ListPopup'
import LoginField from '../Home/components/LoginField'

import 'react-calendar/dist/Calendar.css';

const societies = require("../../data/societies.js").default;

function CreateEvent() {

    const [avSocs, setAvSocs] = useState(["a", "b"]);
    const [soc, setSoc] = useState();
    const [socListOpen, setSocListOpen] = useState(false);

    const [evName, setEvName] = useState("");
    const [location, setLocation] = useState("");

    const [value, onChange] = useState(new Date());
    const [calendarOpen, setCalendarOpen] = useState(false)

    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [changingStart, setChangingStart] = useState(true);

    const getSoc = (socName) => {
        for (let s in avSocs) {
            if (societies[avSocs[s]].name === socName) return societies[avSocs[s]]
        }
    }

    useEffect(() => {
        console.log(soc)
    }, [soc])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        if (changingStart) setStart(value);
        else setEnd(value);

        // eslint-disable-next-line
    }, [value])

    return (
        <>
            <Overlay open={calendarOpen} close={() => setCalendarOpen(false)}/>
            <ListPopup data={avSocs.map(s => societies[s].name)} select={(s) => setSoc(getSoc(s))} open={socListOpen} close={() => setSocListOpen(false)}/>
            <form className="create-event" onSubmit={handleSubmit}>
                <h1>Your event</h1>
                <div>
                    <div onClick={() => setSocListOpen(true)} className="soc-select">
                    {
                        soc ?
                        <div className="soc-logo" >
                            <img src={soc.logo} alt="" />
                        </div> :
                        <p>Select Society</p>
                    }
                    </div>
                    
                    <div>
                        <LoginField type="text" value={evName} onChange={e => setEvName(e.target.value)} placeholder="EVENT NAME" icon="fas fa-signature"/>
                        <LoginField type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="LOCATION" icon="fas fa-map-marker-alt"/>
               
                        <div className="calendars">
                            <div>
                                <div className="open-calendar" onClick={() => {setCalendarOpen(true);setChangingStart(true);}}><i class="far fa-calendar"></i></div>
                                <p>START</p>
                            </div>
                            <div>
                                <div className="open-calendar" onClick={() => {setCalendarOpen(true);setChangingStart(false);}}><i class="far fa-calendar-times"></i></div>
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
