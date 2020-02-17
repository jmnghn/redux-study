import { FOO_ACTION } from '../reducers/foo';

export const fooAction = (data) => {
    return {
        type: FOO_ACTION,
        data,
    };
};
