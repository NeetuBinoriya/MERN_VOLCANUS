import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Panchayat = () => {
  const myData = useContext(AppContext)
  console.log("This Data is Coming from Context", myData.dollar);
  return (
    <>
      <h1>Panchayat</h1>
      <h2>Finally we Recieve from Panchayat {myData.dollar}</h2> 
      {/* This is Called Props Drilling Method sending Props from parent to child and child and child */}
    </>
  )
}

export default Panchayat