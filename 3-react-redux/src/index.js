import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './store'; // redux로 생성한 store 가져오는 부분
import { Provider } from 'react-redux';

// <Provider> 로 감싸주지 않으면,
// react-redux의 useDispatch나 useSelector를 사용할 때, react-redux context value를 찾을 수 없다고
// <Provider>로 감싸져있냐고 묻는 에러가 나온다.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
