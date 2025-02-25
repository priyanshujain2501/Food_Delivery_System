import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './compoents/Navbar'
import Footer from './compoents/Footer'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import LoginPopup from './compoents/LoginPopup'
import SplitBill from './Pages/SplitBill'

function App() {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className={`m-0 p-0 box-border min-h-[100vh] outfit`}>

        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/splitbill' element={<SplitBill/>} />
        </Routes>

        <Footer />

      </div>
    </>
  )
}

export default App