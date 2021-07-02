import * as ActionTypes from './ActionTypes';

export const GraphicsText = (state = {
    isLoading: true,
    errMess: null,
    graphicsText: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_GRAPHICSTEXT:
            return { ...state, isLoading: false, errMess: null, graphicsText: action.payload };
        case ActionTypes.GRAPHICSTEXT_LOADING:
            return { ...state, isLoading: true, errMess: null, graphicsText: [] };
        case ActionTypes.GRAPHICSTEXT_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        default:
            return state;
    }
};