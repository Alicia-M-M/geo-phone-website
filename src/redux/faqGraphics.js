import * as ActionTypes from './ActionTypes';

export const FaqGraphics = (state = {
    isLoading: true,
    errMess: null,
    faqGraphics: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FAQGRAPHICS:
            return { ...state, isLoading: false, errMess: null, faqGraphics: action.payload };
        case ActionTypes.FAQGRAPHICS_LOADING:
            return { ...state, isLoading: true, errMess: null, faqGraphics: [] };
        case ActionTypes.FAQGRAPHICS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        default:
            return state;
    }
};