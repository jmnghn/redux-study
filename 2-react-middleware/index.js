const { createStore, applyMiddleware } = require('redux');
const reducers = require('./reducers');
const { fooAction, asyncFooAction } = require('./actions/foo');
const { barAction } = require('./actions/bar');

// console.log('reducers: ', reducers); // return [Function: combination]

const loggerMiddleware = (store) => (next) => (action) => {
    console.log('logger start', action);
    next(action);
    console.log('logger end', action);
    console.log('check', store.getState());
};

const thunkMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }
    next(action);
};

const enhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);

const store = createStore(reducers, (initialState = {}), enhancer);

console.log('init', store.getState());

store.dispatch(asyncFooAction(true));
// store.dispatch(fooAction('abc'));

// console.log('check', store.getState());
