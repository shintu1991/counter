import { useState } from "react";
import './Counter.css'

const Counter = () => {

    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count => count + 1);
    }

    const decrementCounter = () => {
        setCount(count => count - 1);
    }

    return (
        <section>
            <button className="btn-increment" onClick={incrementCounter}>+</button>
            <h1 className="counter">{count}</h1>
            <button className="btn-decrement" onClick={decrementCounter}>-</button>
        </section>
    )
};

export default Counter;