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
  const [id, setId] = useState("")
  // Add TO DO
  const addToDo = (title,description) =>{
    const obj = {
      id: Math.floor(Math.random()+1),
      title,
      description,
    }
    setData([...data, obj])
  };
  // Delete ToDo
  const deleteTodo = (id) =>{
    const filteredData = data.filter((d)=>d.id != id)
    setData(filteredData)
    console.log(filteredData);
  };
  
  return (
    <>
  {/* <button className="btn btn-warning" onClick={()=>deleteTodo(1)}>Delete</button>*/} 
    <Form addToDo={addToDo} data={data} setData={setData}  id={id} setId={setId}/>
      <Todos data={data} setData={setData} deleteTodo={deleteTodo}  setId={setId} />
    </>
  );
}

export default App;
