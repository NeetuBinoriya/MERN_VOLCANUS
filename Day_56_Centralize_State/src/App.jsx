import React from 'react'
import Central_Goverment from './Components/Central_Goverment'
import Panchayat from './Components/Panchayat';

const App = () => {
const dollar = 100000000
  return (
    <>
      <h1>This is my App Component</h1>
      <Central_Goverment dollar={dollar} />

    </>
  )
}

export default App