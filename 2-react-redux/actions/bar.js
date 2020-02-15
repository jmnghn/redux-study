const barAction = (data) => {
    return {
        type: 'BAR_ACTION',
        data,
    };
};

module.exports = {
    barAction,
};
