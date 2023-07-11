import React from 'react'
import './style.css';
import './Otp.css';
import pic4 from '../img/pic4.jpg';
import { Link } from 'react-router-dom';

function Otp() {
  return (
    <>
      <div className='bgg4'>
        <img src={pic4} alt={"pic4"} />
      </div>

      <div className='headotp'>
        <p className='titleotp'>ENTER OTP</p>
        
        <div className="namesotp">
          <input type="email" name="myemail" placeholder="ENTER OTP SENT ON THE MAIL" />
        </div>

        <div className="names1otp">
          <Link to={'/New'}>NEXT</Link>
        </div>
      </div>
    </>
  );
}

export default Otp;