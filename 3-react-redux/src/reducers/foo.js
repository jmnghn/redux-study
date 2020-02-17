const initialState = {
    value: null,
};

export const FOO_ACTION = 'FOO_ACTION';

const fooReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case FOO_ACTION:
            return {
                value: action.data,
            };
        default:
            return prevState;
    }
};

export default fooReducer;
