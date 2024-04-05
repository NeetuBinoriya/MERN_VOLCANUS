import React from 'react';


const ShowData = ({data}) => {
  return (
    <>
      <div className="container" style={{ width: "67rem", margin: "auto"}}>
      {data.map((d)=>(
        
        <div key={d.id}>
        <h5>{d.id}</h5>
        <h4>{d.userId}</h4>
        <p>{d.title}</p>
        <h3>{d.body}</h3>
        
        </div>
      ))}
      
      </div>
    </>
  );
}

export default ShowData;
