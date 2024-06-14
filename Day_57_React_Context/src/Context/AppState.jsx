import React from 'react'
import AppContext from './AppContext'

const AppState = (props) => {
    const friend = "Chinky"
    const employee = {
        name: "Neetu Binoriya",
        salary: 25000
      } 
  return (
    <AppContext.Provider value={{friend, employee}}>
   {props.children}
    </AppContext.Provider>
  )
}

export default AppState