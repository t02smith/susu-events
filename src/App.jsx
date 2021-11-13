import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import "./style/css/App.css";

import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import GoogleMapHook from './hooks/GoogleMapHook';
import Tracker from './pages/Tracker/Tracker';
import Navbar from './components/Navbar';
import EventPage from "./pages/EventPage/EventPage"
import CreateEvent from './pages/CreateEvent/CreateEvent';
import Profile from "./pages/Profile/Profile";
import Society from "./pages/Society/Society";

function App() {
    const gmHook = GoogleMapHook();
    // const userHook = UserHook();
    // const eventHook = EventHook();
  
    return (
        <div className="app">
        
                <Router>
                    <Navbar />

                        <Route exact path="/events" component={Events}/>  
                        <Route exact path="/tracker">
                            <Tracker isLoaded={gmHook.isLoaded} address={gmHook.address} lngLat={gmHook.addrLngLat}/>
                        </Route>
                        <Route exact path="/events/:id" component={EventPage} />
                        <Route exact path="/tracker/:location" component={Tracker} />
                        <Route exact path="/login" component={Home} />
                        <Route exact path="/create-event" component={CreateEvent}/>
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/societies/:id" component={Society}/>
                </Router>


        </div>
    )
}

export default App
