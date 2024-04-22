import React, { useState } from 'react'
import { AppContext } from './AppContext'
const AppState = (props) => {
    const [data, setData] = useState(10)
    const dollar = 10000000;
    
  return (
    <AppContext.Provider value={{dollar, data, setData}}>
    {props.children}
    </AppContext.Provider>
  )
}

export default AppState