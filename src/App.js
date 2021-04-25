import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByAmount } from './redux/counterSlice';
import { useState } from "react";

const App = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div className="App">
            <div>
                {count}
            </div>
            <br/>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>

            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <br/>

            <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
                Increment by Amount
            </button>
            <input
                value={incrementAmount}
                onChange={e => setIncrementAmount(e.target.value)}
            />
            <button onClick={() => dispatch(decrementByAmount(Number(incrementAmount) || 0))}>
                Decrement by Amount
            </button>
        </div>
    )
}

export default App;
