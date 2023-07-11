import React from 'react'
import './style.css'
import './Signup.css'
import pic2 from '../img/pic2.jpg';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <>
            <div className='bgg2'>
                <img src={pic2} alt={"pic2"} />
            </div>

            <div className='headup'>
                <p className='heading1up'>WELCOME TO SHOPPR</p>

                <div className="signup">SIGN UP</div>

                <div class="namesup">
                    <input type="text" name="myname" placeholder="Enter Name" />
                </div>

                <div className="namesup">
                    <input type="email" name="myemail" placeholder="Enter Email" />
                </div>

                <div className="namesup">
                    <input type="password" name="mypassword" placeholder="Enter Password" />
                </div>

                <div className="names1up">
                    <button type="submit">SIGN UP</button>
                </div>

                <div className='moreup'>Or Sign Up With</div>

                <div className="googleup">
                <button type="submit">GOOGLE</button>
                </div>

                <div className="memup">Already A Member?
                    <Link to={'/Login'}>LOGIN</Link>
                </div>
            </div>
        </>
    );
}

export default Signup;