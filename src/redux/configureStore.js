import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { GraphicsText } from './graphicsText';
import { TwoColumnGraphics } from './twoColumnGraphics';
import { CarouselGraphics } from './carouselGraphics';
import { FaqGraphics } from './faqGraphics';
import { PhoneModels } from './phoneModels';
import { NewsGraphics } from './newsGraphics';
import { InitialFeedback } from './preOrderForm'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            graphicsText: GraphicsText,
            twoColumnGraphics: TwoColumnGraphics,
            carouselGraphics: CarouselGraphics,
            faqGraphics: FaqGraphics,
            phoneModels: PhoneModels,
            newsGraphics: NewsGraphics,
            ...createForms({
                preOrderForm: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};