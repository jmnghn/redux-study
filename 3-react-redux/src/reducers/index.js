import { combineReducers } from 'redux';
import fooReducer from './foo';

export default combineReducers({
    foo: fooReducer,
});
