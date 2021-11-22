import React from 'react'
import Login from './pages/Login'

import { useAuth0 } from '@auth0/auth0-react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import "./style/css/App.css"
import Feed from './pages/Feed'
import Societies from './pages/Societies'
import Society from './pages/Society'

const societies = require("./data/societies").default

function App() {
    const { user } = useAuth0();

    const getSociety = (socId) => {
        return societies.find(soc => soc.id === socId)
    }

    return (
        <div className="app">
            { user ?
                <Router>
                    <Routes>
                        <Route path="/" element={<Feed />} />
                        <Route path="/events" />
                        <Route path="/events/:eventId" />

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
