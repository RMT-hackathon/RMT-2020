import React from "react";
import baseball from '../../../img/baseball.svg';

const Third = () => {
    return (
        <div className={'third'}>
            <div className={'textBox'}>
                <h1>Unlimited customizations</h1>
                <button>Explore</button>
            </div>
            <div className={'baseball'}>
                <img src={baseball} alt={'baseball'}/>
            </div>
        </div>
    )
};

export default Third;