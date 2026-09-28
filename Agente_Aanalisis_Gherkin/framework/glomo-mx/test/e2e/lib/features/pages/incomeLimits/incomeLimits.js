import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class IncomeLimits extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-incomeLimitsPage[state="active"]',
            elements: {
                initIncomeLimits: '[data-tag-name="bbva-feature-income-limits-mx"]',
                panelInfo: {
                    properties: {root: '#panelInfo'},
                    titleCashDeposit: '#titleCashDeposit p',
                    textCashDeposit: '#textCashDeposit p'
                },
                titleAmountReceived: '#headerCategory span',
                shareButton: 'bbva-button-action div.icon-container bbva-type-icon',
                dashboard: {
                    properties: {root: '#income-limits-dashboard #incomeLimitDashboard'},
                    confirmSummary: '#incomeLimitsMultistep #multistep-confirmation-button',
                    modal: {
                        properties: {root: '#incomeLimitsDashboardModal'},
                        titleCashDepositInfo: '#titleInfo span',
                        descriptionCashDepositInfo: '#textInfo span',
                        helpModal: {
                            properties: {root: 'bbva-help-modal'},
                            contentCashDepositInfo: 'div div div bbva-list-bullet',
                            acceptButton: 'div div.content div.transition-container div div.modal-main div.modal-footer slot div bbva-button-default',
                            activityInfoModalHeader: '#helpModalHeader header',
                            activityInfoModalText: '#helpModalContent div slot div bbva-type-text p.text',
                            closeActivityInfoModal: '#helpModalHeader #btn-close div bbva-type-icon',
                            reasonInfoModalHeader: '#helpModalHeader header',
                            closeReasonInfoModal: '#helpModalHeader #btn-close div bbva-type-icon',
                            acceptButtonDocumentModal: 'div div.content div.transition-container div div.modal-main div.modal-footer slot div bbva-button-default',
                            invoiceInfoModalHeader: '#helpModalHeader header',
                            modalTitleInvoiceInfo: 'div.content div.main-dashboard-modal-container bbva-type-text span.text',
                            modalTextInvoiceInfo: 'div div div.main-dashboard-modal-proof-of-income-container',
                            listBulletElementOne: '#proofOfIncomeListBullet #listBullet0 bbva-type-text span',
                            listBulletElementTwo: '#proofOfIncomeListBullet #listBullet1 bbva-type-text span'
                        }
                    },
                    errorModal: {
                        properties: {root: 'bbva-feature-income-limits-mx-error-modal bbva-help-modal'},
                        retryButton: 'div div.content div.transition-container div div.modal-main div.modal-footer slot div bbva-button-default'
                    },
                    successModal: {
                        properties: {root: '#incomeLimitsSuccessModal'},
                        header: 'bbva-help-modal #helpModalHeader header',
                        title: '#bbva-feature-income-limits-mx-panel-process-title span',
                        amount: 'bbva-help-modal div bbva-panel-container #listAmount div div bbva-type-amount',
                        folio: 'bbva-help-modal div bbva-panel-container #listFolio div div bbva-type-text',
                        noticeContainer: 'bbva-help-modal div bbva-feature-income-limits-mx-notification-message #messageSuccessModal'
                    }
                },
                activityInfoModalTitle: '#title-text h2',
                reasonInfoModalTitle: '#title-text h2',
                messages: {
                    properties: {root: ''},
                    linkUpdateInfo: '#messageUpdateInfo div div.link bbva-type-link',
                    linkUpdateDoc: '#messageUpdateDoc div div.link bbva-type-link',
                    linkUpdateInfoAndDocs: '#messageUpdateInfoAndDocs div div.link bbva-type-link',
                    rejectedDocs: '#messageUpdateDoc div div.wrapper-icon-title bbva-type-text p',
                    uploadForm: '#messageUpdateInfo div div.wrapper-icon-title bbva-type-text p',
                    uploadFormAndDocs: '#messageUpdateInfoAndDocs div div.wrapper-icon-title bbva-type-text p',
                    pendingApplication: '#messageNotifyResult div div.wrapper-icon-title bbva-type-text p',
                    applicationRejected: '#messageNotifyScheduleDate div div.wrapper-icon-title bbva-type-text p',
                    depositLimit: '#messageNoConfirmation div div.wrapper-icon-title bbva-type-text p'
                },
                multistep: {
                    properties: {root: '#incomeLimitsMultistep'},
                    firstStepTitle: '#economic-expandable-step #headingLabel span',
                    secondStepTitle: '#proof-of-income #headingLabel span',
                    headerSecondStep: 'bbva-help-modal #helpModalHeader',
                    closeButtonHeader: '#helpModalHeader #btn-close',
                    expandableMultistep: {
                        properties: {root: '#expandable-multistep'},
                        economicActivityStep: '#economic-expandable-step',
                        proofOfIncomeStep: '#proof-of-income',
                        agreementStep: '#agreement-expandable-step',
                        multistepConfirm: '#multistep-confirmation-button'
                    },
                    agreementExpandedStep: '#expandable-multistep #agreement-expandable-step',
                    checkboxAgreement: '#agreement-step div.agreement-step-container bbva-form-checkbox #input',
                    proofOfIncomeStep: {
                        properties: {root: '#proof-of-income-step'},
                        container: {
                            properties: {root: 'div.proof-of-income-step-container'},
                            proofOfIncomeLabel: 'bbva-type-text span',
                            continueToDeclarationDisabled: 'bbva-button-default.button[disabled]',
                            continueToDeclaration: 'bbva-button-default.button',
                            typeLink: 'bbva-type-link#uploadLink'
                        },
                        selector: {
                            properties: {root: '#selector'},
                            selectorButton: '#button span.button-content',
                            contract: 'bbva-form-option.documentCC',
                            agreement: 'bbva-form-option.documentCV',
                            invoice: 'bbva-form-option.documentFF',
                            annualStatement: 'bbva-form-option.documentDA',
                            monthlyStatement: 'bbva-form-option.documentDM'
                        },
                        proofOfIncomeSelector: '#selector #button span.button-content',
                        uploadDocumentOne: {
                            properties: {root: '#upload-document-0'},
                            trashIcon: '#panelContainer #trashIcon',
                            textNotApproved: '#panelContainer #badgeDefault bbva-type-text span'
                        },
                        uploadDocumentTwo: {
                            properties: {root: '#upload-document-1'},
                            trashIcon: '#panelContainer #trashIcon',
                            textNotApproved: '#panelContainer #badgeDefault bbva-type-text span'
                        },
                        uploadDocumentThree: {
                            properties: {root: '#upload-document-2'},
                            trashIcon: '#panelContainer #trashIcon',
                            textNotApproved: '#panelContainer #badgeDefault bbva-type-text span'
                        },
                        uploadedDocument: '#upload-document-0',
                        invoiceOne: '#upload-document-0',
                        invoiceTwo: '#upload-document-1',
                        invoiceThree: '#upload-document-2',
                        infoOninvoice: 'div.proof-of-income-step-container bbva-notification-message div div.link bbva-type-link'
                    }
                },
                economicActivity: {
                    properties: {root: '#economic-activity div.economic-activity-step-container'},
                    amountExpectedLabelOut: 'div bbva-type-text span',
                    disabledContinueButton: 'bbva-button-default.economic-activity-step-continue-button[disabled]',
                    continueButton: 'bbva-button-default.economic-activity-step-continue-button'
                },
                inputEconomicActivity: {
                    properties: {root: 'bbva-form-input.inputEconomicActivity'},
                    labelOut: '[data-tag-name="bbva-form-textarea"] #labelOutText',
                    textArea: '[data-tag-name="bbva-form-textarea"] textarea',
                    tipOfActivity: 'bbva-form-textarea div.label-out div bbva-button-default div bbva-type-icon'
                },
                inputAmount: {
                    properties: {root: 'bbva-form-input.inputAmount'},
                    input: '[data-tag-name="bbva-form-amount"] input'
                },
                inputMotive: {
                    properties: {root: 'bbva-form-input.inputMotive'},
                    labelOut: '[data-tag-name="bbva-form-textarea"] #labelOutText',
                    textArea: '[data-tag-name="bbva-form-textarea"] textarea',
                    tipOfReasons: 'bbva-form-textarea div.label-out div bbva-button-default div bbva-type-icon'
                },
                agreementStep: {
                    properties: {root: '#agreement-step div.agreement-step-container'},
                    continueToTheSummaryDisabled: 'bbva-button-default[disabled]',
                    continueToTheSummary: 'bbva-button-default'
                }
            },
            requiredElements: ['root']
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'title cash deposit':
                await this.panelInfo.titleCashDeposit.waitForDisplayed();
                break;
            case 'text cash deposit':
                await this.panelInfo.textCashDeposit.waitForDisplayed();
                break;
            case 'title amount received':
                await this.titleAmountReceived.waitForDisplayed();
                break;
            case 'share info button':
                await this.shareButton.waitForDisplayed();
                break;
            case 'title cash deposit info':
                await this.dashboard.modal.titleCashDepositInfo.waitForDisplayed();
                break;
            case 'description cash deposit info':
                await this.dashboard.modal.descriptionCashDepositInfo.waitForDisplayed();
                break;
            case 'content cash deposit info':
                await this.dashboard.modal.helpModal.contentCashDepositInfo.waitForDisplayed();
                break;
            case 'accept button':
                await this.dashboard.modal.helpModal.acceptButton.waitForDisplayed();
                break;
            case 'first step title':
                await this.multistep.firstStepTitle.waitForDisplayed();
                break;
            case 'economic activity label out':
                await this.inputEconomicActivity.labelOut.waitForDisplayed();
                break;
            case 'text area economic activity':
                await this.inputEconomicActivity.textArea.waitForDisplayed();
                break;
            case 'amount expected label out':
                await this.economicActivity.amountExpectedLabelOut.waitForDisplayed();
                break;
            case 'input amount expected':
                await this.inputAmount.input.waitForDisplayed();
                break;
            case 'income motive label out':
                await this.inputMotive.labelOut.waitForDisplayed();
                break;
            case 'text area motive':
                await this.inputMotive.textArea.waitForDisplayed();
                break;
            case 'disabled continue button':
                await this.economicActivity.disabledContinueButton.waitForDisplayed();
                break;
            case 'continue button':
                await this.economicActivity.continueButton.waitForDisplayed();
                break;
            case 'header second step':
                await this.multistep.headerSecondStep.waitForDisplayed();
                break;
            case 'second step title':
                await this.multistep.secondStepTitle.waitForDisplayed();
                break;
            case 'proof of income label':
                await this.multistep.proofOfIncomeStep.container.proofOfIncomeLabel.waitForDisplayed();
                break;
            case 'proof of income selector':
                await this.multistep.proofOfIncomeStep.proofOfIncomeSelector.waitForDisplayed();
                break;
            case 'continue to declaration disabled':
                await this.multistep.proofOfIncomeStep.container.continueToDeclarationDisabled.waitForDisplayed();
                break;
            case 'continue to declaration':
                await this.multistep.proofOfIncomeStep.container.continueToDeclaration.waitForDisplayed();
                break;
            case 'selector':
                await this.multistep.proofOfIncomeStep.selector.selectorButton.waitForDisplayed();
                break;
            case 'invoice':
                await this.multistep.proofOfIncomeStep.selector.invoice.waitForDisplayed();
                break;
            case 'contract':
                await this.multistep.proofOfIncomeStep.selector.contract.waitForDisplayed();
                break;
            case 'agreement':
                await this.multistep.proofOfIncomeStep.selector.agreement.waitForDisplayed();
                break;
            case 'annual statement':
                await this.multistep.proofOfIncomeStep.selector.annualStatement.waitForDisplayed();
                break;
            case 'monthly statement':
                await this.multistep.proofOfIncomeStep.selector.monthlyStatement.waitForDisplayed();
                break;
            case 'type link':
                await this.multistep.proofOfIncomeStep.container.typeLink.waitForDisplayed();
                break;
            case 'accept button document modal':
                await this.dashboard.modal.helpModal.acceptButtonDocumentModal.waitForDisplayed();
                break;
            case 'invoice one':
                await this.multistep.proofOfIncomeStep.invoiceOne.waitForDisplayed();
                break;
            case 'invoice two':
                await this.multistep.proofOfIncomeStep.invoiceTwo.waitForDisplayed();
                break;
            case 'invoice three':
                await this.multistep.proofOfIncomeStep.invoiceThree.waitForDisplayed();
                break;
            case 'close button header':
                await this.multistep.closeButtonHeader.waitForDisplayed();
                break;
            case 'container of the proof of income step':
                await this.multistep.expandableMultistep.proofOfIncomeStep.waitForDisplayed();
                break;
            case 'expanded agreement step':
                await this.multistep.agreementExpandedStep.waitForDisplayed();
                break;
            case 'checkbox agreement':
                await this.multistep.checkboxAgreement.waitForDisplayed();
                break;
            case 'continue to the summary disabled':
                await this.agreementStep.continueToTheSummaryDisabled.waitForDisplayed();
                break;
            case 'continue to the summary':
                await this.agreementStep.continueToTheSummary.waitForDisplayed();
                break;
            case 'container of the economic activity step':
                await this.multistep.expandableMultistep.economicActivityStep.waitForDisplayed();
                break;
            case 'container of the agreement step':
                await this.multistep.expandableMultistep.agreementStep.waitForDisplayed();
                break;
            case 'multistep confirm':
                await this.multistep.expandableMultistep.multistepConfirm.waitForDisplayed();
                break;
            case 'tip of activity':
                await this.inputEconomicActivity.tipOfActivity.waitForDisplayed();
                break;
            case 'tip of reasons':
                await this.inputMotive.tipOfReasons.waitForDisplayed();
                break;
            case 'activity info modal header':
                await this.dashboard.modal.helpModal.activityInfoModalHeader.waitForDisplayed();
                break;
            case 'activity info modal title':
                await this.activityInfoModalTitle.waitForDisplayed();
                break;
            case 'activity info modal text':
                await this.dashboard.modal.helpModal.activityInfoModalText.waitForDisplayed();
                break;
            case 'close activity info modal':
                await this.dashboard.modal.helpModal.closeActivityInfoModal.waitForDisplayed();
                break;
            case 'uploaded document':
                await this.multistep.proofOfIncomeStep.uploadedDocument.waitForDisplayed();
                break;
            case 'invoice info modal header':
                await this.dashboard.modal.helpModal.invoiceInfoModalHeader.waitForDisplayed();
                break;
            case 'modal title invoice info':
                await this.dashboard.modal.helpModal.modalTitleInvoiceInfo.waitForDisplayed();
                break;
            case 'modal text invoice info':
                await this.dashboard.modal.helpModal.modalTextInvoiceInfo.waitForDisplayed();
                break;
            case 'list bullet element one':
                await this.dashboard.modal.helpModal.listBulletElementOne.waitForDisplayed();
                break;
            case 'list bullet element two':
                await this.dashboard.modal.helpModal.listBulletElementTwo.waitForDisplayed();
                break;
            case 'text doc one not approved':
                await this.multistep.proofOfIncomeStep.uploadDocumentOne.textNotApproved.waitForDisplayed();
                break;
            case 'rejected docs':
                await this.messages.rejectedDocs.waitForDisplayed();
                break;
            case 'upload form':
                await this.messages.uploadForm.waitForDisplayed();
                break;
            case 'upload form and docs':
                await this.messages.uploadFormAndDocs.waitForDisplayed();
                break;
            case 'pending application':
                await this.messages.pendingApplication.waitForDisplayed();
                break;
            case 'application rejected':
                await this.messages.applicationRejected.waitForDisplayed();
                break;
            case 'deposit limit':
                await this.messages.depositLimit.waitForDisplayed();
                break;
            case 'success screen header':
                await this.dashboard.successModal.header.waitForDisplayed();
                break;
            case 'success screen title':
                await this.dashboard.successModal.title.waitForDisplayed();
                break;
            case 'success screen amount':
                await this.dashboard.successModal.amount.waitForDisplayed();
                break;
            case 'success screen folio':
                await this.dashboard.successModal.folio.waitForDisplayed();
                break;
            case 'notice container':
                await this.dashboard.successModal.noticeContainer.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async continueShareInfo(){
        await this.shareButton.waitForDisplayed({timeout: config.wait.M});
        await this.shareButton.click();
    }

    async acceptInfo(){
        await this.dashboard.modal.helpModal.acceptButton.waitForDisplayed({timeout: config.wait.M});
        await this.dashboard.modal.helpModal.acceptButton.click();
    }

    async infoEconomicActivity(){
        const message = global.user.economicActivity;
        await this.inputEconomicActivity.textArea.waitForDisplayed({timeout: config.wait.M});
        await this.inputEconomicActivity.textArea.setValue({value: message});
    }

    async amountEconomicActivity(){
        const message = global.user.amountEconomicActivity;
        await this.inputAmount.input.waitForDisplayed({timeout: config.wait.M});
        await this.inputAmount.input.setValue({value: message});
    }

    async motiveEconomicActivity(){
        const message = global.user.reasonEconomicActivity;
        await this.inputMotive.textArea.waitForDisplayed({timeout: config.wait.M});
        await this.inputMotive.textArea.setValue({value: message});
    }

    async fillEconomicActivityForm(){
        await this.infoEconomicActivity();
        await this.amountEconomicActivity();
        await this.motiveEconomicActivity();
    }

    async stepEconomicActivity(){
        await this.continueShareInfo();
        await this.acceptInfo();
        await this.fillEconomicActivityForm();
    }

    async nextStepProofOfIncome(){
        await this.economicActivity.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.economicActivity.continueButton.scrollIntoView();
        await this.economicActivity.continueButton.click();
    }

    async openListOfDocuments() {
        await this.multistep.proofOfIncomeStep.selector.selectorButton.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.proofOfIncomeStep.selector.selectorButton.click();
    }

    async linkToUploadProofOfIncome() {
        await this.multistep.proofOfIncomeStep.container.typeLink.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.proofOfIncomeStep.container.typeLink.waitForClickable({timeout: config.wait.M});
        await this.multistep.proofOfIncomeStep.container.typeLink.click();
    }

    async uploadProofOfIncome() {
        await this.linkToUploadProofOfIncome();
        await this.dashboard.modal.helpModal.acceptButtonDocumentModal.waitForDisplayed({timeout: config.wait.M});
        await this.dashboard.modal.helpModal.acceptButtonDocumentModal.click();
        await this.uploadFile();
        await this.waitForBinaryUploadToFinish();
    }

    async waitForBinaryUploadToFinish() {
        await this.initIncomeLimits.execute({
            script: function() {
                this._binaryUploadInProgress = false;
            },
            args: [],
        });
    }

    async navigateToDocumentSelection() {
        await this.stepEconomicActivity();
        await this.nextStepProofOfIncome();
        await this.openListOfDocuments();
    }

    async selectDocumentType(documentType) {
        const documentElement = this.multistep.proofOfIncomeStep.selector[documentType];
        await documentElement.waitForDisplayed({timeout: config.wait.M});
        await documentElement.click();
    }

    async selectDocument(documentType) {
        await this.navigateToDocumentSelection();
        await this.selectDocumentType(documentType);
    }

    async selectInvoice(){
        await this.selectDocument('invoice');
    }

    async selectContract(){
        await this.selectDocument('contract');
    }

    async selectAgreement(){
        await this.selectDocument('agreement');
    }

    async selectAnnualStatement(){
        await this.selectDocument('annualStatement');
    }

    async selectMonthlyStatement(){
        await this.selectDocument('monthlyStatement');
    }

    async infoOnUploadedInvoices(){
        await this.selectInvoice();
        await this.uploadProofOfIncome();
        await this.multistep.proofOfIncomeStep.infoOninvoice.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.proofOfIncomeStep.infoOninvoice.click();
    }

    async selectInvoices(count = 3){
        await this.selectDocument('invoice');
        for(let i = 0; i < count; i++){
            await this.uploadProofOfIncome();
        }
    }

    async uploadFile(){
        const files = global.user.fileFetchSuccess;
        await this.initIncomeLimits.execute({
            script: (files) => { this.fileFetchSuccess(files); },
            args: [files],
        });
    }

    async nextStepAgreement(){
        await this.multistep.proofOfIncomeStep.container.continueToDeclaration.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.proofOfIncomeStep.container.continueToDeclaration.scrollIntoView();
        await this.multistep.proofOfIncomeStep.container.continueToDeclaration.click();
    }

    async verificationInfo(){
        await this.multistep.checkboxAgreement.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.checkboxAgreement.click();
    }

    async acceptVerificationOfInformation(){
        await this.nextStepAgreement();
        await this.verificationInfo();
    }

    async continueSummary(){
        await this.agreementStep.continueToTheSummary.waitForDisplayed({timeout: config.wait.M});
        await this.agreementStep.continueToTheSummary.click();
    }

    async summaryOfTheSteps(){
        await this.acceptVerificationOfInformation();
        await this.continueSummary();
    }

    async confirmToken(){
        await this.fillOtp('12345678');
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M});
    }

    async continueOtp(){
        await this.dashboard.confirmSummary.waitForDisplayed({timeout: config.wait.M});
        await this.dashboard.confirmSummary.waitForClickable({timeout: config.wait.M});
        await this.dashboard.confirmSummary.click();
    }

    async completeOtpFlow(){
        await this.continueOtp();
        await this.confirmToken();
    }

    async continueToTheSuccessScreen(){
        await this.summaryOfTheSteps();
        await this.completeOtpFlow();
    }

    async continueToTheTokenScreen(){
        await this.summaryOfTheSteps();
        await this.continueOtp();
    }

    async tooltipOfEconomicActivity(){
        await this.inputEconomicActivity.tipOfActivity.waitForDisplayed({timeout: config.wait.M});
        await this.inputEconomicActivity.tipOfActivity.click();
    }

    async tooltipOfReasonsForDeposits(){
        await this.inputMotive.tipOfReasons.waitForDisplayed({timeout: config.wait.M});
        await this.inputMotive.tipOfReasons.click();
    }

    async updateDocument(){
        await this.messages.linkUpdateDoc.waitForDisplayed({timeout: config.wait.M});
        await this.messages.linkUpdateDoc.click();
    }

    async updateForm(){
        await this.messages.linkUpdateInfo.waitForDisplayed({timeout: config.wait.M});
        await this.messages.linkUpdateInfo.click();
        await this.fillEconomicActivityForm();
    }

    async updateInfoAndDocs(){
        await this.messages.linkUpdateInfoAndDocs.waitForDisplayed({timeout: config.wait.M});
        await this.messages.linkUpdateInfoAndDocs.click();
        await this.fillEconomicActivityForm();
        await this.nextStepProofOfIncome();
        await this.multistep.proofOfIncomeStep.uploadDocumentTwo.trashIcon.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.proofOfIncomeStep.uploadDocumentTwo.trashIcon.click();
        await this.uploadProofOfIncome();
    }

    async retryError(){
        for(let i = 0; i < 2; i++){
            await this.dashboard.errorModal.retryButton.waitForDisplayed({timeout: config.wait.M});
            await this.dashboard.errorModal.retryButton.click();
        }
    }

    async serviceNotAvailable(){
        await this.stepEconomicActivity();
        await this.nextStepProofOfIncome();
        await this.retryError();
    }

    async serviceNotAvailableSofttoken(){
        await this.updateForm();
        await this.nextStepProofOfIncome();
        await this.verificationInfo();
        await this.continueSummary();
        await this.completeOtpFlow();
        await this.retryError();
    }

}
export default new IncomeLimits();
