import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class DigitalCardGenerate extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-digitalCardGenerate[state="active"]',
            elements: {
                mainModal: {
                    properties: { root: 'digital-card-activation-content-main' },
                    mainModal: '[data-tag-name="bbva-help-modal"]',
                    iconClose: '[data-tag-name="bbva-help-modal"] #btn-close',
                    checkbox: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-form-checkbox"]',
                    button: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"]',
                },
                successModal: {
                    properties: { root: 'digital-card-activation-success' },
                    helpModalSuccess: '[data-tag-name="bbva-help-modal"]',
                    iconSuccess: '[data-tag-name="bbva-help-modal"] .content-icon',
                    bodyTextSuccess: '[data-tag-name="bbva-help-modal"] .content-body-success',
                    dataContainerSuccess: '[data-tag-name="bbva-help-modal"] .info-data-success-main-container',
                    dateActivationSuccess: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-type-date"]',
                },
                halfmodal: {
                    properties: { root: 'modal-half-error' },
                    halfModalError: '[data-tag-name="bbva-help-modal"]',
                    retyButtonError: '[data-tag-name="bbva-button-default"]:nth-child(1)',
                },
                fullModal: {
                    properties: { root: 'modal-full-error' },
                    understoodError: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"]',
                },
                invitacionalModal: {
                    properties: { root: 'cardless-withdrawal-modal' },
                    headerCardless: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-header-main"]',
                    illustrationCardless: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-clip-microillustration"]',
                    messageCardless: '[data-tag-name="bbva-help-modal"] .panel-information-body-text',
                    activateCardCardless: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"]',
                }
            },
            requiredElements: ['root']
        });
    }

    async createDigitalCard() {
        await this.mainModal.mainModal.waitForDisplayed({ timeout: config.wait.M });
        await this.mainModal.checkbox.waitForDisplayed({ timeout: config.wait.M });
        await this.mainModal.button.waitForDisplayed({ timeout: config.wait.M });
        await this.mainModal.mainModal.scrollIntoView();
        await this.mainModal.checkbox.click();
        await this.mainModal.button.waitForEnabled({timeout: config.wait.M});
        await this.mainModal.button.click();
    }

    async retryAccess(times) {
        if (times === 'max') {
            times = 3;
            for (let p = 0; p < times; p++) {
                await this.halfmodal.halfModalError.waitForDisplayed({ timeout: config.wait.M });
                await this.halfmodal.halfModalError.waitForAnimation({ timeout: config.wait.M });
                await this.halfmodal.retyButtonError.waitForDisplayed({ timeout: config.wait.M });
                await this.halfmodal.retyButtonError.click();
            }
        }
    }

    async _screenValidation({ item } = {}) {
        switch (item.toLowerCase()) {
            case 'success modal':
                await this.successModal.helpModalSuccess.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'date activation success':
                await this.successModal.dateActivationSuccess.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'icon success':
                await this.successModal.iconSuccess.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'body text success':
                await this.successModal.bodyTextSuccess.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'data container success':
                await this.successModal.dataContainerSuccess.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'understood button':
                await this.fullModal.understoodError.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header modal invitational':
                await this.invitacionalModal.headerCardless.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'cardless illustration':
                await this.invitacionalModal.illustrationCardless.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'message title cardless':
                await this.invitacionalModal.messageCardless.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'activate card':
                await this.invitacionalModal.activateCardCardless.waitForDisplayed({ timeout: config.wait.L });
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async exitScreen() {
        await ( await ( await this.mainModal.iconClose.waitForDisplayed({ timeout: config.wait.M })) .waitForClickable({ timeout: config.wait.M })) .click();
    }

}

export default new DigitalCardGenerate();
