import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const counter = () => {

    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>
        </>
    );
}

export default counter;