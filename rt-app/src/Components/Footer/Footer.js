import React from 'react';
import footer_logo from '../../img/footer_logo.svg'
import facebook from '../../img/icons/facebook.svg'
import twitter from '../../img/icons/twitter.svg'
import instagram from '../../img/icons/instagram.svg'
import fb_white from '../../img/icons/fb_white.svg'
import tw_white from '../../img/icons/tw_white.svg'
import ig_white from '../../img/icons/ig_white.svg'


const Foot = () => {
    return (
        <div className={'footer'}>
            <img id={'footLogo'} src={footer_logo} alt={'company logo'}/>
            <div className={'contact'}>
                <h2>Contact</h2>
                <h3>info@company.com</h3>
                <p>+1(999)999-9999</p>
                <div className={'social'}>
                    <img id={'icon'} src={facebook} alt={'facebook'}/>
                    <img id={'icon'} src={twitter} alt={'twitter'}/>
                    <img id={'icon'} src={instagram} alt={'instagram'}/>
                </div>
            </div>
            <div className={'footBar'}>
                <p>Copyright 2019; All Rights Reserved</p>
                <div className={'socialWhite'}>
                    <img className={'icon'} src={fb_white} alt={'facebook'}/>
                    <img className={'icon'} src={tw_white} alt={'twitter'}/>
                    <img className={'icon'} src={ig_white} alt={'instagram'}/>
                </div>
            </div>
        </div>
    )
};

export default Foot;