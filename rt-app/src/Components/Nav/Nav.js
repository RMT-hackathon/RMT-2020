import React, { useState, useEffect } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-strap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import footer_logo from '../../img/footer_logo.svg'

const Nav = props => {
    
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

    const [formState, setFormState] = useState({
        login: {
            email: "",
            password: ""
        },
        signup: {
            email: "",
            password: "",
            cPassword: "",
            firstName: "",
            lastName: "",
            phone: "",
            userType: ""
        }
    })

    const [loggedIn, setLoggedIn] = useState(false);
    const [lModal, setLModal] = useState(false);
    const [sModal, setSModal] = useState(false);

    const logout = () => {
        setLoggedIn(false)
    }
    const displaySignup = () => {
        setLModal(false)
        setSModal(true)
    }
    const signup = () => {
        if (formState.signup.password === formState.signup.cPassword.cPassword) {

            // axios.post(`url`, formState.signup)
            setFormState({
                login: {
                    email: "",
                    password: ""
                },
                signup: {
                    email: "",
                    password: "",
                    cPassword: "",
                    firstName: "",
                    lastName: "",
                    phone: "",
                    userType: ""
                }
            })
        } else {
            return (<><p>Passwords do not match</p></>)
        }
    }
    const displayLogin = () => {
        setSModal(false)
        setLModal(true)
    }
    const login = () => {
        // setLoggedIn(true)
        // axios.post(`url`, formState.login)
        setFormState({
            login: {
                email: "",
                password: ""
            },
            signup: {
                email: "",
                password: "",
                cPassword: "",
                firstName: "",
                lastName: "",
                phone: "",
                userType: ""
            }
        })
    }

    const handleChanges = (e, fn) => {
        e.preventDefault()
        setFormState({
            // ...formState,
            // [e.target.name]: e.target.value
            login: {
                ...formState,
                [e.target.name]: e.target.value
            },
            signup: {
                ...formState,
                [e.target.name]: e.target.value
            }
        })
    }

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
                            <div className="btn" onClick={displaySignup}>Sign Up</div>
                            <div className="btn" onClick={displayLogin}>Log In</div>
                        </>
                    )
                }
            </div>
            {
                lModal && (
                    <div className="modal l-modal">
                        <div className="close close-login" onClick={() => setLModal(false)}>X</div>
                        <h3>Sign In</h3>
                        <form onSubmit={login}>
                            <label>Email<input 
                                type="email" 
                                name="email" 
                                value={formState.login.email} 
                                placeholder="email" 
                                onChange={handleChanges} 
                                required
                            /></label>
                            <label>Password<input 
                                type="password" 
                                name="password" 
                                value={formState.login.password} 
                                placeholder="password" 
                                onChange={handleChanges} 
                                required
                            /></label>
                        <button>Sign In</button>
                        </form>
                        <p onClick={() => {
                            setLModal(false)
                            setSModal(true)
                        }}>Not a member?</p>
                    </div>
                )
            }
            {
                sModal && (
                    <div className="modal s-modal">
                        <div className="close close-signup" onClick={() => setSModal(false)}>X</div>
                        <h4>Sign Up</h4>
                        <span>Fields with <sub>*</sub> are required</span>
                        <p onClick={() => {
                            setSModal(false)
                            setLModal(true)
                        }}>Already Have an account?</p>
                        <form onSubmit={signup}>
                            <label>Email<sub>*</sub><input 
                                type="email" 
                                name="email" 
                                value={formState.signup.email} 
                                placeholder="email" 
                                onChange={handleChanges} 
                                required
                            /></label>
                            <label>Password<sub>*</sub> (minimum 8 characters)<input 
                                type="password" 
                                name="password" 
                                value={formState.signup.password} 
                                placeholder="password" 
                                onChange={handleChanges} 
                                minLength="8"
                                required
                            /></label>
                            <label>Confirm Password<input 
                                type="password"
                                name="cPassword"
                                value={formState.signup.cPassword}
                                placeholder="confirm password"
                                onChange={handleChanges}
                                required
                            /></label>
                            <label>First Name<sub>*</sub><input 
                                type="text"
                                name="firstName"
                                value={formState.signup.firstName}
                                placeholder="first name"
                                onChange={handleChanges}
                                required
                            /></label>
                            <label>Last Name<sub>*</sub><input 
                                type="text"
                                name="lastName"
                                value={formState.signup.lastName}
                                placeholder="last name"
                                onChange={handleChanges}
                                required
                            /></label>
                            <label>Phone Number (xxx-xxx-xxxx)<input 
                                type="tel"
                                name="phone"
                                value={formState.signup.phone}
                                placeholder="phone"
                                onChange={handleChanges}
                                maxLength="12"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            /></label>
                            <label>User Type<sub>*</sub><select name="userType" required>
                                <option value="Athlete">Athlete</option>
                                <option value="Parent">Parent</option>
                                <option value="Administrator">Administrator</option>
                            </select></label>
                            <button>Sign Up</button>
                        </form>
                    </div>
                )
            }
        </nav>
    );
};

export default Nav;