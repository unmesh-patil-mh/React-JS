import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './App.css'
import { increment ,decrement , multiply, incrementByAmount } from './redux/counter/counterSlice'

function App() {
  const count =useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
     <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(multiply())}>*</button>
      corrently count is {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(6))}>+6</button>
     </div>
    </>
  )
}

export default App
