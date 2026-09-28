import AbstractGlomoPage from '../abstract-glomo-page';
import {Commands, ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('OcLoan')
class OcLoan extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-ocLoan[state="active"]',
            elementsSpherica: {
                feature: {
                    properties: {
                        root:'[data-tag-name="loan-and-mortgage-origination-oc-loan"]'
                    },
                    receiptPage: {
                        properties: {
                            root: '[data-tag-name="loan-and-mortgage-origination-review"]'
                        },
                        successfulPanel: '#modal-review div div.panel-success',
                        loanContractDetail: '#modal-review div div.list-success',
                        modalDocumentsHeader: '#modal-review div [data-tag-name="bbva-help-modal"] #helpModalHeader header',
                        modalDocumentsHeaderCloseBtn: '#modal-review #helpModalHeader #btn-close',
                        modalDocumentList: '#modal-review bbva-help-modal div.file-list-container',
                        creditHistoryAuthorization: '#modal-review div [data-tag-name="bbva-help-modal"] div div [data-tag-name="loan-and-mortgage-origination-file-list"] button:nth-of-type(1)'
                    },
                    contractingLoanPage: {
                        properties: {
                            root: '[data-tag-name="loan-and-mortgage-origination-multistep"]'
                        },
                        header: '[data-tag-name="bbva-help-modal"] #helpModalHeader[text^="Contratar"] #text',
                        loanDetailHeader: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-multistep"] #offer-step #headingLabel[text^="Detalle"] .text',
                        loanDetailSummary: '[data-tag-name="bbva-help-modal"] #offer-step .summary',
                        termsAndConditionsHeaderSummary: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-multistep"] #documents-step #headingLabel .text'
                    },
                    modal: {
                        properties: {
                            root: '[data-tag-name="loan-and-mortgage-origination-oc-loan-modal-manager"]'
                        },
                        content: '[data-tag-name="bbva-help-modal"] div.content [data-tag-name="bbva-type-text"][text^="Por este conducto"] p.text',
                        alertIllustration: '[data-tag-name="bbva-help-modal"] #helpModalTitle [data-tag-name="bbva-type-icon"]',
                        errorTitle: '[data-tag-name="bbva-help-modal"] #title-text',
                        errorDescription: '[data-tag-name="bbva-help-modal"] div.content [data-tag-name="bbva-type-text"][text^="En estos momentos"] p.text'
                    }
                }
            },
            elements: {
                controller: 'bbva-controller-oc-loan-mx',
                analyticsManager: 'bbva-analyticmanager-oc-loan-mx',
                feature: {
                    properties: {
                        root:'[data-tag-name="loan-and-mortgage-origination-oc-loan"]'
                    },
                    contractingLoanPage: {
                        properties: {
                            root: '[data-tag-name="loan-and-mortgage-origination-multistep"]'
                        },
                        header: '[data-tag-name="bbva-help-modal"] #helpModalHeader[text^="Contratar"]',
                        loanDetailHeader: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-multistep"] #offer-step #headingLabel',
                        loanDetailSummary: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-multistep"] #offer-step .summary',
                        termsAndConditionsHeader: '#documents-step #heading',
                        termsAndConditionsFiles: '#documents-step div.content [data-tag-name="terms-documents-step"] [data-tag-name="loan-and-mortgage-origination-file-list"]',
                        creditHistoryInformation: '#documents-step [data-tag-name="loan-and-mortgage-origination-file-list"] button:nth-of-type(1)',
                        creditHistoryCheckBox: '#documents-step div.content [data-tag-name="terms-documents-step"] div.example div [data-tag-name="bbva-form-checkbox"]:nth-of-type(1)',
                        termsAndConditionsCheckBox: '#documents-step div.content [data-tag-name="terms-documents-step"] div.example div [data-tag-name="bbva-form-checkbox"]:nth-of-type(2)',
                        termsAndConditionsHeaderSummary: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-multistep"] #documents-step #headingLabel',
                        termsAndConditionsSummary: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-multistep"] #documents-step .summary',
                        insuranceCoverage: '#documents-step [data-tag-name="loan-and-mortgage-origination-file-list"] button:nth-of-type(3)',
                        insuranceCoverageCheckBox: '#documents-step div.content [data-tag-name="terms-documents-step"] div.example div [data-tag-name="bbva-form-checkbox"]:nth-of-type(3)',
                        continueButton: '#documents-step div.content [data-tag-name="terms-documents-step"] div.continue-button',
                        confirmButton: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-expandable-multistep"] div.confirmation-area #confirm-button',
                    },
                    receiptPage: {
                        properties: {
                            root: '[data-tag-name="loan-and-mortgage-origination-review"]'
                        },
                        header: '#modal-review #helpModalHeader[text^="Contratar"]',
                        successfulPanel: '#modal-review div [data-tag-name="loan-and-mortgage-origination-illustration"]',
                        loanContractDetail: '#modal-review div [data-tag-name="loan-and-mortgage-origination-rate-item"]',
                        emailNotification: '#modal-review div [data-tag-name="bbva-notification-message"]',
                        viewDocumentsButton: '#modal-review div [data-tag-name="bbva-button-row"] #buttons span:nth-of-type(1) [data-tag-name="bbva-button-action"]',
                        shareReceiptButton: '#modal-review div [data-tag-name="bbva-button-row"] #buttons span:nth-of-type(2) [data-tag-name="bbva-button-action"]',
                        creditHistoryAuthorization: '#modal-review #modal-documents div [data-tag-name="loan-and-mortgage-origination-file-list"] button:nth-of-type(1)',
                        modalDocumentsHeaderCloseBtn: '#modal-documents #helpModalHeader header div div.header-icons.right-group',
                        modalDocumentsHeader: '#modal-documents #helpModalHeader #heading',
                        modalDocumentList: '#modal-documents div [data-tag-name="loan-and-mortgage-origination-file-list"]'
                    },
                    modal: {
                        properties:{
                            root: '[data-tag-name="loan-and-mortgage-origination-oc-loan-modal-manager"] [data-tag-name="bbva-help-modal"]'
                        },
                        header: '#helpModalHeader',
                        headerCloseButton: '#helpModalHeader #btn-close',
                        content: '.content [data-tag-name="bbva-type-text"] p.text',
                        retryButton: '[data-tag-name="bbva-button-default"]',
                        alertIllustration: '[data-tag-name="bbva-clip-microillustration"]',
                        errorTitle: '[data-tag-name="bbva-type-text"][text^="Operación"] p.text',
                        errorDescription: '[data-tag-name="bbva-type-text"][text^="La operación"] p.text'
                    }
                }
            },
            requiredElements: ['root']
        });
    }

    async _screenValidation({item, visible}) {
        switch (item.toLowerCase()) {
            case 'header':
                await (await this.feature.contractingLoanPage.header.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'loan detail':
                await this.feature.contractingLoanPage.loanDetailHeader.waitForDisplayed({timeout: config.wait.M});
                await (await this.feature.contractingLoanPage.loanDetailSummary.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions':
                await this.feature.contractingLoanPage.termsAndConditionsHeader.waitForDisplayed({timeout: config.wait.M});
                await this.feature.contractingLoanPage.termsAndConditionsFiles.waitForDisplayed({timeout: config.wait.M});
                await this.feature.contractingLoanPage.creditHistoryCheckBox.waitForDisplayed({timeout: config.wait.M});
                await this.feature.contractingLoanPage.termsAndConditionsCheckBox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions summary':
                await (await this.feature.contractingLoanPage.termsAndConditionsHeaderSummary.scrollIntoView()).waitForDisplayed({timeout: config.wait.M});
                await this.feature.contractingLoanPage.termsAndConditionsSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance coverage':
                await this.feature.contractingLoanPage.insuranceCoverage.waitForDisplayed({timeout: config.wait.M, reverse: visible !== 'visible'});
                await this.feature.contractingLoanPage.insuranceCoverageCheckBox.waitForDisplayed({timeout: config.wait.M, reverse: visible !== 'visible'});
                break;
            case 'documents modal':
                await this.feature.receiptPage.modalDocumentsHeader.waitForDisplayed({timeout: config.wait.M});
                await this.feature.receiptPage.modalDocumentsHeaderCloseBtn.waitForDisplayed({timeout: config.wait.M});
                await this.feature.receiptPage.modalDocumentList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit history modal':
                await this.feature.modal.header.waitForDisplayed({timeout: config.wait.M});
                await this.feature.modal.content.waitForDisplayed({timeout: config.wait.M});
                await this.feature.modal.headerCloseButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.feature.contractingLoanPage.continueButton.waitForClickable({timeout: config.wait.M});
                break;
            case 'confirm button':
                await this.feature.contractingLoanPage.confirmButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt header':
                await this.feature.receiptPage.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt panel':
                await this.feature.receiptPage.successfulPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'loan contract detail':
                await this.feature.receiptPage.loanContractDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'email notification':
                await this.feature.receiptPage.emailNotification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'actions buttons':
                await this.feature.receiptPage.viewDocumentsButton.waitForDisplayed({timeout: config.wait.M});
                await this.feature.receiptPage.shareReceiptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error modal':
                await this.feature.modal.header.waitForDisplayed({timeout: config.wait.M});
                await this.feature.modal.alertIllustration.waitForDisplayed({timeout: config.wait.M});
                await this.feature.modal.errorTitle.waitForDisplayed({timeout: config.wait.M});
                await this.feature.modal.errorDescription.waitForDisplayed({timeout: config.wait.M});
                await this.feature.modal.retryButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async initializeOcLoanWebPlusGlomo() {
        await Commands.pause({time: config.wait.S});
        const {appSettings, deepLinkKey, loanType, customerId} = global.user;
        await this.analyticsManager.execute({
            script: (loanType) => {
                this.setLoanType(loanType);
            },
            args: [loanType]
        });
        await this.controller.execute({
            script: (appSettings, deepLinkKey, loanType, customerId) => {
                this.setAppSettings(appSettings);
                this.setDeepLinkKey(deepLinkKey);
                this.setLoanType(loanType);
                this.setCustomerId(customerId);
            },
            args: [appSettings, deepLinkKey, loanType, customerId]
        });
    }

    async openCreditHistoryDetail() {
        await (await this.feature.contractingLoanPage.creditHistoryInformation.waitForClickable({timeout: config.wait.M})).click();
    }

    async returnFromCreditHisotry() {
        await this.openCreditHistoryDetail();
        await (await this.feature.modal.headerCloseButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async acceptTermsAndConditions(user) {
        await (await this.feature.contractingLoanPage.creditHistoryCheckBox.waitForClickable({timeout: config.wait.M})).click();
        await (await this.feature.contractingLoanPage.termsAndConditionsCheckBox.waitForClickable({timeout: config.wait.M})).click();
        if (user === 'nom offer with insurance') {
            await (await this.feature.contractingLoanPage.insuranceCoverageCheckBox.waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async continueToSummary(user) {
        await this.acceptTermsAndConditions(user);
        await (await this.feature.contractingLoanPage.continueButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async confirmContratcting(user) {
        await this.continueToSummary(user);
        await (await this.feature.contractingLoanPage.confirmButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async enterOtp(user) {
        await this.confirmContratcting(user);
        await this.fillOtp();
    }

    async fillOtp() {
        await this.signModal.waitForDisplayed({timeout: config.wait.XXXL});
        await this.signModal.userInputPassword.execute({
            script: () => {
                this.value = '12345678';
            },
            args: []
        });
        await this.signModal.confirmPassword();
    }

    async openCreditHistoryAuthorization() {
        await this.enterOtp();
        await (await this.feature.receiptPage.viewDocumentsButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async retryError() {
        const retries = 3;
        for (let i = 0; i < retries; i++) {
            await (await this.feature.modal.retryButton.waitForClickable({timeout: config.wait.M})).click();
        }
    }
}
export default new OcLoan();
