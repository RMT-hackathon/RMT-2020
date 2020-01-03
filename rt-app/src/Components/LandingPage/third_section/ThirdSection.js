import React from "react";
import baseball from '../../../img/baseball.svg';

const Third = () => {
    return (
        <div className={'third'}>
            <div className={'textBox'}>
                <h2>Any Form</h2>
                <h1>Unlimited customizations</h1>
                <button>Explore</button>
            </div>
            <div className={'baseball'}>
                <img src={baseball}/>
            </div>
        </div>
    )
};

export default Third;