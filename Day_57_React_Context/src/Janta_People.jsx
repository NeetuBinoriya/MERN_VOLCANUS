import React, { useContext } from 'react'
import AppContext from './Context/AppContext'
import App from './App';

const Janta_People = () => {
    // console.log("This Data is Coming from Context : ", useContext(AppContext));
    const data = useContext(AppContext)
    return (
        <>
            <h1>This is Janta Component = {data.friend}</h1>
            <h2>This is Janta Component = {data.employee.name}</h2>
            <h2>This is Janta Component = {data.employee.salary}</h2>
        </>
    )
}

export default Janta_People