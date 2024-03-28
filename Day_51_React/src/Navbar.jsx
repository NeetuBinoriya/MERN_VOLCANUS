import React from 'react';
import { items } from "./Data";

const Navbar = ({ setProduct }) => {
    const fiterBYCategory = (cat) => {
        const filteredData = items.filter((data) => data.category === cat)
        // console.log(filteredData);
        setProduct(filteredData)
    };
    const filterByPrice = (price) => setProduct( items.filter((p) => p.price > price))
    
    return (
        <>
            <div className="nav p-3 my-3 d-flex justify-content-center">
                <div className="btn btn-success mx-3" onClick={()=>setProduct(items)}>No Filter</div>
                <div className="btn btn-primary mx-3" onClick={() => fiterBYCategory("mobiles")}>Mobile</div>
                <div className="btn btn-warning mx-3" onClick={() => fiterBYCategory("laptops")}>Laptops</div>
                <div className="btn btn-secondary mx-3" onClick={() => fiterBYCategory("tablets")}>Tablet</div>
                <div className="btn btn-info mx-3" onClick={() => filterByPrice(30000)}> {">"}30000</div>
                <div className="btn btn-light mx-3" onClick={() => filterByPrice(60000)}> {">"}60000</div>
                <div className="btn btn-danger mx-3" onClick={() => filterByPrice(80000)}> {">"}80000</div>
            </div>
        </>
    );
}

export default Navbar;
