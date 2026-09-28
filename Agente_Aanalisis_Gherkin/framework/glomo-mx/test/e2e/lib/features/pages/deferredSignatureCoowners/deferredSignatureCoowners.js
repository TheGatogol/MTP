import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
@page()
class DeferredSignatureCoowners extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-deferredSignatureCoowners[state="active"]',
            elements: {
                modalContract: {
                    properties: {
                        root: '[data-tag-name="bbva-feature-contract-signing-mx"]'
                    },
                    confirmButton: '[data-tag-name="contract-signing-multistep"] [text="bbva-feature-contract-signing-contract-signing-sign"]',
                    header: '[data-tag-name="bbva-header-main"][variant="modal-initial-secondary"]',
                    btnClose: '[data-tag-name="bbva-header-main"][variant="modal-initial-secondary"] #btn-close',
                    patrimonialSection: '[data-tag-name="contract-signing-multistep"] #fund-step',
                    legendTerms: '[data-tag-name="contract-signing-multistep"] #terms-condition-step #heading',
                    linkOne: '[data-tag-name="contract-signing-multistep"] [data-tag-name="bbva-expandable-multistep"] #terms-condition-step #terms-condition-step-expanded [data-tag-name="contract-signing-list-document"] #AEH',
                    linkTwo: '[data-tag-name="contract-signing-multistep"] [data-tag-name="bbva-expandable-multistep"] #terms-condition-step #terms-condition-step-expanded [data-tag-name="contract-signing-list-document"] #AEG',
                    linkThree: '[data-tag-name="contract-signing-multistep"] [data-tag-name="bbva-expandable-multistep"] #terms-condition-step #terms-condition-step-expanded [data-tag-name="contract-signing-list-document"] [aria-label="Anexo de datos generales"]',
                    linkFour: '[data-tag-name="contract-signing-multistep"] [data-tag-name="bbva-expandable-multistep"] #terms-condition-step #terms-condition-step-expanded [data-tag-name="contract-signing-list-document"] [aria-label="Perfil de inversion"]',
                    checkboxTerm: '[data-tag-name="contract-signing-multistep"] [data-tag-name="bbva-expandable-step"] [data-tag-name="terms-condition-step"] [data-tag-name="bbva-form-checkbox"] [data-tag-name="bbva-form-checkbox-input"]',
                    continueButton: '[data-tag-name="contract-signing-multistep"] [data-tag-name="bbva-expandable-step"] [data-tag-name="terms-condition-step"] #continue-button',
                    reviewAndSignHeader: '#modal-review .help-modal [data-tag-name="bbva-header-main"] header',
                    btnCloseSuccess: '#modal-review .help-modal [data-tag-name="bbva-header-main"] header #btn-close',
                    operationData: '#modal-review [data-tag-name="contract-signing-review"] .body-content',
                    successfullSign: '#modal-review [data-tag-name="contract-signing-review"] [data-tag-name="contract-signing-panel-info"] [data-tag-name="bbva-type-text"]',
                    linkShare: '#modal-review [data-tag-name="contract-signing-review"] [data-tag-name="bbva-button-row"] #buttons .only-one-item [data-tag-name="bbva-button-action"]',
                    buttonClose: 'contract-signing-modal-manager [data-tag-name="bbva-header-main"] header #btn-close',
                    buttonExit: 'contract-signing-modal-manager [data-tag-name="bbva-help-modal"] .button-modal [data-tag-name="bbva-button-default"]'
                },
            },
            requiredElements: [
                'modalContract'
            ],
        });
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.modalContract.header.scrollIntoView();
                await this.modalContract.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'close button':
                await this.modalContract.btnClose.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'patrimonial section':
                await this.modalContract.patrimonialSection.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'legend terms':
                await this.modalContract.legendTerms.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link one':
                await this.modalContract.linkOne.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link two':
                await this.modalContract.linkTwo.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link three':
                await this.modalContract.linkThree.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link four':
                await this.modalContract.linkFour.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'checkbox terms':
                await this.modalContract.checkboxTerm.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'continue button terms':
                await this.modalContract.continueButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'review and sign success':
                await this.modalContract.reviewAndSignHeader.scrollIntoView();
                await this.modalContract.reviewAndSignHeader.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'button close success':
                await this.modalContract.btnCloseSuccess.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'operation data section':
                await this.modalContract.operationData.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'succesfull sign':
                await this.modalContract.successfullSign.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'share link':
                await this.modalContract.linkShare.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }
    async checkTermsAndConditions() {
        await this.modalContract.checkboxTerm.scrollIntoView();
        await this.modalContract.checkboxTerm.waitForDisplayed({ timeout: config.wait.L });
        await this.modalContract.checkboxTerm.click();
    }
    async completeResume() {
        await this.modalContract.checkboxTerm.scrollIntoView();
        await this.modalContract.continueButton.waitForDisplayed({ timeout: config.wait.L });
        await this.modalContract.continueButton.click();
    }
    async completeStep() {
        await this.modalContract.checkboxTerm.scrollIntoView();
        await this.modalContract.confirmButton.waitForDisplayed({ timeout: config.wait.L });
        await this.modalContract.confirmButton.click();
    }
    async confirmOtp() {
        await this.fillOtp('12345678');
    }
    async exitProcess(option) {
        if (option === 'dashboard') {
            await this.modalContract.buttonExit.waitForDisplayed({ timeout: config.wait.M });
            await this.modalContract.buttonExit.click();
        } else {
            await this.modalContract.buttonClose.waitForDisplayed({ timeout: config.wait.M });
            await this.modalContract.buttonClose.click();
        }

    }
}
export default new DeferredSignatureCoowners();
