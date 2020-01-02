import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About';
import Profile from './Components/Profile/Profile';


export const Routes = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Route path="/" component={LandingPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/profile" component={Profile} />
            <Footer />
        </BrowserRouter>
    )
}