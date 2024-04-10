import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Product from './Components/Product'
import { data } from './Data'



const App = () => {
  const [products, setProducts] = useState(data)
  return (
    <>
     <Navbar/>
    <Product products={products}/>
    </>
  );
}

export default App;
