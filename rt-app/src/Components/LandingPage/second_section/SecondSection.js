import React from "react";
import layouts from '../../../img/icons/layouts.svg'
import awards from '../../../img/icons/awards.svg'
import coffee from '../../../img/icons/coffee.svg'
import projects from '../../../img/icons/projects.svg'

const Second = () => {
    return (
        <div className={'sec'}>
            <div className={'textbox'}>
                <h1> Best Customer Experience</h1>
                <p>We handle the paperwork and “not-so-fun stuff” so you can focus on building successful athletes, teams and leagues. That means, we have found a way to simplify your exhausting paperwork tasks, by streamlining it into a much more time and cost efficient method.</p>
                <button>Sign Up</button>
            </div>
            <div className={'boxItems'}>
                <div className={'box'} id={'layouts'}>
                    <img src={layouts}/>
                    <h2>Flexibility</h2>
                    <p>Register My Team can also be used with Youth and Church Leagues, Gyms, Rec Centers, Personal Trainers, etc! </p>
                </div>
                <div className={'box'} id={'awards'}>
                    <img src={awards}/>
                    <h2>Modularity</h2>
                    <p>Our software will continue to expand and grow with you, while not holding you back.</p>
                </div>
                <div className={'box'} id={'coffee'}>
                    <img src={coffee}/>
                    <h2>Cloud Forms</h2>
                    <p>All of your paperwork is now stored securely in the cloud.</p>
                </div>
                <div className={'box'} id={'projects'}>
                    <img src={projects}/>
                    <h2>E-Signature</h2>
                    <p>The ability to securely electronically sign documents will put your mind at ease, and save you from hand cramps.</p>
                </div>
            </div>
        </div>
    )
};

export default Second;