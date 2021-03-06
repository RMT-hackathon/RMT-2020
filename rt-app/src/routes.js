import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About';
import Profile from './Components/Profile/Profile';
import faq from './Components/FAQ/faq';
import { useSession } from './hooks/useAuth';


export const Routes = () => {
    
    const { isLoading, auth} = useSession()
    console.log("routes auth", auth);
    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <BrowserRouter>
            <Nav />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/faq" component={faq} />
            <Footer />
        </BrowserRouter>
    )
}