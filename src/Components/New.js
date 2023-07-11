import React from 'react'
import './style.css';
import './New.css';
import pic5 from '../img/pic5.jpg'; 
import { Link } from 'react-router-dom';

function New() {
  return (
    <>
      <div className='bgg5'>
        <img src={pic5} alt={"pic5"} />
      </div>

      <div className='headnew'>
        <p className='titlenew'>RESET PASSWORD</p>

        <div className="namesnew">
          <input type="email" name="myemail" placeholder="ENTER NEW PASSWORD" />
        </div>

        <div className="names1new">
          <button type="submit">SAVE</button>
        </div>
      </div>
    </>
  );
}

export default New;