import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Product from './Components/Product'
import SearchProduct from './Components/SearchProduct'
import Cart from './Components/Cart'
import { data } from './Data'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from "./Components/ProductDetail"
import RelatedProduct from './Components/RelatedProduct';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [products, setProducts] = useState(data)
  const [cart, setCart] = useState([])
  const [RelatedProduct, setRelatedProduct] = useState()
  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success('Item Added Successfully!!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    // console.log("Cart Item...", cart);

  }
  return (
    <>
      <Router>
        <ToastContainer />
        <Navbar setProducts={setProducts} cart={cart} />
        <Routes>
          <Route path='/' element={<Product products={products} addToCart={addToCart} />} />
          <Route path='/:id' element={<ProductDetail />} />
          <Route path='/search/:term' element={<SearchProduct setProducts={setProducts} />} />
          <Route path='/:id' element={<RelatedProduct setRelatedProduct={setRelatedProduct} />} />
          <Route path='/cart' element={<Cart cart={cart} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
