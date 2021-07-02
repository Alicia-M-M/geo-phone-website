import * as ActionTypes from './ActionTypes';

export const CarouselGraphics = (state = {
    isLoading: true,
    errMess: null,
    carouselGraphics: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CAROUSELGRAPHICS:
            return { ...state, isLoading: false, errMess: null, carouselGraphics: action.payload };
        case ActionTypes.CAROUSELGRAPHICS_LOADING:
            return { ...state, isLoading: true, errMess: null, carouselGraphics: [] };
        case ActionTypes.CAROUSELGRAPHICS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        default:
            return state;
    }
};