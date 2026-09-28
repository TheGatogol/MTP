import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page('FacialRecognitionMoreInfo')
class FacialRecognitionMoreInfo extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-facialRecognitionMoreInfo[state="active"]',
            elements: {
                header: 'cells-molecule-header #titleZone span',
                iconMobile: 'bbva-panel-info div.image span svg',
                titleText: 'bbva-panel-info div.content bbva-text.title h2',
                textDescription: 'bbva-panel-info div.content bbva-text.description p',
                accordionList: 'bbva-expandable-accordion-list',
                continueButton: 'bbva-button-default'
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica #titleZone span',
                iconMobile: 'bbva-panel-info-spherica div.image bbva-clip-microillustration',
                titleText: 'bbva-panel-info-spherica div.content bbva-type-text.title h2',
                textDescription: 'bbva-panel-info-spherica div.content bbva-type-text.description p',
                accordionList: 'bbva-expandable-accordion-list-spherica'
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
            case 'icon mobile':
                await this.iconMobile.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title text':
                await this.titleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text description':
                await this.textDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accordion list':
                await this.accordionList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new FacialRecognitionMoreInfo();
