import AbstractGlomoComponent from './abstract-glomo-component';

export default class BbvaWidgetCarouselAem extends AbstractGlomoComponent {
    constructor(args) {
        const defaultArgs = {
            name: 'bbva-widget-carousel-aem',
            elements: {
                carouselAem: 'carousel-aem',
                carouselSwipe: 'carousel-aem .swiper-container',
                activeCardLink: 'carousel-aem bbva-carousel-swipe bbva-panel-offer bbva-link',
                carouselSwipeCardLink: 'carousel-aem bbva-carousel-swipe bbva-panel-offer[content-title="__TITLE__"] [data-tag-name="bbva-link"]',
                carouserErrorMessage: 'carousel-aem bbva-notification-message'
            },
            requiredElements: [
                'carouselSwipe'
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'bbva-widget-carousel-aem:not([hidden])';
    }

    async scrollIntoView() {
        await this.carouselSwipe.waitForExist({timeout: config.wait.L});
        await this.carouselSwipe.scrollIntoView();
    }

    async isDisplayed() {
        return this.__root.isDisplayed();
    }
}
