import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Social from './SocialMediaComponent';
import UpToDate from './UpToDateComponent';
import PreOrder from './PreOrderComponent';
import PreOrderLayout from './PreOrderLayoutComponent';
import Faq from './FaqComponent';
import Carousel from './CarouselComponent';
import TechSpec from './TechSpecComponent';
import HomeIntro from './HomeIntroComponent';
import Sustainability from './SustainabilityComponent';
import Customize from './CustomizeComponent';
import News from './NewsComponent';
import NewsContent from './NewsContentComponent';
import FaqContent from './FaqContentComponent';
import Hero from './HeroComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { fetchGraphicsText, fetchTwoColumnGraphics, fetchCarouselGraphics, fetchFaqGraphics, fetchPhoneModels, fetchNewsGraphics } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        graphicsText: state.graphicsText,
        twoColumnGraphics: state.twoColumnGraphics,
        carouselGraphics: state.carouselGraphics,
        faqGraphics: state.faqGraphics,
        phoneModels: state.phoneModels,
        newsGraphics: state.newsGraphics,
    };
};

const mapDispatchToProps = {
    fetchGraphicsText: () => (fetchGraphicsText()),
    fetchTwoColumnGraphics: () => (fetchTwoColumnGraphics()),
    fetchCarouselGraphics: () => (fetchCarouselGraphics()),
    fetchFaqGraphics: () => (fetchFaqGraphics()),
    fetchPhoneModels: () => (fetchPhoneModels()),
    fetchNewsGraphics: () => (fetchNewsGraphics()),
    resetPreOrderForm: () => (actions.reset('preOrderForm'))
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchGraphicsText();
        this.props.fetchTwoColumnGraphics();
        this.props.fetchCarouselGraphics();
        this.props.fetchFaqGraphics();
        this.props.fetchPhoneModels();
        this.props.fetchNewsGraphics();
    }


    render() {
        const MainPage = () => {
            return (
                <>
                    <Hero
                        graphics={this.props.graphicsText.graphicsText.filter(graph => graph.id === 0)}
                        isLoading={this.props.graphicsText.isLoading}
                        errMess={this.props.graphicsText.errMess}

                    />
                    <HomeIntro
                        twoColumnGraphic={this.props.twoColumnGraphics.twoColumnGraphics}
                        isLoading={this.props.twoColumnGraphics.isLoading}
                        errMess={this.props.twoColumnGraphics.errMess}
                    />
                    <Carousel
                        carouselGraphic={this.props.carouselGraphics.carouselGraphics}
                        isLoading={this.props.carouselGraphics.isLoading}
                        errMess={this.props.carouselGraphics.errMess}
                    />
                    <Customize
                        graphics={this.props.graphicsText.graphicsText}
                        isLoading={this.props.graphicsText.isLoading}
                        errMess={this.props.graphicsText.errMess}
                    />
                    <TechSpec
                        twoColumnGraphic={this.props.twoColumnGraphics.twoColumnGraphics}
                        isLoading={this.props.twoColumnGraphics.isLoading}
                        errMess={this.props.twoColumnGraphics.errMess}
                    />
                    <Sustainability
                        graphics={this.props.graphicsText.graphicsText}
                        isLoading={this.props.graphicsText.isLoading}
                        errMess={this.props.graphicsText.errMess} />
                </>
            );
        };
        const FooterComponents = () => {
            return (
                <>
                    <Social />
                    <UpToDate />
                    <Footer />
                </>
            );
        };

        const NewsComponent = () => {
            return (
                <>
                    <News
                        graphics={this.props.graphicsText.graphicsText}
                        isLoading={this.props.graphicsText.isLoading}
                        errMess={this.props.graphicsText.errMess} />
                    <NewsContent
                        newsGraphic={this.props.newsGraphics.newsGraphics}
                        isLoading={this.props.newsGraphics.isLoading}
                        errMess={this.props.newsGraphics.errMess} />
                </>
            );
        };

        const FaqComponent = () => {
            return (
                <>
                    <Faq
                        graphics={this.props.graphicsText.graphicsText}
                        isLoading={this.props.graphicsText.isLoading}
                        errMess={this.props.graphicsText.errMess} />
                    <FaqContent
                        faqGraphic={this.props.faqGraphics.faqGraphics}
                        isLoading={this.props.faqGraphics.isLoading}
                        errMess={this.props.faqGraphics.errMess} />
                </>
            );
        };

        const PreOrdeComponent = () => {
            return (
                <>
                    <PreOrder
                        graphics={this.props.graphicsText.graphicsText}
                        isLoading={this.props.graphicsText.isLoading}
                        errMess={this.props.graphicsText.errMess} />
                    <PreOrderLayout
                        phoneModel={this.props.phoneModels.phoneModels}
                        isLoading={this.props.phoneModels.isLoading}
                        errMess={this.props.phoneModels.errMess}
                        carouselGraphic={this.props.carouselGraphics.carouselGraphics}
                        isLoading={this.props.carouselGraphics.isLoading}
                        errMess={this.props.carouselGraphics.errMess}
                        resetPreOrderForm={this.props.resetPreOrderForm}
                    />
                </>
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={MainPage} />
                    <Route exact path='/preorder' component={PreOrdeComponent} />
                    <Route exact path='/news' component={NewsComponent} />
                    <Route exact path='/faq' component={FaqComponent} />
                    <Redirect to='/home' />
                </Switch>
                <FooterComponents />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));