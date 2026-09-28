import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page('FacialRecognitionSuccessRegistration')
class FacialRecognitionSuccessRegistration extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-facialRecognitionSuccessRegistration[state="active"]',
            elements: {
                header: 'cells-molecule-header span',
                iconSuccess: 'cells-successful-response div.head-icon-white cells-contact-avatar .wrapper #avatarImg',
                titleText: 'cells-successful-response div.main-text-head span',
                textDescription: 'cells-successful-response #body-section ul li div.key-value-container span.value',
                exitButton: 'cells-successful-response #primaryBtn'
            },
            elementsSpherica : {
                header: 'cells-molecule-header-spherica span',
                iconSuccess: 'cells-successful-response-spherica #header-section cells-atom-icon-spherica',
                titleText: 'cells-successful-response-spherica #header-section',
                textDescription: 'cells-successful-response-spherica #body-section',
                exitButton: 'cells-successful-response-spherica #primaryBtn'
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
            case 'icon success':
                await this.iconSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title text':
                await this.titleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text description':
                await this.textDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async exitFlow() {
        await this.exitButton.waitForClickable({timeout: config.wait.M});
        await this.exitButton.click();
    }
}

export default new FacialRecognitionSuccessRegistration();
