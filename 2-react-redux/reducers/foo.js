const initialState = {};

const fooReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'FOO_ACTION': {
            return {
                ...prevState,
                b: action.data,
            };
        }
        default:
            return prevState;
    }
};

module.exports = fooReducer;
