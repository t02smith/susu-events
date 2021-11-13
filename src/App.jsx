import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'



import "./style/css/App.css";

import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import GoogleMapHook from './hooks/GoogleMapHook';
import Tracker from './pages/Tracker/Tracker';
import Navbar from './components/Navbar';
import UserHook from './hooks/UserHook';
import EventHook from './hooks/EventHook';

function App() {
    const gmHook = GoogleMapHook();
    const userHook = UserHook();
    const eventHook = EventHook();
  
    return (
        <div className="app">
            
            {
                userHook.loggedIn ?
                <Router>
                    <Navbar />
                    <Route exact path="/events" component={Events}/>  
                    <Route exact path="/tracker">
                        <Tracker isLoaded={gmHook.isLoaded} address={gmHook.address} lngLat={gmHook.addrLngLat}/>
                    </Route>
                </Router>
                :
                <Home login={userHook.login}/>
            }

        </div>
    )
}

export default App
