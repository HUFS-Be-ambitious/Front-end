import React from 'react';
import './App.css';
import Navigation from "./components/navigation";
import Ad from "./components/advertisement";
import {Routes, Route } from 'react-router-dom';
import Mypage from "./pages/mypage";
import Buy from "./pages/buy";
import Buyinfo from "./pages/buyinfo";
import Buyposter from "./pages/buyposter";
import Delivery from "./pages/delivery";
import Deliveryposter from "./pages/deliveryposter";
import Mainpage from "./pages/mainpage";
import Storeinfo from "./pages/storeinfo";
import Deliverypost from "./pages/deliverypost";
import Buypost from "./pages/buypost";
import Loginpage from "./pages/loginpage";
function App() {
  return (
      <Routes>
        <Route path='/' element={<Mainpage/>} />
        <Route path='/buy' element={<Buy/>} />
        <Route path='/delivery' element={<Delivery/>} />
        <Route path='/buyinfo' element={<Buyinfo/>} />
        <Route path='/deliveryinfo' element={<Deliverypost/>} />
        <Route path='/deliveryposter' element={<Deliveryposter/>} />
        <Route path='/buypost' element={<Buypost/>} />
        <Route path='/buyposter' element={<Buyposter/>} />
        <Route path='/mypage' element={<Mypage/>} />
        <Route path='/loginpage' element={<Loginpage/>} />
        <Route path='/storeinfo' element={<Storeinfo/>} />
      </Routes>
  );
};

export default App;
