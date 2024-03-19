import React from 'react';
import './Spiderman.css'

const Marvel = () => {
    let batman = {
        backgroundColor: "orange",
        width: "500px",
        height: "200px",
        padding: "30px",
        margin: "auto",
        marginTop:"20px",
        border: "5px solid yellow",
        borderRadius: "50px"
    }
  return (
    <>
    <div style={{backgroundColor:"gray", margin:"auto", marginTop:"20px", width:"500px", height:"200px", border: "5px solid cyan", padding: "30px", borderRadius:"50px"}}>
    <h2>Hello, I am Superman</h2>
    </div>
    <div style={batman}>
    <h3> Hello, I am Batman</h3>
    </div>
    <div className="spiderman">
    <h2>Hello, I am Spiderman</h2>
    </div>
      
    </>
  );
}

export default Marvel;
