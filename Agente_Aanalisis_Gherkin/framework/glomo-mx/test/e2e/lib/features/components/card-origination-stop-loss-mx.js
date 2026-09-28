import { ElementValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoComponent from './abstract-glomo-component';
import BbvaHelpModal from './bbva-help-modal';

export default class CardOriginationStopLossMx extends AbstractGlomoComponent {
    constructor(args) {
        super(Object.assign({
            name: 'card-origination-stop-loss-mx',
            elements: {
                benefitsModal: [
                    BbvaHelpModal,
                    {
                        modifiers: '#stopLossBenefitsModal',
                        additionalElements: {
                            benefitDescription: '#benefitDescription',
                            benefitImage: '#benefitIllustration',
                            benefitTitle: '#benefitTitle',
                            exitBtn: '.footer-button.link',
                        }
                    }
                ],
                informationErrorModal: [
                    BbvaHelpModal,
                    {
                        modifiers: '#stopLossErrorBenefitsModal',
                        additionalElements: {
                            errorTitle: '#title-text',
                            errorDescription: '#description-text',
                        }
                    }
                ],
                serviceErrorModal: [
                    BbvaHelpModal,
                    {
                        modifiers: '#stopLossErrorServiceModal',
                        additionalElements: {
                            errorTitle: '#title-text',
                            errorDescription: '#description-text',
                        }
                    }
                ]
            }
        }, args));
        this.CONFIRM_RETURN = 'confirms the return';
        this.CONFIRM_EXIT = 'confirms the exit';
        this.RETRY_ERROR_INFORMATION = 'retry three times the error information';
        this.STOP_LOSS_BENEFITS_HEADER = 'stop loss benefits header';
        this.STOP_LOSS_BENEFITS_CLOSE_BUTTON = 'stop loss benefits close button';
        this.STOP_LOSS_BENEFIT_IMAGE = 'stop loss benefit image';
        this.STOP_LOSS_BENEFIT_TITLE = 'stop loss benefit title';
        this.STOP_LOSS_BENEFIT_DESCRIPTION = 'stop loss benefit description';
        this.STOP_LOSS_OFFER_RETURN_BUTTON = 'stop loss offer return button';
        this.STOP_LOSS_OFFER_EXIT_BUTTON = 'stop loss offer exit button';
        this.STOP_LOSS_ERROR_INFORMATION_HEADER = 'stop loss error information header';
        this.STOP_LOSS_ERROR_INFORMATION_CLOSE_BUTTON = 'stop loss error information close button';
        this.STOP_LOSS_ERROR_INFORMATION_TITLE = 'stop loss error information title';
        this.STOP_LOSS_ERROR_INFORMATION_DESCRIPTION = 'stop loss error information description';
        this.STOP_LOSS_ERROR_INFORMATION_EXIT_BUTTON = 'stop loss error information exit button';
        this.STOP_LOSS_ERROR_SERVICE_HEADER = 'stop loss error service header';
        this.STOP_LOSS_ERROR_SERVICE_CLOSE_BUTTON = 'stop loss error service close button';
        this.STOP_LOSS_ERROR_SERVICE_TITLE = 'stop loss error service title';
        this.STOP_LOSS_ERROR_SERVICE_DESCRIPTION = 'stop loss error service description';
        this.STOP_LOSS_ERROR_SERVICE_EXIT_BUTTON = 'stop loss error service exit button';
    }

    static get _baseRoot() {
        return {
            web: '.__modals-container',
            isWithoutRoot: true,
        };
    }

    async isDisplayed() {
        return this.__root.isDisplayed();
    }
    async _retryStopLossErrorInformation() {
        for (let i = 0; i < 3; i++) {
            await this.informationErrorModal.acceptBtn.waitForDisplayed({ timeout: config.wait.L });
            await this.informationErrorModal.acceptBtn.click();
        }
    }

    async stopLossActions(item) {
        switch (item.toLowerCase()) {
            case this.CONFIRM_RETURN:
                await (await this.benefitsModal.acceptBtn.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case this.CONFIRM_EXIT:
                await (await this.benefitsModal.additionalElements.exitBtn.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case this.RETRY_ERROR_INFORMATION:
                await this._retryStopLossErrorInformation();
                break;
            default:
                throw new Error(`Unknown action name: ${item}`);
        }
    }

    async elementValidation({ item, ...args } = {}) {
        switch (item.toLowerCase()) {
            case this.STOP_LOSS_BENEFITS_HEADER:
                await this.benefitsModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_BENEFITS_CLOSE_BUTTON:
                await this.benefitsModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_BENEFIT_IMAGE:
                await this.benefitsModal.additionalElements.benefitImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_BENEFIT_TITLE:
                await this.benefitsModal.additionalElements.benefitTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_BENEFIT_DESCRIPTION:
                await this.benefitsModal.additionalElements.benefitDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_OFFER_RETURN_BUTTON:
                await this.benefitsModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_OFFER_EXIT_BUTTON:
                await this.benefitsModal.additionalElements.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_ERROR_INFORMATION_HEADER:
                await this.informationErrorModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_ERROR_INFORMATION_CLOSE_BUTTON:
                await this.informationErrorModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_ERROR_INFORMATION_TITLE:
                await this.informationErrorModal.additionalElements.errorTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_ERROR_INFORMATION_DESCRIPTION:
                await this.informationErrorModal.additionalElements.errorDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_ERROR_INFORMATION_EXIT_BUTTON:
                await this.informationErrorModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_ERROR_SERVICE_HEADER:
                await this.serviceErrorModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_ERROR_SERVICE_CLOSE_BUTTON:
                await this.serviceErrorModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_ERROR_SERVICE_TITLE:
                await this.serviceErrorModal.additionalElements.errorTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_ERROR_SERVICE_DESCRIPTION:
                await this.serviceErrorModal.additionalElements.errorDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.STOP_LOSS_ERROR_SERVICE_EXIT_BUTTON:
                await this.serviceErrorModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ElementValidationKeyNotFound({key: item, args: {item, ...args}});
        }
    }
}
