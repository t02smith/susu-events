import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

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
import UserHook from './hooks/UserHook';
import SocietyHook from './hooks/SocietyHook';
import EventHook from './hooks/EventHook';
import Footer from './components/Footer';

function App() {
    const gmHook = GoogleMapHook();
    const userHook = UserHook();
    const eventHook = EventHook();

    const socHook = SocietyHook();

    return (
        <div className="app-container">
            <div className="app">         
                {
                    userHook.loggedIn ?
                    <Router>
                        <Navbar logout={userHook.logout}/>

                        <Route exact path="/susu-events/events">
                            <Events avSocs={userHook.user.societies} adminOf={userHook.user.adminOf} getSocEvents={socHook.getSocEvents}/>
                        </Route>  
                        <Route exact path="/susu-events/tracker">
                            <Tracker isLoaded={gmHook.isLoaded} address={gmHook.address} lngLat={gmHook.addrLngLat}/>
                        </Route>
                        <Route exact path="/susu-events/events/:id" component={EventPage} />
                        <Route exact path="/susu-events/tracker/:location" component={Tracker} />
                        
                        <Route exact path="/susu-events/create-event">
                            <CreateEvent createEvent={eventHook.createEvent} avSocs={userHook.user.adminOf} getSociety={socHook.getSociety}/>
                        </Route>
                        <Route exact path="/susu-events/">
                            <Profile name={userHook.user.username} societies={userHook.user.societies} getSociety={socHook.getSociety}/>
                        </Route>
                        <Route exact path="/susu-events/societies/:id" component={Society}>
                            <Society getSociety={socHook.getSociety} getSocEvents={socHook.getSocEvents} />
                        </Route>
                    </Router>
                    :
                    <Home login={userHook.login}/>
                }
            </div>
            <Footer />
        </div>
       
    )
}

export default App
