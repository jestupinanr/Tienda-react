import React from 'react';
import '@styles/MailSend.scss';

import logo from '@logos/logo_yard_sale.svg';
import mail from '@icons/email.svg';

const MailSend= ()=>{
    return(
        <div className="mailSend">
            <div className="mailSend__container">
                <img src={logo} alt="logo" className="logo"/>

                <h1 className="title">Email has been send</h1>
                <p className="subtitle">Check your inbox for instruccions on how to reset the password</p>

                <div className="email-image">
                    <img src={mail} alt="email"/>
                </div>

                <button className="primary-button login-button">Login</button>
                <p className="resend">
                    <span>didnd receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
}

export default MailSend;