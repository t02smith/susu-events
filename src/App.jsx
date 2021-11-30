import React from 'react'
import Login from './pages/Login'

import { useAuth0 } from '@auth0/auth0-react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import "./style/css/App.css"

import Societies from './pages/Societies'
import Society from './pages/Society'
import MyFeed from './pages/MyFeed'
import Event from "./pages/Event"

const societies = require("./data/societies").default
const events = require("./data/events").default

function App() {
    const { user } = useAuth0();

    const getSociety = (socId) => {
        return societies.find(soc => soc.id === socId)
    }

    const getEvent = (eventId) => {
        return events.find(ev => ev.eventId === eventId);
    }

    return (
        <div className="app">
            { user ?
                <Router>
                    <Routes>
                        <Route path="/" element={<MyFeed />} />
                        <Route path="/events" />
                        <Route path="/events/:eventId" element={<Event getEvent={getEvent}/>}/>

                        <Route path="/societies" element={<Societies />}/>
                        <Route path="/societies/:socId" element={<Society getSociety={getSociety}/>} />
                    </Routes>
                </Router>
            : 
                <Login />                
            }
        </div>
    )
}

export default App
