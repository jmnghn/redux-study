const { combineReducers } = require('redux');
const fooReducer = require('./foo');
const barReducer = require('./bar');

console.log(fooReducer);
console.log(barReducer);

// const initialState = {
//     foo: { ... },
//     bar: { ... },
// };
// 각각의 reducer 가 위의 키값과 맵핑(!) 된다.

module.exports = combineReducers({
    foo: fooReducer,
    bar: barReducer,
});
