const fetch = require('node-fetch');

// async action creator
const asyncFooAction = (data) => {
    return async (dispatch, getState) => {
        dispatch({
            type: 'FOO_ACTION_REQUEST',
            data,
        });

        await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((json) =>
                dispatch({
                    type: 'FOO_ACTION_SUCCESS',
                    data: json,
                }),
            )
            .catch((err) =>
                dispatch({
                    type: 'FOO_ACTION_FAILURE',
                    data: err,
                }),
            );
    };
};
// action creator
const fooAction = (data) => {
    return {
        type: 'FOO_ACTION',
        data,
    };
};

module.exports = {
    fooAction,
    asyncFooAction,
};
