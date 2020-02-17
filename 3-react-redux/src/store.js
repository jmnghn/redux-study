import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const looggerMiddleware = (store) => (next) => (action) => {
    console.log('middleware logger', action);
    next(action);
};
const enhancer =
    process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(looggerMiddleware))
        : composeWithDevTools(applyMiddleware(looggerMiddleware));
const initialState = {};
const store = createStore(reducers, initialState, enhancer);

export default store; // 휴... 이걸 이해하기 위해... -_-)...
