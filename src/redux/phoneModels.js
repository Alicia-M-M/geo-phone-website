import * as ActionTypes from './ActionTypes';

export const PhoneModels = (state = {
    isLoading: true,
    errMess: null,
    phoneModels: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PHONEMODELS:
            return { ...state, isLoading: false, errMess: null, phoneModels: action.payload };
        case ActionTypes.PHONEMODELS_LOADING:
            return { ...state, isLoading: true, errMess: null, phoneModels: [] };
        case ActionTypes.PHONEMODELS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        default:
            return state;
    }
};