import Hero from './Hero';
import Laptop from './Laptop';
import Marvel from './Marvel';
import Phone from './Phone';
import Tablet from './Tablet';
import Person from './component/Person';

const App = () => {
  return (
    <div>
    <Person name={"Superman"}/>
    <Person name={"Spiderman"}/>
    <Person name={"Batman"}/>
    
  {/*   <Marvel/>
    <Tablet/>
      <Phone/>  
      <Hero/>
      <Laptop/>
    */}
    </div>
  );
}

export default App;
