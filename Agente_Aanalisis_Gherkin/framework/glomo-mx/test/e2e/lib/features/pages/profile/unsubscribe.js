import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class Unsubscribe extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-unsubscribe[state="active"]',

            elements: {
                header: 'cells-molecule-header #titleZone span',
                back: 'cells-molecule-header #btnLeft',
                imgIcon: 'cells-info-content .imageContainer img',
                title: 'cells-info-content .singleContent .innerSection .title',
                description: 'cells-info-content .singleContent .innerSection .content',
                atmLocatorLink: 'cells-info-content .singleContent .unsubscribeDivBtn .link:nth-of-type(1)',
                phoneContactLink: 'cells-info-content .singleContent .unsubscribeDivBtn .link:nth-of-type(1)'

            },

            elementsSpherica: {
                header: 'cells-molecule-header-spherica #titleZone span',
                back: 'cells-molecule-header-spherica #btnLeft',
                imgIcon: 'cells-info-content-spherica cells-atom-icon-spherica',
                title: 'cells-info-content-spherica .singleContent .innerSection .title',
                description: 'cells-info-content-spherica .singleContent .innerSection .content',
                atmLocatorLink: 'cells-info-content-spherica .singleContent .unsubscribeDivBtn .link:nth-of-type(1)',
                phoneContactLink: 'cells-info-content-spherica .singleContent .unsubscribeDivBtn .link:nth-of-type(2)'
            },

            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image icon':
                await this.imgIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back':
                await this.back.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone contact link':
                await this.phoneContactLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'atm locator link':
                await this.atmLocatorLink.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async clickAtmLocatorLink() {
        await this.atmLocatorLink.waitForClickable();
        await this.atmLocatorLink.click();
    }

    async clickPhoneCallLink() {
        await this.phoneContactLink.waitForClickable();
        await this.phoneContactLink.click();
    }

}

export default new Unsubscribe();
