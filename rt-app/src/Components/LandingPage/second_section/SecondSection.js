import React from "react";
import layouts from '../../../img/icons/layouts.svg'
import awards from '../../../img/icons/awards.svg'
import coffee from '../../../img/icons/coffee.svg'
import projects from '../../../img/icons/projects.svg'

const Second = () => {
    return (
        <div className={'sec'}>
            <div className={'textbox'}>
                <h1>New Best Experience</h1>
                <p>Nam natum volutpat eu. Natum elitr vel te. Id qui purto dicit, bonorum minimum et sit. Cum ei assum tation homero, at per assum dicit verterem. Lorem deterruisset.</p>
                <button>Explore</button>
            </div>
            <div className={'boxItems'}>
                <div className={'box'} id={'layouts'}>
                    <img src={layouts}/>
                    <h2>Layouts</h2>
                    <p>Quidam officiis similique sea ei, vel tollit indoctum efficiendi tantas platonem. </p>
                </div>
                <div className={'box'} id={'awards'}>
                    <img src={awards}/>
                    <h2>Awards</h2>
                    <p>Deseruisse definitionem his et, an has veri integre abhorreant, nam alii epicurei.</p>
                </div>
                <div className={'box'} id={'coffee'}>
                    <img src={coffee}/>
                    <h2>Cups of Coffee</h2>
                    <p>Ea eos essent ornatus percipit, mea an persecuti pertinacia partiendo eu ius.</p>
                </div>
                <div className={'box'} id={'projects'}>
                    <img src={projects}/>
                    <h2>Projects</h2>
                    <p>Mea iisque mentitum signiferumque te, sed commune erroribus scripserit sea.</p>
                </div>
            </div>
        </div>
    )
};

export default Second;