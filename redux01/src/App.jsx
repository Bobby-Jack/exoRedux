import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement, add, decrease } from './features/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state)=>state.counter.value)
  const [persoVal, setPersoVal] = useState(1);
  const dispatch = useDispatch()
  return (
    <div className='App'>
      <h1>{count}</h1>
      <div className='AppLign'>
        <button onClick={() => {dispatch(increment())}}>+1</button>
        <button onClick={() => {dispatch(add(persoVal))}}>+{persoVal}</button>
        <input type="number" min={1} value={persoVal} onChange={(e)=> setPersoVal(parseInt(e.target.value))}/>
        <button onClick={() => {dispatch(decrease(persoVal))}}>-{persoVal}</button>
        <button onClick={() => {dispatch(decrement())}}>-1</button>
      </div>
      
    </div>
  );
}

export default App;
