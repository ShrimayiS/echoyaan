import React from 'react';
import { Route, Routes,BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
// import SellOnEcoyaan from './components/SellOnEcoyaan';
// import Careers from './components/Careers';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element = {<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/sell-on-ecoyaan" element={<>Sell on Echoyaan</>} />
        <Route path="/careers" element={<>Careers</>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
