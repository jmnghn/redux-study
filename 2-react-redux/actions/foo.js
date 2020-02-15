const fooAction = (data) => {
    return {
        type: 'FOO_ACTION',
        data,
    };
};

module.exports = {
    fooAction,
};
