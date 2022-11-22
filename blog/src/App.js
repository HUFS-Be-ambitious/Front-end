//import { Link } from 'react-router-dom'
//import { useState, useCallback } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './views/login/Login';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/member/login" element = {<Login />} />
      </Routes>
  
    </>
  );
};   
export default App
