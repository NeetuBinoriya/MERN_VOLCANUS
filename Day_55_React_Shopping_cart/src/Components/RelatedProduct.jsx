import React, { useState } from 'react';
// import { data } from '../Data';

const RelatedProduct = ({ products, setProducts }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((prodcut) => prodcut.id == id);
    //  console.log(filterProduct)
    setProducts(filterProduct[0]);

    const relatedProducts = items.filter(
      (suman) => suman.category === product.category
    );

    // console.log("RelatedProduct = ",relatedProducts)
    setRelatedProducts(relatedProducts);
  }, [id, products.category]);


  // const filterByCategory = (cat) => setProducts (data.filter((d)=>d.category == cat))
  // const filterRelatedProduct = () => {
  //   // setRelatedProduct();
  //   const relatedProduct = (d) => d.category == products.category
  //   setRelatedProduct(relatedProduct)
  // };

  console.log(relatedProducts);
  return (
    <>
      <h1>Related Product</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {products?.map((product) => (<div key={product.id} className='col-md-4 d-flex justify-content-center align-items-center' style={{ textDecoration: "none" }} >
          <div className="d-flex justify-content-center align-items-center p-3">
            <img src={product.imgSrc} className="card-img-top" alt="..." style={{ width: "200px" }} /></div>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <a href="#" className="btn btn-warning mx-3">{product.price}</a>
            <a href="#" className="btn btn-primary">Add to Cart</a>
          </div>         
        </div>       
        
        ))}
      </div>

      <h1 className="text-center my-5">Related Products</h1>
      <products cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
}

export default RelatedProduct;
