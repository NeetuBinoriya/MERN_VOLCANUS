import Hero from './Hero';
import Laptop from './Laptop';
import Marvel from './Marvel';
// import Phone from './Phone';
import Tablet from './Tablet';
import Person from './component/Person';
import Phone from './component/Phone'
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(10)


  const increaseBy1 =() =>{
    console.log("counter = ", counter);
    // counter = counter + 1;
    // counter++
    setCounter(counter+1)
  }
  const decreaseBy1 =() =>{
    console.log("counter = ", counter);
    // counter = counter - 1;
    setCounter(counter-1)
  }
  const light = () => {
    document.querySelector("body").style.backgroundColor = 'white'
    document.querySelector("body").style.color = 'black'
  }
  const dark = () => {
    document.querySelector("body").style.backgroundColor = 'black'
    document.querySelector("body").style.color = 'white'
  }
  return (
    <div>

    <button onClick={()=>setCounter(counter+1)}> Increase</button>
    <button onClick={()=>setCounter(counter-1)}>Decrease</button>
      <Phone ram={"10gb"} name={"Pocco"} price={"5000"} light={light} dark={dark} counter= {counter} increase={increaseBy1} decrease={decreaseBy1}/>
      {/*<Person name={"Superman"}/>
    <Person name={"Spiderman"}/>
  <Person name={"Batman"}/>*/}

      {/*   <Marvel/>
    <Tablet/>
      <Phone/>  
      <Hero/>
      <Laptop/>
    */}
    </div>
  );
}

// Hooks
// useState(), useEffect(), useMemo(), useReducer(), useContext(), useCollback, useLayoutEffect()

export default App;
