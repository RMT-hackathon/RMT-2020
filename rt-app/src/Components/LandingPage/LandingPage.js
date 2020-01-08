import React from 'react';
import Athlete from "./Athlete/Athlete";
import Coach from "./Coach/Coach";
import Therapist from "./Therapist/Therapist";
import Trainer from "./Trainer/Trainer";
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <div className={'armLogo'}>
                Logo Here
            </div>
            <div className={"classBoxes"}>
                <div className={"optionLeft"}>
                    <div className={"org"}>
                        <Link to={"/org"}>
                            <h1>Athletic Organization</h1>
                            <p>Blurb</p>
                        </Link>
                    </div>
                    <div className={"coach"}>
                        <Link to={"/coach"}>Coach</Link>
                    </div>
                </div>
                <div className={"optionRight"}>
                    <div className={"athlete"}>
                        <Link to={"/athlete"}>Athlete</Link>
                    </div>
                    <div className={"trainer"}>
                        <Link to={"/trainer"}>Personal Trainer</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;