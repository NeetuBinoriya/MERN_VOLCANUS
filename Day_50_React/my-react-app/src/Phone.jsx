import React from 'react';

const phone = () => {
    let phone = {
        name: "Oneplus",
        price: 40000,
        Ram: "6Gb",
        Rom: "128Gb"
    };
  return (
    <>
    <div className='container'>
    <h1>This Data Coming from Phone Component</h1>
    <h3>{phone.name}</h3>
    <h3>{phone.price}</h3>
    <h3>{phone.Ram}</h3>
    <h3>{phone.Rom}</h3>
    </div>
    </>
  );
}

export default phone;
