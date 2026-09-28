import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class AssistanceEmailPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-assistanceManagerEmail[state="active"]',
            elements: {
                header: '#assistanceManagerPage[data-tag-name="bbva-header-main"]',
                inputName: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-textarea"] [slot="_textarea"][aria-label="assistance-manager-email-label-text"]',
                continueButton: '[data-tag-name="bbva-button-default"][variant="primary"]',
                messageSend: '#helpModalTitle',
                imgSuccess: 'bbva-banner-image figure slot img',
                successContent: '#assistanceManagerModal bbva-text:nth-child(3)',
                successExit: 'div div.content section div div.modal-footer slot div bbva-button-default',
                showData: 'bbva-list-link[data-tag-name="bbva-list-link"] [data-tag-name="bbva-link"]:nth-child(2) .link-text',
            },
            elementsSpherica: {
                header: '#assistanceManagerPage[data-tag-name="bbva-header-main-spherica"]',
                inputName: '[data-tag-name="bbva-form-input-spherica"] [data-tag-name="bbva-form-textarea"] [slot="_textarea"][aria-label="assistance-manager-email-label-text"]',
                continueButton: '[data-tag-name="bbva-button-default-spherica"]',
                messageSend: '#helpModalTitle',
                imgSuccess: 'bbva-clip-microillustration-spherica[data-tag-name="bbva-clip-microillustration-spherica"] img',
                successContent: '#assistanceManagerModal bbva-type-text-spherica:nth-child(3)',
                successExit: '[data-tag-name="bbva-button-default-spherica"]',
                showData: 'bbva-aggregation-link-list-spherica[data-tag-name="bbva-aggregation-link-list-spherica"] [data-tag-name="bbva-type-link"]#bbva-link-1',
            },
            requiredElements: ['header'],
        });
    }
    async insertInput(name) {
        await this.inputName.waitForDisplayed({timeout: config.wait.L});
        await this.inputName.waitForClickable({timeout: config.wait.L});
        await this.inputName.click();
        await this.inputName.setValue({value: name});
    }

    async accessAssistanceSuccess() {
        await (await this.continueButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async accessShowData() {
        await browser.pause(200);
        await (await this.showData.waitForDisplayed({timeout: config.wait.L})).click();
    }

    async confirmShowData(otp = '11111111') {
        await this.fillOtp(otp);
        await this.waitUntilSpinnerVeil({timeoutToDisappear: config.wait.XL});
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message title':
                await this.messageSend.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success img':
                await this.imgSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success content':
                await this.successContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success exit':
                await this.successExit.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new AssistanceEmailPage();
