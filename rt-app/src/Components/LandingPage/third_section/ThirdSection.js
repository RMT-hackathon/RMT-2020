import React from "react";
import baseball from '../../../img/baseball.svg';

const Third = () => {
    return (
        <div className={'third'}>
            <div className={'textBox'}>
                <h1>What do you get?</h1>
                <ul>
                    <li>
                    Register My Team provides a platform that improves the registration process and allows coaches to easily build a rosters and schedules.
                    </li>
                    
                    <li>
                    Register My Team’s platform simplifies how Recreational Leagues operate. Register My Team saves time and money by automating the athlete registration process, which allows administrators and coaches to focus on building successful athletic programs.
                    </li>
                    
                    <li>
                    Our team wants your team to succeed. We are dedicated to improving league sports by taking care of the paperwork and other “not-so-fun stuff” so you can focus on your team and league.
                    </li>
                  
                    <li>
                    Register My Team is built with the future in mind. Our multi-phase development will allow our software to be your league’s source for all athletic solutions.
                    </li>
                </ul>
                <button>Sign Up</button>
            </div>
            <div className={'baseball'}>
                <img src={baseball}/>
            </div>
        </div>
    )
};

export default Third;