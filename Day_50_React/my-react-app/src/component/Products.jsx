import React, { useState } from 'react';
import { items } from './Data';

const Product = () => {
  const [products, setProducts] = useState(items)
  return (
    <>
      <div class="row d-flex justify-content-center align-items-center" style={{ width: "67rem", margin: "auto" }}>
        {products.map((item) => (
          <div className="col-md-4">
            <div key={item.id} className='card m-2 bg-dark text-light' style={{ width: "18rem" }}>
              <div className="d-flex justify-content-center align-items-center p-3">
                <img src={item.imgSrc} className='card-img-top' alt="" style={{ width: "200px", height: "200px", borderRadius: "10px", border: "2px solid gray" }} />
              </div>
              <div className="card-body text-center">
                <h5 className='card-title'>{item.title} </h5>
                <p className='card-text'>{item.description}</p>
                <a href="#" className="btn btn-primary">{item.price}</a>
                <a href="#" className="btn btn-warning m-2">Add To Cart</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
