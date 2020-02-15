const { createStore } = require('redux');
const reducers = require('./reducers');
const { fooAction } = require('./actions/foo');
const { barAction } = require('./actions/bar');

console.log('reducers: ', reducers);

const initialState = {
    foo: {
        a: 'a',
        b: 1,
        c: true,
    },
    bar: {
        a: 'a',
        b: 1,
        c: true,
    },
};

const store = createStore(reducers, initialState);

console.log('init', store.getState());

store.dispatch(fooAction(99));

console.log('1', store.getState());

store.dispatch(barAction(false));

console.log('2', store.getState());
