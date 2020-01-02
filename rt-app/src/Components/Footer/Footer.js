import React from 'react';

const Foot = () => {
    return (
        <div className={'footer'}>
            <img id={'footLogo'} src={'rt-app/src/img/footer_logo.svg'}/>
            <div className={'contact'}>
                <h2>Contact</h2>
                <h3>info@company.com</h3>
                <p>+1(999)999-999</p>
                <div className={'social'}>
                    <img id={'icon'} src={'rt-app/img/icons/facebook.svg'}/>
                    <img id={'icon'} src={'rt-app/img/icons/twitter.svg'}/>
                    <img id={'icon'} src={'rt-app/img/icons/instagram.svg'}/>
                </div>
            </div>
            <div className={'footBar'}>
                <p>Copyright 2019; All Rights Reserved</p>
                <div className={'socialWhite'}>
                    <img className={'icon'} src={'rt-app/img/icons/facebook.svg'}/>
                    <img className={'icon'} src={'rt-app/img/icons/twitter.svg'}/>
                    <img className={'icon'} src={'rt-app/img/icons/instagram.svg'}/>
                </div>
            </div>
        </div>
    )
};

export default Foot;