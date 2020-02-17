const { createStore } = require('redux');

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FOO_ACTION': {
            return {
                ...prevState,
                b: action.data,
            };
        }
        case 'BAR_ACTION': {
            return {
                a: 'a',
                b: action.data,
                c: true,
            };
        }
        default:
            return prevState;
    }
};

const initialState = {
    a: 'a',
    b: 1,
    c: true,
};

const store = createStore(reducer, initialState);

console.log(store.getState()); // reducer 가 return 한 state 를 받아오는 '순수함수'...

// store.dispatch({
//     type: 'FOO_ACTION',
//     data: 2,
// });

store.dispatch({
    type: 'BAR_ACTION',
    data: 2,
});

console.log(store.getState());
