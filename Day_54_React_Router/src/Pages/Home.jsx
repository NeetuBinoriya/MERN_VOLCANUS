import React from 'react';
import Product from '../Components/Product';
import {items} from "../Data"

const Home = () => {
  return (
    <>
    <Product product={items}/>
   
    </>
  );
}

export default Home;
