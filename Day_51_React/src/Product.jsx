import React from "react";


const Product = ({ product }) => {
    return (
        <>
            <div className="container">
            <div className="row" style={{ width: "67rem", margin: "auto" }}>
                {product.map((item) => (
                    <div key={item.id} className='col-md-4 col-lg-4 my-3'>
                            <div className="card bg-dark text-center" style={{width:"18rem"}}>
                                <div className="d-flex justify-content-center align-item-center p-3 ">
                                    <img src={item.imgSrc} className='card-img-top' alt="" style={{ width: "120px" }} /></div>
                                <div className="card-body bg-dark text-light">
                                    <h5 className='card-title'>{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <a href="#" className='btn btn-primary mx-3'>{item.price}</a>
                                    <a href="#" className='btn btn-warning mx-3'>Add To Cart</a>
                                </div>
                            </div>
                        </div>
                   
                ))}

            </div>
            </div>
        </>
    );
}

export default Product;
