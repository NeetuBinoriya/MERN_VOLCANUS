import React, { useEffect, useState } from 'react';
import Product from './Product';
import Navbar from './Navbar';
import { items } from './Data';
import FormHandling from './FormHandling';


const App = () => {
  const [product, setProduct] = useState(items)
  useEffect(()=>{
    document.title = product[0].category
    // console.log("this is UseEffect Hook");
  },[product]) //Dependency Array


  return (
    <>
    <FormHandling />
    {/* <Navbar product={product} setProduct={setProduct} />
       <Product product={product} />*/}
    </>
  );
}

export default App;
