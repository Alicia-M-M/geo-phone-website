import * as ActionTypes from './ActionTypes';
import { GRAPHICSTEXT } from '../shared/graphicsText';
import { TWOCOLUMNGRAPHICS } from '../shared/twoColumnGraphics';
import { CAROUSELGRAPHICS } from '../shared/carouselGraphics';
import { FAQGRAPHICS } from '../shared/faqGraphics';
import { PHONEMODELS } from '../shared/phoneModels';
import { NEWSGRAPHICS } from '../shared/newsGraphics';


// GRAPHICSTEXT
export const fetchGraphicsText = () => dispatch => {

    dispatch(graphicsTextLoading());

    setTimeout(() => {
        dispatch(addGraphicsText(GRAPHICSTEXT));
    }, 2000);
};

export const graphicsTextLoading = () => ({
    type: ActionTypes.GRAPHICSTEXT_LOADING
});

export const graphicsTextFailed = errMess => ({
    type: ActionTypes.GRAPHICSTEXT_FAILED,
    payload: errMess
});

export const addGraphicsText = graphicsText => ({
    type: ActionTypes.ADD_GRAPHICSTEXT,
    payload: graphicsText
});


// TWOCOLUMNGGRAPHICS

export const fetchTwoColumnGraphics = () => dispatch => {

    dispatch(twoColumnGraphicsLoading());

    setTimeout(() => {
        dispatch(addtwoColumnGraphics(TWOCOLUMNGRAPHICS));
    }, 2000);
};

export const twoColumnGraphicsLoading = () => ({
    type: ActionTypes.TWOCOLUMNGRAPHICS_LOADING
});

export const twoColumnGraphicsFailed = errMess => ({
    type: ActionTypes.TWOCOLUMNGRAPHICS_FAILED,
    payload: errMess
});

export const addtwoColumnGraphics = twoColumnGraphics => ({
    type: ActionTypes.ADD_TWOCOLUMNGRAPHICS,
    payload: twoColumnGraphics
});

// CAROUSELGRAPHICS

export const fetchCarouselGraphics = () => dispatch => {

    dispatch(carouselGraphicsLoading());

    setTimeout(() => {
        dispatch(addCarouselGraphics(CAROUSELGRAPHICS));
    }, 2000);
};

export const carouselGraphicsLoading = () => ({
    type: ActionTypes.CAROUSELGRAPHICS_LOADING
});

export const carouselGraphicsFailed = errMess => ({
    type: ActionTypes.CAROUSELGRAPHICS_FAILED,
    payload: errMess
});

export const addCarouselGraphics = carouselGraphics => ({
    type: ActionTypes.ADD_CAROUSELGRAPHICS,
    payload: carouselGraphics
});

// FAQGRAPHICS

export const fetchFaqGraphics = () => dispatch => {

    dispatch(faqGraphicsLoading());

    setTimeout(() => {
        dispatch(addFaqGraphics(FAQGRAPHICS));
    }, 2000);
};

export const faqGraphicsLoading = () => ({
    type: ActionTypes.FAQGRAPHICS_LOADING
});

export const faqGraphicsFailed = errMess => ({
    type: ActionTypes.FAQGRAPHICS_FAILED,
    payload: errMess
});

export const addFaqGraphics = faqGraphics => ({
    type: ActionTypes.ADD_FAQGRAPHICS,
    payload: faqGraphics
});

// PHONEMODELS

export const fetchPhoneModels = () => dispatch => {

    dispatch(phoneModelsLoading());

    setTimeout(() => {
        dispatch(addPhoneModels(PHONEMODELS));
    }, 2000);
};

export const phoneModelsLoading = () => ({
    type: ActionTypes.PHONEMODELS_LOADING
});

export const phoneModelsFailed = errMess => ({
    type: ActionTypes.PHONEMODELS_FAILED,
    payload: errMess
});

export const addPhoneModels = phoneModels => ({
    type: ActionTypes.ADD_PHONEMODELS,
    payload: phoneModels
});

// NEWSGRAPHICS

export const fetchNewsGraphics = () => dispatch => {

    dispatch(newsGraphicsLoading());

    setTimeout(() => {
        dispatch(addNewsGraphics(NEWSGRAPHICS));
    }, 2000);
};

export const newsGraphicsLoading = () => ({
    type: ActionTypes.NEWSGRAPHICS_LOADING
});

export const newsGraphicsFailed = errMess => ({
    type: ActionTypes.NEWSGRAPHICS_FAILED,
    payload: errMess
});

export const addNewsGraphics = newsGraphics => ({
    type: ActionTypes.ADD_NEWSGRAPHICS,
    payload: newsGraphics
});

