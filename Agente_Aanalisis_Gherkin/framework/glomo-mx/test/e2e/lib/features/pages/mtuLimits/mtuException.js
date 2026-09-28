import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page('MtuException')
class MtuException extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-mtuException[state="active"]',
            elements: {
                limitExceeded: {
                    properties: {root: '#limitExceeded'},
                    header: '[data-tag-name="bbva-header-main"]',
                    microillustration: '[data-tag-name="bbva-clip-microillustration"] svg',
                    title: '[data-tag-name="bbva-text"][size="L"]',
                    firstParagraph: '#firstParagraph',
                    secondParagraph: '#secondParagraph',
                    buttonContinue: '[data-tag-name="bbva-button-default"][variant="primary"]',
                    link: '[data-tag-name="bbva-button-default"][variant="link"]',
                },
                confirmException: {
                    properties: {root: '#confirmException'},
                    header: '[data-tag-name="bbva-header-main"]',
                    microillustration: '[data-tag-name="bbva-clip-microillustration"]',
                    title: '[data-tag-name="bbva-text"][font-weight="500"]',
                    description: '[data-tag-name="bbva-text"][font-weight="350"]',
                    timer: '[data-tag-name="bbva-progress-timer"]',
                    linkCode: '.content-container-request-button',
                    inputConfirmException: '.content-container [data-tag-name="bbva-form-input"]',
                    input: '[data-tag-name="bbva-form-input"] input[slot="_input"]',
                    buttonConfirm: '[data-tag-name="bbva-button-default"][variant="primary"]',
                },
                confirmationMaxLimit: {
                    properties: {root: '#confirmationMaxLimit'},
                    header: '[data-tag-name="bbva-header-main"]',
                    microillustration: '[data-tag-name="bbva-clip-microillustration"]',
                    title: '#bbvaTextShort',
                    description: '#bbvaTextLarge',
                    buttonContinue: '[data-tag-name="bbva-button-default"]',
                    closeButton: '#btn-right-primary [data-tag-name="bbva-icon"]',
                },
                container: '[data-tag-name="bbva-transition-container"][visible]',
            },
            elementsSpherica: {
                limitExceeded: {
                    microillustration: '[data-tag-name="bbva-clip-microillustration"]',
                    title: '[data-tag-name="bbva-type-text"][size="2XL"]',
                },
                confirmException: {
                    buttonConfirm: '[data-tag-name="bbva-button-default"][variant="positive"]',
                },
                confirmationMaxLimit: {
                    closeButton: '[data-tag-name="bbva-header-main"] .header-icons #btn-close',
                    microillustration: '[data-tag-name="bbva-type-icon"]',
                    title: '.content-container .success-container .title',
                    description: '.content-container .success-container .subtitle-text',
                },
            },
            requiredElements: [
                'container'
            ]
        });
    }

    async _screenValidation({item} = {}) {
        switch (item) {
            case 'header limit exceeded':
                await this.limitExceeded.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'microillustration limit exceeded':
                await this.limitExceeded.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title limit exceeded':
                await this.limitExceeded.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first paragraph limit exceeded':
                await this.limitExceeded.firstParagraph.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second paragraph limit exceeded':
                await this.limitExceeded.secondParagraph.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button limit exceeded':
                await this.limitExceeded.buttonContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link limit exceeded':
                await this.limitExceeded.link.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header confirmation max limit':
                await this.confirmationMaxLimit.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'microillustration confirmation max limit':
                await this.confirmationMaxLimit.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title confirmation max limit':
                await this.confirmationMaxLimit.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description confirmation max limit':
                await this.confirmationMaxLimit.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button confirmation max limit':
                await this.confirmationMaxLimit.buttonContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button confirmation max limit':
                await this.confirmationMaxLimit.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async fillInputCode() {
        await this.confirmException.input.waitForDisplayed({timeout: config.wait.M});
        await this.confirmException.input.click();
        await this.confirmException.input.setValue('12345678');
    }

    async confirmMtuLimitExceeded() {
        await this.limitExceeded.buttonContinue.scrollIntoView();
        await this.limitExceeded.buttonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.limitExceeded.buttonContinue.click();
    }

    async confirmMTUException() {
        await this.confirmMtuLimitExceeded();
        await this.fillInputCode();
        await this.confirmException.buttonConfirm.waitForDisplayed({timeout: config.wait.M});
        await this.confirmException.buttonConfirm.click();
    }

    async otpConfirmException() {
        await this.confirmException.inputConfirmException.waitForDisplayed({timeout: config.wait.M});
        await this.confirmException.inputConfirmException.waitForClickable({timeout: config.wait.L});
        await this.confirmException.inputConfirmException.click();
        await this.confirmException.__root.execute({script: () => this.codeToConfirm = '12345678'});
    }

    async accessMtuLimitExceeded() {
        await this.limitExceeded.buttonContinue.execute({
            script: () => {
                this.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            }
        });
    }

    async processMtuException() {
        await this.accessMtuLimitExceeded();
        await this.otpConfirmException();
        await this.confirmException.buttonConfirm.waitForDisplayed({ timeout: config.wait.M });
        await this.confirmException.buttonConfirm.click();
    }
}

export default new MtuException();
