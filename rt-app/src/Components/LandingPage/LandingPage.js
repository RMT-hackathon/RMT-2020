import React from 'react';
import Athlete from "./Athlete/Athlete";
import Second from "./Therapist/SecondSection";

const LandingPage = () => {
    return (
        <div>
            <div className={'armLogo'}>
                Logo Here
            </div>
            <div className={"classBoxes"}>
                <div className={"optionLeft"}>
                    <div className={"athlete"}>
                        Athlete
                    </div>
                    <div className={"coach"}>
                        Coach
                    </div>
                </div>
                <div className={"optionRight"}>
                    <div className={"trainer"}>
                        Trainer
                    </div>
                    <div className={"therapist"}>
                        Therapist
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;