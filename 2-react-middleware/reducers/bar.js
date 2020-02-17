const initialState = {
    a: 'a',
    b: 1,
    c: true,
};

const barReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'BAR_ACTION': {
            return {
                ...prevState,
                c: action.data,
            };
        }
        default:
            return prevState;
    }
};

module.exports = barReducer;
