import React from 'react'
import State_Government from './State_Government'

const Central_Goverment = ({ money }) => {
  return (
    <>
      <h1>Central_Government</h1>
      <State_Government money={money} />

    </>
  )
}

export default Central_Goverment