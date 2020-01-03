import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { useSession } from '../../hooks/useAuth';

import Left from './Left/Left';
import Tabs from './Tabs/Tabs';
import Overview from './Overview/Overview';
import Details from './Details/Details';

const Profile = () => {
    const { profile } = useSession()

    // const [userType, setUserType] = useState("")
    
    // dev test
    const [userType, setUserType] = useState("Athlete")


    useEffect(() => {
        if (profile) {
            // setUserType(profile.userType)
        }
    }, [profile])

    console.log("userType", userType);

    return (
        <div className="profile">
            <Left type={userType} />
            <div className="right">
                <Tabs type={userType} />
                <Overview type={userType} />
                <Details type={userType} />
            </div>
        </div>
    );
};

export default Profile;