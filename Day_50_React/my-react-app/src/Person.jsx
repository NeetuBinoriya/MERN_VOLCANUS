import React from 'react';
import Hero from './Hero';

const Person = () => {
    const heros = {
        hero1: "Superman",
        hero2: "Spiderman"
    };
    const arr = ["Apple", "Banana", "Mango", 20, 20.3, "Oneplus"]
    return (
        <>
        <h1>This is Person Component</h1>
            { /*<div>
  {30+4}
  <h1>Welcome to React Tutorial</h1>
  30+4
  <h2>My name is {heros.hero1} & currently I'm learning React</h2>
  <h3>My name is {heros.hero2} & I'm already know React pretty well</h3>
  </div>
  <div>
  <h2>Hello World </h2>
  <h3>Hello React</h3>
  </div>*/}

            {/*<h1>{arr[0]}</h1>*/}
            {
                arr.map((d) => (
                    <>
                        <h2 key={Math.random()}>{d}</h2>

                    </>
                ))}
                <Hero/>
        </>
    );
}

export default Person;
