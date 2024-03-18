import React from 'react';

const Laptop = () => {
    const lap = {
        brandName : "HP Probook 430 g2",
        processor : "Intel i5 6th",
        ram : "4gb",
        SSD : "1TB",
        price : 50000 
    }
  return (
    <div>
      <h1>This Data is Coming from Laptop Component</h1>
      <h2>{lap.brandName}</h2>
      <h2>{lap.price}</h2>
      <h2>{lap.processor}</h2>
    </div>
  );
}

export default Laptop;
