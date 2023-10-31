import React, { useEffect, useState } from 'react';
import NavBar from './NavBar/NavBar';
import LandingPage from './LandingPage/LandingPage'
import Footer from './Footer/Footer';
import SmartBuy from './SmartBuy/SmartBuy';
import SmartBuyResult from './SmartBuy/SmartBuyResult';
import NomalBuy from './NomalBuy/NomalBuy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <NavBar />
      <div>
        <Router>
          <Routes>
            <Route path='/PcSell' element={<LandingPage />} />
            <Route path='/PcSell/SmartBuy' element={<SmartBuy />} />
            <Route path='/PcSell/SmartBuy/Result' element={<SmartBuyResult />} />
            <Route path='/PcSell/NomalBuy' element={<NomalBuy />} />
          </Routes>
        </Router>
      </div>

      {/* 랜딩페이지 */}
      <Footer />
    </div >
  );
}

export default App;
