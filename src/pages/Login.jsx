import React from 'react';
import '@styles/Login.scss';

import logo from '@logos/logo_yard_sale.svg';

const Login = ()=>{
    const form = React.useRef(null);

    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username : formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return(
        <div className="login">
            <div className='Login-container'>
                <img src={logo} alt="logo" className="logo" />
                <form action="" className="form" ref={form}>
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="text" name="email" className="input input-email" placeholder="juan1diego3@gmail.com" />
            
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password"name="password" className="input input-password" placeholder="*****" />

                    <button 
                        className="primary-button login-button" 
                        onClick={handleSubmit}>
                            Log in
                        </button>
                        <a href="/">Forgot my password</a>
                </form>
                <button className="secondary-button signin-button">
                     Sign up
                </button>
            </div>
        </div>
    );
}

export default Login;