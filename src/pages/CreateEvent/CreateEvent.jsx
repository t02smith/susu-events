import React, {useState} from 'react'

import "../../style/css/pages/CreateEvent.css"

const societies = require("../../data/societies.js").default;

function CreateEvent() {

    const [avSocs, setAvSocs] = useState(["a", "b"]);

    const [soc, setSoc] = useState();
    const [evName, setEvName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="create-event" onSubmit={handleSubmit}>
            <h1>Create your next Event</h1>
            <div>
                <div>
                    <p>Choose your society</p>
                    <select name="" id="">
                        {avSocs && avSocs.map((s,i) => <option value={s} onChange={e => setSoc(e.target.value)}>{societies[s].name}</option>)}
                    </select>
                </div>

                <input type="text" value={evName} onChange={e => setEvName(e.target.value)} placeholder="EVENT NAME"/>

            </div>
            
            


        </form>
    )
}

export default CreateEvent
