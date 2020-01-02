import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    
    useEffect(() => {

    })
    const [loggedIn, setLoggedIn] = useState(true);
    const logout = () => {
        setLoggedIn(false)
    }
    const signup = () => {

    }
    const login = () => {
        setLoggedIn(true)
    }
    const links = [
        {
            name: "About",
            path: "/about"
        },
        {
            name: "FAQ",
            path: "/faq "
        }
    ]
    // console.log("props ", props);

    return (
        <nav>
            <div className="logo">
                <img />
            </div>
            {links.map(l => {
            return <Link key={l.name} to={l.path}>{l.name}</Link>
            })}
            {
                loggedIn ? (
                    <div className="btn" onClick={logout}>Logout</div> 
                )
                : (
                    <>
                        <div className="btn" onClick={signup}>Sign Up</div>
                        <div className="btn" onClick={login}>Log In</div>
                    </>
                )
            }
        </nav>
    );
};

export default Nav;