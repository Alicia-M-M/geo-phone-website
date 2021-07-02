import * as ActionTypes from './ActionTypes';

export const NewsGraphics = (state = {
    isLoading: true,
    errMess: null,
    newsGraphics: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NEWSGRAPHICS:
            return { ...state, isLoading: false, errMess: null, newsGraphics: action.payload };
        case ActionTypes.NEWSGRAPHICS_LOADING:
            return { ...state, isLoading: true, errMess: null, newsGraphics: [] };
        case ActionTypes.NEWSGRAPHICS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        default:
            return state;
    }
};