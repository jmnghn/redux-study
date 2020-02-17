import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fooAction } from './actions/foo';

function App() {
    const { value } = useSelector((state) => state.foo);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(fooAction('dispatched!!!'));
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>hello react-redux</p>
                <button onClick={onClick}>FOO ACTION Dispatch!!!</button>
                <p>FOO ACTION DISPATCH RESULT</p>
                <p>{value ? value : 'null'}</p>
            </header>
        </div>
    );
}

export default App;
