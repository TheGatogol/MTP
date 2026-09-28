import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

// Constants
const WELCOME_SLIDES_ELEMENT_ERR = (key) => `[WELCOME] "${key}" is not visible/enabled`;

@page()
class WelcomeSlides extends AbstractGlomoPage {

    constructor() {
        super({
            root: '',
            elements: {
                back: {
                    web: '',
                    android: '//android.widget.ImageButton[@content-desc="Volver"]',
                    ios: '~welcome_back_button'
                },
                slides: {
                    web: '',
                    android: '//*[@resource-id="__PACKAGE__:id/viewPager"]',
                    ios: '(//XCUIElementTypeStaticText)[1]',
                },
                slidesIndicator: {
                    web: '',
                    android: '//*[@resource-id="__PACKAGE__:id/pageIndicator"]',
                    ios: '//XCUIElementTypePageIndicator',
                },
                next: {
                    web: '',
                    android: '//*[@resource-id="__PACKAGE__:id/nextButton"]',
                    ios: '//XCUIElementTypeButton[@name="welcome_understood_button_title"]'
                }
            },
            requiredElements: [
                'next',
            ],
            contextType: 'NATIVE_APP',
        });
    }

    async accessLogin() {
        await this.next.waitForDisplayed({timeout: config.wait.S});
        await this.next.click();
    }

    async goBack() {
        await this.back.waitForDisplayed({timeout: config.wait.S});
        await this.back.click();
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'Animation slides':
                await this.slides.waitForDisplayed({timeout: config.wait.S, errorMessage: WELCOME_SLIDES_ELEMENT_ERR(item)});
                break;
            case 'Enabled back button':
                await this.back.waitForDisplayed({timeout: config.wait.S, errorMessage: WELCOME_SLIDES_ELEMENT_ERR(item)});
                break;
            case 'Order slide indicator':
                await this.slidesIndicator.waitForDisplayed({timeout: config.wait.S, errorMessage: WELCOME_SLIDES_ELEMENT_ERR(item)});
                break;
            case 'Understand button':
                await this.next.waitForDisplayed({timeout: config.wait.S, errorMessage: WELCOME_SLIDES_ELEMENT_ERR(item)});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new WelcomeSlides();
