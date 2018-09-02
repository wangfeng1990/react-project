import { type } from '../action';
export const test = (state, action) => {
    switch (action.type) {
        case type.TEST:
            return {
                ...state,
                data:action.data
            };
        default:
            return {...state};
    }
};
