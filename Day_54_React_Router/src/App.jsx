import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Team from './Pages/Team';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProductDetails from './Pages/ProductDetails';

const App = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/team' element={<Team />}/>
        
        {/* Dynamic Route */}
        <Route path='/product/:id' element={<ProductDetails/>}/>

      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
