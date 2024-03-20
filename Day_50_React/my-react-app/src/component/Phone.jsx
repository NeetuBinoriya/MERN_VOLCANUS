import React from 'react';

const Phone = ({name, ram, price, dark, light, counter, increase, decrease}) => {
  return (
    <>
    <h1>Counter = {counter}</h1>
    <button onClick={increase}>Increase by 1</button>
    <button onClick={decrease}>Decrease by 1</button>
    
     <h1>{name}</h1> 
     <h1>{ram}</h1>
     <h1>{price}</h1> 
     <button onClick={dark}>Dark Mode</button>
     <button onClick={light}>Light Mode</button>
    </>
  );
}

export default Phone;
