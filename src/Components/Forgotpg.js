import React from 'react'
import './style.css';
import './Forgotpg.css';
import pic3 from '../img/pic3.jpg';
import { Link } from 'react-router-dom';

function Forgotpg() {
  return (
    <>
      <div className='bgg3'>
        <img src={pic3} alt={"pic3"} />
      </div>

      <div className='headpass'>
        <p className='title'>FORGOT PASSWORD ?</p>

        <div className="namesfg">
          <input type="email" name="myemail" placeholder="ENTER YOUR EMAIL" />
        </div>

        <div className="names1fg">
            <Link to={'/Otp'}>NEXT</Link>
        </div>
      </div>
    </>

  );
}

export default Forgotpg;
