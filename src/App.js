import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import New from './Components/New.js';
import Forgotpg from './Components/Forgotpg.js';
import Otp from './Components/Otp.js';

function App() {
  return (   
    <>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/Login'} />} />
        <Route path={'/Login'} element={<Login />} />
        <Route path={'/Signup'} element={<Signup />} />
        <Route path={'/Forgotpg'} element={<Forgotpg />} />
        <Route path={'/Otp'} element={<Otp />} />
        <Route path={'/New'} element={<New />} />
      </Routes>
    </>
  );
}

export default App;