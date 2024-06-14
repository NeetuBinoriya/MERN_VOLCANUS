import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseBy1, decreaseBy1, increaseBy10, decreaseBy10 } from './redux/counterslice/Index'

const App = () => {
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  return (
    <>
    <h1>{counter}</h1>
    <button onClick={()=>dispatch(increaseBy1())}>IncreaseBy1</button>
    <button onClick={()=>dispatch(decreaseBy1())}>DecreaseBy1</button>
    <button onClick={()=>dispatch(increaseBy10())}>IncreaseBy10</button>
    <button onClick={()=>dispatch(decreaseBy10())}>DecreaseBy10</button>
    </>
  )
}

export default App