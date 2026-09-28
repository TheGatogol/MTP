import AbstractGlomoPage from '../abstract-glomo-page';

import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class AboutPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-aboutPage[state="active"]',
            elements: {
                links: 'glomo-button-list',
                aboutLink: 'glomo-button-list cells-st-button.link .glomo-about-list-about',
                termsLink: 'cells-st-button.link:nth-of-type(2)',
                feedbackLink: 'cells-st-button.link:nth-of-type(3)',
                whatsNewLink: 'cells-st-button.link:nth-of-type(4)',
                back: 'button#btnLeft',
                title: 'h1#titleZone'
            },
            elementsSpherica: {
                links: 'glomo-button-list-spherica',
                aboutLink: 'glomo-button-list-spherica cells-st-button-spherica.link .glomo-about-list-about',
                termsLink: 'cells-st-button-spherica.link:nth-of-type(2)',
                feedbackLink: 'cells-st-button-spherica.link:nth-of-type(3)',
                whatsNewLink: 'cells-st-button-spherica.link:nth-of-type(4)'
            },
            requiredElements: [
                'links',
                'title',
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.back.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'about link':
                await this.aboutLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms link':
                await this.termsLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'feedback link':
                await this.feedbackLink.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessToFeedback() {
        await this.feedbackLink.waitForClickable();
        await this.feedbackLink.click();

        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.L
        });
    }

    async accessToTermsAndConditions() {
        await this.termsLink.waitForClickable();
        await this.termsLink.click();

        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.L
        });
    }

    async accessToAboutInfo() {
        await this.aboutLink.waitForClickable();
        await this.aboutLink.click();
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.L
        });
    }

    async accessToWhatsNew() {
        await this.whatsNewLink.waitForClickable();
        await this.whatsNewLink.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L});
    }

    async goBack() {
        await this.back.waitForDisplayed({timeout: config.wait.M});
        await this.back.click();
    }
}

export default new AboutPage();
