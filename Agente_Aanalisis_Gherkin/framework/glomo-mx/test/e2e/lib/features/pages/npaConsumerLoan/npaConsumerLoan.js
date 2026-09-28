import AbstractGlomoPage from '../abstract-glomo-page';
import BbvaHelpModal from '../../components/bbva-help-modal';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class NpaConsumerLoan extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-npaConsumerLoan[state="active"]',
            elements: {
                singConnector: CellsSignOperationModalSpherica,
                offerPage: [BbvaHelpModal, {
                    prefix: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-offer-page',
                }],
                checksPage: [BbvaHelpModal, {
                    prefix: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-checks-page',
                    additionalElements: {
                        closeButton: '[data-tag-name="bbva-header-main"][text="Solicitud de préstamo personal"] #btn-close',
                        panelTitle: 'bbva-panel-container [font-type="title-secondary"]',
                        points: '[data-tag-name="bbva-header-category"]',
                        documents: '[data-tag-name="bbva-expandable-accordion"] [data-tag-name="bbva-type-text"].text-documents',
                        bureauAuthorization: '[data-tag-name="bbva-expandable-accordion"] #authorization',
                        workHistoryAuthorization: '[data-tag-name="bbva-expandable-accordion"] #authorizationWorkHistory',
                        privacyAdvice: '[data-tag-name="bbva-type-link"]',
                        checkMain: '[data-tag-name="bbva-form-checkbox"].primary',
                    }
                }],
                successPage: [BbvaHelpModal, {
                    prefix: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-success-page'
                }],
                workHistoryModal: {
                    properties: {
                        root: 'bbva-help-modal#authorizationWorkHistory'
                    },
                    closeBtn: '[text="Autorización para la consulta de historial laboral y sociodemográfico"] #btn-close',
                    information: '[data-tag-name="bbva-type-text"] p.text',
                    workHistory: '[data-tag-name="bbva-expandable-accordion"] #workHistory',
                    sociodemographicHistory: '[data-tag-name="bbva-expandable-accordion"] #sociodemographicHistory',
                    informationHistory: '[data-tag-name="bbva-expandable-accordion"] p.text',
                },
                privacyAdviceModal: {
                    properties: {
                        root: 'bbva-help-modal#privacyAdvice'
                    },
                    closeBtn: '[text="Aviso de Privacidad"] #btn-close',
                    information: '[data-tag-name="bbva-type-text"] p.text',
                },
                exitProcess: {
                    properties: {
                        root: '#exit-process'
                    },
                    closeButton: '[data-tag-name="bbva-header-main"][text="Solicitud de préstamo personal"] #btn-close.icon span',
                    buttonContinue: '.footer-button.link'
                },
                lackOfInformation: {
                    properties: {
                        root: '#lackOfInformation'
                    },
                    closeButton: '[data-tag-name="bbva-header-main"][text="Solicitud de préstamo personal"] #btn-close.icon span',
                    buttonExit: '.footer-button.link'
                },
                bureauRejection: {
                    properties: {
                        root: '#bureau-rejection'
                    },
                    buttonExit: '[data-tag-name="bbva-button-default"]',
                },
            },
            requiredElements: [
                'offerPage.acceptBtn',
            ],
        });
    }

    async _screenValidation({ item } = {}) {
        switch (item.toLowerCase()) {
            case 'header otp':
                await this.singConnector.smsPasswordLabel.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'title otp':
                await this.signModal.smsIcon.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'input otp':
                await this.singConnector.smsPasswordInputField.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'continue button otp':
                await this.singConnector.smsContinueButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'panel offer title':
                await this.offerPage.additionalElements.panelTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'panel checks title':
                await this.checksPage.additionalElements.panelTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'close checks button':
                await this.checksPage.additionalElements.closeButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'points':
                await this.checksPage.additionalElements.points.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'documents':
                await this.checksPage.additionalElements.documents.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'privacy advice':
                await this.checksPage.additionalElements.privacyAdvice.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'continue button checks':
                await this.checksPage.acceptBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'close work history button':
                await this.workHistoryModal.closeBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'information':
                await this.workHistoryModal.information.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'work history':
                await this.workHistoryModal.workHistory.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'sociodemographic history':
                await this.workHistoryModal.sociodemographicHistory.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'information history':
                await this.workHistoryModal.informationHistory.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'close privacy advice button':
                await this.privacyAdviceModal.closeBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'information privacy advice':
                await this.privacyAdviceModal.information.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async continueOffer() {
        await this.offerPage.acceptBtn.waitForDisplayed({ timeout: config.wait.M });
        await this.offerPage.acceptBtn.click();
    }

    async consultDocuments() {
        await this.checksPage.additionalElements.documents.waitForDisplayed({ timeout: config.wait.M });
        await this.checksPage.additionalElements.documents.click();
    }

    async bureauAuthorization() {
        await this.consultDocuments();
        const element = await this.checksPage.additionalElements.bureauAuthorization;
        await element.waitForDisplayed({timeout: config.wait.M});
        await element.click();
    }

    async workHistoryAuthorization() {
        await this.consultDocuments();
        const element = await this.checksPage.additionalElements.workHistoryAuthorization;
        await element.waitForDisplayed({timeout: config.wait.M});
        await element.click();
        await this.workHistoryModal.workHistory.waitForDisplayed({timeout: config.wait.M});
        await this.workHistoryModal.workHistory.click();
        await this.workHistoryModal.sociodemographicHistory.waitForDisplayed({timeout: config.wait.M});
        await this.workHistoryModal.sociodemographicHistory.click();
    }

    async privacyAdvice() {
        await this.checksPage.additionalElements.privacyAdvice.waitForDisplayed({ timeout: config.wait.M });
        await this.checksPage.additionalElements.privacyAdvice.click();
    }

    async selectChecks() {
        await this.checksPage.additionalElements.checkMain.waitForDisplayed({ timeout: config.wait.L });
        await this.checksPage.additionalElements.checkMain.click();
    }

    async closeChecksPage() {
        await this.consultDocuments();
        await this.checksPage.additionalElements.closeButton.waitForDisplayed({ timeout: config.wait.M });
        await this.checksPage.additionalElements.closeButton.click();
        await this.exitProcess.buttonContinue.waitForDisplayed({ timeout: config.wait.M });
        await this.exitProcess.buttonContinue.click();
    }

    async continueChecks() {
        await this.checksPage.acceptBtn.waitForDisplayed({ timeout: config.wait.M });
        await this.checksPage.acceptBtn.click();
    }

    async continueOTP() {
        await this.fillOtp('31431729');
    }

    async continueSuccess() {
        await this.successPage.acceptBtn.waitForDisplayed({ timeout: config.wait.L });
        await this.successPage.acceptBtn.click();
    }

    async closeModalRejection() {
        await this.bureauRejection.buttonExit.waitForDisplayed({ timeout: config.wait.L });
        await this.bureauRejection.buttonExit.click();
    }

    async _exitLackOfInformationModal() {
        await this.lackOfInformation.buttonExit.waitForDisplayed({ timeout: config.wait.M });
        await this.lackOfInformation.buttonExit.click();
    }

    async _closeLackOfInformationModal() {
        await this.lackOfInformation.closeButton.waitForDisplayed({ timeout: config.wait.M });
        await this.lackOfInformation.closeButton.click();
    }

    async returnToEntryPoint(value) {
        switch (value.toLowerCase()) {
            case 'close':
                await this._closeLackOfInformationModal();
                break;
            case 'exit':
                await this._exitLackOfInformationModal();
                break;
            default:
                throw new Error('Selected option is not available...');
        }
    }
}

export default new NpaConsumerLoan();
