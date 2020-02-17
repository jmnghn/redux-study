const initialState = {
    a: 'a',
    data: [],
    loading: false,
};

const fooReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'FOO_ACTION': {
            return {
                ...prevState,
                a: action.data,
            };
        }
        case 'FOO_ACTION_REQUEST': {
            console.log('FOO_ACTION_REQUEST');
            return {
                ...prevState,
                loading: action.data,
            };
        }
        case 'FOO_ACTION_SUCCESS': {
            console.log('FOO_ACTION_SUCCESS');
            return {
                ...prevState,
                data: [...prevState.data, action.data],
            };
        }
        case 'FOO_ACTION_FAILURE': {
            break;
        }
        default:
            return prevState;
    }
};

module.exports = fooReducer;
