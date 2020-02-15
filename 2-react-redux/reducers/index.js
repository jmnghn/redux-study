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
// 그래서 react-nodebird 에서
// initialState 를 reducer 들이 각각 가지고 있었었구만...

module.exports = combineReducers({
    foo: fooReducer,
    bar: barReducer,
});
