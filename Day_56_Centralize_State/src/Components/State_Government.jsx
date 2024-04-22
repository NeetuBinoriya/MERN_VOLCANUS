import React from 'react'
import District_Government from './District_Government'

const State_Government = ({ money }) => {
  return (
    <>
      <h1>State_Government</h1>
      <District_Government money={money} />
    </>
  )
}

export default State_Government