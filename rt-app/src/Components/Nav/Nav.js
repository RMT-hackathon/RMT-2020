import React, { useState, useEffect } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-strap';
import { Link } from 'react-router-dom';

import footer_logo from '../../img/footer_logo.svg'

const Nav = props => {
    
    const [lFormState, setLFormState] = useState({
        email: "",
        password: ""
    })

    const [sFormState, setSFormState] = useState({
        email: "",
        password: "",
        cPassword: "",
        firstName: "",
        

    })

    const [loggedIn, setLoggedIn] = useState(true);
    const [lModal, setLModal] = useState(false);

    const logout = () => {
        setLoggedIn(false)
    }
    const signup = () => {

    }
    const login = () => {
        // setLoggedIn(true)
        setLModal(true)
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
            <div className="profile-img"></div>
            <div className="left">
                <Link to="/">
                    <img alt="RMT Logo" src={footer_logo} className="logo" />
                </Link>
            </div>
            <div className="right">
                {links.map(l => {
                    return <Link key={l.name} to={l.path} className="link">{l.name}</Link>
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
            </div>
            {/* <Modal isOpen={modal} toggle={login} className="login">
                <ModalHeader toggle={toggle}>Sign In</ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal> */}
            {
                lModal && (
                    <div className="modal">
                        <h3>Sign In</h3>
                        <form>
                            <input type="email" />
                            <input type="password" />
                        <button></button>
                        </form>
                    </div>
                )
            }
        </nav>
    );
};

export default Nav;