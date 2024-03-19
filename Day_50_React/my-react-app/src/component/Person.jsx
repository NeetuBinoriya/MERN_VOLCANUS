import React from 'react';

const Person = (props) => {
    const person = {
        name: "Superman",
        age: "400",
        salary: "10000$",
        car: "BMW"
    }
  return (
    <div className='person'>
    <h1>This Person coming from Person Component</h1>
    <h2>{props.name}</h2>
    <h2>{person.age}</h2>
    <h2>{person.salary}</h2>
    <h2>{person.car}</h2>
      
    </div>
  );
}

export default Person;
