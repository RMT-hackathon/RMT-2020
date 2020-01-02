import React from 'react';
import { BrowswerRouter, Route } from 'react-router-dom';
// import footer
// import nav
// import LandingPage
// import Profile


export const Routes = () => {
    return (
        <BrowswerRouter>
            <Route path="/" component={LandingPage} />
            <Route exact path="/profile" component={Profile} />
        </BrowswerRouter>
    )
}