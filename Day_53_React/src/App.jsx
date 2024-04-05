import React, { useEffect, useState } from 'react';
import ShowData from "./ShowData"

const App = () => {
  const [data, setData] = useState([data])
  useEffect(()=>{
    const FetchData = async () =>{
      const api = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await api.json()
      // console.log(data);
      setData(data)
    };
    FetchData();
  }, []);
  console.log("State wala data =", data);
  return (
    <>
      <h1>Show Data from API</h1>
      <ShowData data={data} setData={setData}/>
    </>
  );
}

export default App;
