import * as ActionTypes from './ActionTypes';

export const TwoColumnGraphics = (state = {
    isLoading: true,
    errMess: null,
    twoColumnGraphics: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TWOCOLUMNGRAPHICS:
            return { ...state, isLoading: false, errMess: null, twoColumnGraphics: action.payload };
        case ActionTypes.TWOCOLUMNGRAPHICS_LOADING:
            return { ...state, isLoading: true, errMess: null, twoColumnGraphics: [] };
        case ActionTypes.TWOCOLUMNGRAPHICS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        default:
            return state;
    }
};