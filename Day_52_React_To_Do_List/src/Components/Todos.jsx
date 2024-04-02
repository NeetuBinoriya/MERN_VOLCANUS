import React from 'react';

const Todos = ({ data }) => {
  return (
    <>

      <div className="container text-center mt-2" style={{ width: "700px" }}>
        {data.map((d) => <div key={d.id} className='bg-dark p-2 m-3' style={{ borderRadius: "10px" }}>
        <h4>{d.id}</h4>
          <h3>{d.title}</h3>
          <p>{d.description}</p>

          <div className="container p-2">
            <button className="btn btn-warning mx-3">Edit</button>
            <button className="btn btn-info">Delete</button>
          </div>
        </div>)}
      </div>
    </>
  );
}

export default Todos;
