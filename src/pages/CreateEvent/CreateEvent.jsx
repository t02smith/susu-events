import React, {useEffect, useState} from 'react'

import "../../style/css/pages/CreateEvent.css"
import Calendar from 'react-calendar'
import Overlay from "../../components/Overlay"

import 'react-calendar/dist/Calendar.css';

const societies = require("../../data/societies.js").default;

function CreateEvent() {

    const [avSocs, setAvSocs] = useState(["a", "b"]);

    const [soc, setSoc] = useState();
    const [evName, setEvName] = useState("");
    const [value, onChange] = useState(new Date());

    const [calendarOpen, setCalendarOpen] = useState(false)

    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [changingStart, setChangingStart] = useState(true);

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
            <form className="create-event" onSubmit={handleSubmit}>
                <h1>your next event</h1>
                <div>
                    

                    <input type="text" value={evName} onChange={e => setEvName(e.target.value)} placeholder="EVENT NAME"/>
                    
                    <p className="open-calendar" onClick={() => {setCalendarOpen(true);setChangingStart(true);}}>Choose a start date</p>
                    <p className="open-calendar" onClick={() => {setCalendarOpen(true);setChangingStart(false);}}>Choose an end date</p>


                    <Calendar
                        onChange={onChange}
                        value={changingStart ? start: end}
                        maxDate={new Date(2022,2,1)}
                        minDate={new Date(2021,10,13)}
                        className={`${calendarOpen && "calendar-open"}`}
                        
                    />
                </div>
                
                


            </form>
        </>
        
    )
}

export default CreateEvent
