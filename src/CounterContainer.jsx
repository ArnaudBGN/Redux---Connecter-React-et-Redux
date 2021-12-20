import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter: state
});

const CounterComponent = ({ counter, dispatch}) => {
    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT'})}>
            Increment
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}>
            Decrement
            </button>
            <button onClick={() => dispatch({ type: 'INCREMENTbyTEN'})}>
            Increment by Ten
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENTbyTEN'})}>
            Decrement by Ten
            </button>
            <button onClick={() => dispatch({ type: 'RESET'})}>
            Reset
            </button>
        </div>
    )
}

export default connect(mapStateToProps)(CounterComponent);