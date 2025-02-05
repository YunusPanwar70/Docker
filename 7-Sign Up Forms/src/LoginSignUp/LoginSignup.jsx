import React from 'react';
import './LoginSignUp.css';

// Icons 
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { useState } from 'react';

function LoginSignup() {
    const [action, setAction] = useState('Login');
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            {/* Text */}
            <div className="inputs">
                {action === 'Login' ? <div> </div> : <div className="input">
                    <img src={user_icon} alt="user_icon" />
                    <input type="text" placeholder='Name' />
                </div>}

                {/* Email */}
                <div className="input">
                    <img src={email_icon} alt="email_icon" />
                    <input type="email" placeholder='Email Id' />
                </div>
                {/* Password */}
                <div className="input">
                    <img src={password_icon} alt="password_icon" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>

            {action === 'Sign Up' ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}


            <div className="submit-container">
                <div className={action === 'Sign Up' ? "submit gray" : 'submit'} onClick={() => { setAction('Sign Up'); }}>Sign Up</div>
                <div className={action === 'Login' ? "submit gray" : 'submit'} onClick={() => { setAction("Login"); }}>Login</div>
            </div>
        </div>
    );
}
export default LoginSignup;