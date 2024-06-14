import React from 'react'
import Indian_Government from './Indian_Government'
import './Style.css'

const App = () => {
  const employee = "neetu"
  return (
    <>
    <h1 className='h1'>Hello I am App </h1>
      <Indian_Government employee={employee}/>
    </>
  )
}

export default App