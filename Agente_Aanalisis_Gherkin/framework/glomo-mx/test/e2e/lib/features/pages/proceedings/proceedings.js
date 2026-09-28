import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page()
class Proceedings extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-proceedings[state="active"]',
            elements: {
                genericModal: [
                    BbvaHelpModal, {
                        modifiers: '[visible]',
                        additionalElements: {
                            //onboarding
                            btnCloseProceedings: 'header .header-main .header-icons button',
                            titleModal: 'header',

                            //multistep
                            identityValidation: '[data-tag-name="bbva-expandable-multistep-index"]#identity-validation',
                            kycValidation: '[data-tag-name="bbva-expandable-multistep-index"]#kyc-validation',
                            confirmInformation: '[data-tag-name="bbva-expandable-multistep-index"]#confirm-information',
                            linkAddress: '[data-tag-name="bbva-expandable-step"]#home-data [data-tag-name="bbva-type-link"]',
                            btnConfirmInfo: '[data-tag-name="bbva-button-default"]#confirm-information',
                            btnUpgradeAccount: '[data-tag-name="bbva-button-default"]#confirm-button-level-upgrade',
                            btnUpdateTaskKycHighRisk: '[data-tag-name="bbva-button-default"]#confirm-button-update-task-kyc-high-risk',
                            btnConfirmInfoKycHighRisk: '#div-button-kyc-high-risk-questionaire [data-tag-name="bbva-button-default"]#kyc-high-risk-questionaire',

                            //Alert Modal
                            btnCloseAlert: '[text="user-info-proceedings-mx-half-modal-exit-operation"] #btn-close',
                            btnExitProceedings: '.modal-main .modal-footer [data-tag-name="bbva-button-default"][text="user-info-proceedings-mx-half-modal-exit"]',
                            btnContinueProceedings: '.modal-main .modal-footer [data-tag-name="bbva-type-link"]',

                            //Error Modal
                            titleError: '[text="user-info-proceedings-mx-half-modal-error"] header',
                            descriptionError: '[text="user-info-proceedings-mx-half-modal-retry-message"]',
                            btnRetry: '[text="user-info-proceedings-mx-half-modal-retry"]',
                            btnExit: '[text="user-info-proceedings-mx-half-modal-header-error"]',
                        }
                    },
                ],
            },
            elementsSpherica: {
                genericModal: [
                    BbvaHelpModal, {
                        modifiers: '[visible]',
                        additionalElements: {
                            //onboarding
                            btnCloseProceedings: 'header .header-icons button',

                            //Alert Modal
                            btnContinueProceedings: '.modal-main .modal-footer [data-tag-name=bbva-button-default].footer-button.link',

                            //Error Modal
                            titleError: '[text="user-info-proceedings-mx-half-modal-title-error-spherica"] header',

                            kycHighRiskQuestionaire: '[data-tag-name="bbva-expandable-multistep"] [id="kyc-high-risk-questionaire"] [class="container"]',
                            confirmLevelUpgradeBtn: '#confirm-button-level-upgrade'
                        }
                    }
                ],
            },
            requiredElements: ['genericModal.__root'],
        });
    }

    async identityValidation() {
        await this.genericModal.additionalElements.identityValidation.waitForDisplayed({timeout: config.wait.M});
        await this.genericModal.additionalElements.identityValidation.waitForClickable({timeout: config.wait.M});
        await this.genericModal.additionalElements.identityValidation.click();
    }

    async kycValidation() {
        await this.genericModal.additionalElements.kycValidation.waitForDisplayed({timeout: config.wait.M});
        await this.genericModal.additionalElements.kycValidation.waitForClickable({timeout: config.wait.M});
        await this.genericModal.additionalElements.kycValidation.click();
    }

    async confirmInformationValidation() {
        await this.genericModal.additionalElements.confirmInformation.waitForDisplayed({timeout: config.wait.M});
        await this.genericModal.additionalElements.confirmInformation.waitForClickable({timeout: config.wait.M});
        await this.genericModal.additionalElements.confirmInformation.click();
    }

    async confirmInformation() {
        await this.genericModal.additionalElements.btnConfirmInfo.waitForDisplayed({timeout: config.wait.M});
        await this.genericModal.additionalElements.btnConfirmInfo.waitForAnimation({timeout: config.wait.L});
        await this.genericModal.additionalElements.btnConfirmInfo.click();
        await this.fillOtp('10671111');
    }

    async kycValidationHighRisk() {
        await this.genericModal.additionalElements.kycHighRiskQuestionaire.waitForDisplayed({timeout: config.wait.M});
        await this.genericModal.additionalElements.kycHighRiskQuestionaire.waitForClickable({timeout: config.wait.M});
        await this.genericModal.additionalElements.kycHighRiskQuestionaire.click();
    }

    async confirmInformationKycHighRiskModule() {
        await this.genericModal.additionalElements.btnConfirmInfoKycHighRisk.waitForDisplayed({timeout: config.wait.M});
        await this.genericModal.additionalElements.btnConfirmInfoKycHighRisk.waitForClickable({timeout: config.wait.M});
        await this.genericModal.additionalElements.btnConfirmInfoKycHighRisk.click();
    }

    async confirmProceedings() {
        await this.genericModal.additionalElements.btnUpgradeAccount.waitForDisplayed({timeout: config.wait.M});
        await this.genericModal.additionalElements.btnUpgradeAccount.waitForClickable({timeout: config.wait.M});
        await this.genericModal.additionalElements.btnUpgradeAccount.click();
    }

    async confirmUpdateTaskKycHighRiskProceedings() {
        await this.genericModal.additionalElements.btnUpdateTaskKycHighRisk.waitForDisplayed({timeout: config.wait.M});
        await this.genericModal.additionalElements.btnUpdateTaskKycHighRisk.waitForClickable({timeout: config.wait.M});
        await this.genericModal.additionalElements.btnUpdateTaskKycHighRisk.click();
    }

    async closeProceedings() {
        await this.genericModal.additionalElements.btnCloseProceedings.waitForDisplayed({timeout: config.wait.M});
        await this.genericModal.additionalElements.btnCloseProceedings.waitForClickable({timeout: config.wait.M});
        await this.genericModal.additionalElements.btnCloseProceedings.click();
    }

    async confirmInformationClient() {
        await this.confirmInformationValidation();
        await this.confirmInformation();
    }

    async openLink() {
        await this.genericModal.additionalElements.linkAddress.waitForDisplayed({timeout: config.wait.M});
        await this.genericModal.additionalElements.linkAddress.waitForClickable({timeout: config.wait.M});
        await this.genericModal.additionalElements.linkAddress.click();
    }

    async openProceedings() {
        await this.identityValidation();
        await this.kycValidation();
        await this.confirmInformationValidation();
        await this.confirmProceedings();
    }

    async exitModal(option) {
        switch (option) {
            case 'close modal':
                await this.genericModal.additionalElements.btnCloseAlert.waitForDisplayed({timeout: config.wait.M});
                await this.genericModal.additionalElements.btnCloseAlert.waitForClickable({timeout: config.wait.M});
                await this.genericModal.additionalElements.btnCloseAlert.click();
                break;
            case 'exits':
                await this.genericModal.additionalElements.btnExitProceedings.waitForDisplayed({timeout: config.wait.M});
                await this.genericModal.additionalElements.btnExitProceedings.waitForClickable({timeout: config.wait.M});
                await this.genericModal.additionalElements.btnExitProceedings.click();
                break;
            case 'continue':
                await this.genericModal.additionalElements.btnContinueProceedings.waitForDisplayed({timeout: config.wait.M});
                await this.genericModal.additionalElements.btnContinueProceedings.waitForClickable({timeout: config.wait.M});
                await this.genericModal.additionalElements.btnContinueProceedings.click();
                break;
            default:
                throw new Error(`The option: ${option} is not implemented`);
        }
    }

    async serviceFailure() {
        await (await this.genericModal.additionalElements.btnRetry.waitForClickable({timeout: config.wait.M})).click();
        await (await this.genericModal.additionalElements.btnRetry.waitForClickable({timeout: config.wait.M})).click();
        await (await this.genericModal.additionalElements.btnRetry.waitForClickable({timeout: config.wait.M})).click();
    }

    async continueProcess() {
        await (await this.genericModal.additionalElements.confirmLevelUpgradeBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'btn close proceedings':
                await this.genericModal.additionalElements.btnCloseProceedings.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title modal':
                await this.genericModal.additionalElements.titleModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'identity validation':
                await this.genericModal.additionalElements.identityValidation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'kyc validation':
                await this.genericModal.additionalElements.kycValidation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm information':
                await this.genericModal.additionalElements.confirmInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn upgrade account':
                await this.genericModal.additionalElements.btnUpgradeAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title error':
                await this.genericModal.additionalElements.titleError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon error':
                await this.genericModal.additionalElements.iconError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description error':
                await this.genericModal.additionalElements.descriptionError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm level upgrade':
                await this.genericModal.additionalElements.confirmLevelUpgradeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound(item);

        }
    }
}

export default new Proceedings();
