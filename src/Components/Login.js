import React from 'react'
import './style.css'
import './Login.css'
import pic1 from '../img/pic1.png'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div className='bgg'>
                <img src={pic1} alt={"pic"} />
            </div>

            <div className='head'>
                <p className='heading1'>WELCOME TO SHOPPR</p>

                <div className="login">LOGIN</div>

                <div className="user_vendor">
                    <div>
                    <input type="radio" name="mydetails" />User
                    </div>
                    <div>
                    <input type="radio" name="mydetails" />Vendor
                    </div>
                </div>

                <div className="names">
                    <input type="email" name="myemail" placeholder="Email" />
                </div>

                <div className="names">
                    <input type="password" name="mypassword" placeholder="Password" />
                </div>

                <div className='forgot'>
                    <Link to={'/Forgotpg'}>Forgot Password?</Link>
                </div>

                <div className="names1">
                <button type="submit">LOGIN</button>
                </div>

                <div className='more'>Or Login With</div>

                <div className="google">
                <button type="submit">GOOGLE</button>
                </div>

                <div className="mem">Don't have account?
                    <Link to={'/Signup'}>SIGN UP</Link>
                </div>
            </div>
        </>
    );
}

export default Login;