import React from 'react';
import { useParams } from 'react-router-dom'
import { items } from '../Data';

const ProductDetails = () => {
    const { id } = useParams();
    const data = items.filter((product) => product.id == id)
console.log(data);
    // console.log("This is my UseParams",useParams());

    return (
        <>
            <div className="container my-5">
                <div className="card bg-dark text-center mx-auto" style={{ width: "18rem" }}>
                    <div className="d-flex justify-content-center align-item-center p-3 ">
                        <img src={data[0]?.imgSrc} className='card-img-top' alt="" style={{ width: "120px" }} /></div>
                    <div className="card-body bg-dark text-light">
                        <h5 className='card-title'>{data[0]?.title}</h5>
                        <p className="card-text">{data[0]?.description}</p>
                        <a href="#" className='btn btn-primary mx-3'>{data[0]?.price}</a>
                        <a href="#" className='btn btn-warning mx-3'>Add To Cart</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
