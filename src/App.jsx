import React from 'react'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

import { useAuth0 } from '@auth0/auth0-react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import "./style/css/App.css"

function App() {
    const { user } = useAuth0();

    return (
        <div className="app">
            { user ?
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Profile />} />
                        
                    </Routes>
                </Router>
            : 
                <Login />                
            }
        </div>
    )
}

export default App
