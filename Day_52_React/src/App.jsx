import React, { useState } from 'react';
import Todos from './Components/Todos';
import Form from './Components/Form';

const App = () => {
  const [data, setData] = useState([{
    id: 1, title: "Mern batch 2", description: "This is batch very Talented"
  },
  {
    id: 2, title: "Avengers Infinity War", description: "This is one of the best Movie in Marvel Avengers Series"
  },
  {
    id: 3, title: "Chennai Express", description: "This is one of the best Movie of SRK and Deepika"
  },
  ]);
  return (
    <>
    <h1>First React Project</h1>
    <Form />
      <Todos data={data} />
    </>
  );
}

export default App;
