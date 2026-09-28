import AbstractGlomoPage from '../abstract-glomo-page';
import { page } from '@csqe/radish';

@page('FacialRecognition')
class FacialRecognition extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-facialRecognition[state="active"]',
            elements: {
                header: 'cells-molecule-header #titleZone span',
                moreInfo: 'bbva-panel-info div.content bbva-link',
                pdfAdvice: 'bbva-link',
                checkboxMark: '[data-tag-name="bbva-form-checkbox"]',
                startRegistrationButton: '[data-tag-name="bbva-button-default"]'
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica #titleZone span',
                moreInfo: 'bbva-panel-info-spherica div.content bbva-type-link',
                pdfAdvice:  'cells-list-file-spherica div.body',
                checkboxMark: '[data-tag-name="bbva-form-checkbox-spherica"]',
                startRegistrationButton: '[data-tag-name="bbva-button-default-spherica"]'
            },
            defaultSphericaElements: [
                'GlomoAlertManager'
            ],
            requiredElements: [
                'header'
            ]
        });
    }

    async openModal(modal){
        switch (modal) {
            case 'more info':
                await this.selectMoreInfo();
                break;
            case 'privacy notice':
                await this.selectPrivacy();
                break;
            default:
                throw new Error(`Error: The modal you are attempting to open does not exist [${modal}]. Please ensure the modal name is correct and it has been properly defined.`);
        }
    }

    async selectMoreInfo() {
        await this.moreInfo.waitForClickable({timeout: config.wait.M});
        await this.moreInfo.click();
    }

    async selectPrivacy() {
        await this.pdfAdvice.waitForClickable({timeout: config.wait.M});
        await this.pdfAdvice.click();
    }

    async markCheckbox() {
        await this.checkboxMark.waitForDisplayed({timeout: config.wait.M});
        await this.checkboxMark.waitForClickable({timeout: config.wait.M});
        await this.checkboxMark.click();
    }

    async startRegistration() {
        await this.startRegistrationButton.waitForClickable({timeout: config.wait.M});
        await this.startRegistrationButton.click();
    }
}

export default new FacialRecognition();
