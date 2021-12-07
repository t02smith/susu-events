import React, { useEffect, useState } from 'react'

import Page from './Page'

import "../style/css/pages/CreateSociety.css"
import TextField from '../components/TextField'

function CreateSociety() {
    const [name,setName] = useState("");

    const [logo,setLogo] = useState();
    const [logoURL,setLogoURL] = useState();

    useEffect(() => {
        console.log(logo)
        if (!logo) return;
        const logoUrl = URL.createObjectURL(logo[0])
        setLogoURL(logoUrl);
    }, [logo])

    return (
        <Page title="Create " className="create-society">
            <form action="">
                <div className="new-soc-logo">
                    <p>Select a logo</p>
                    {logoURL && <img src={logoURL} alt=""/>}
                </div>
                <input type="file" accept="image/*" onChange={e => setLogo(e.target.files)} />
                <TextField value={name} onChange={e => setName(e.target.value)} placeholder="Enter your societies name" icon="fas fa-chess-king"/>

            </form>
        </Page>
    )
}

export default CreateSociety
