import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page()
class CancelInsurance extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-insuranceCancelationRequestSpherica[state="active"]',
            elementsSpherica: {
                elementsLife: {
                    helpModal: [
                        BbvaHelpModal, { prefix: 'insurance-cancellation-cancel-life-insurance-mx #receipt-success-modal' }
                    ],
                    errorModal:{
                        properties: {
                            root: 'insurance-cancellation-cancel-life-insurance-mx',
                        },
                        unauthorizedWarning: '#full-error-modal #helpModalTitle slot bbva-type-icon',
                        unauthorizedTitle: '#full-error-modal #title-text',
                        unauthorizedText: '#full-error-modal div.col-content',
                        unauthorizedCallButton: '#full-error-modal #full-error-modal-footer-buttons #primary-button-footer',
                        unauthorizedExitButton: '#full-error-modal #full-error-modal-footer-buttons #secondary-button-footer',
                    },
                    alreadyCancelledModalButtons: {
                        properties: { root: 'insurance-cancellation-cancel-life-insurance-mx' },
                        alreadyCancelledCallButton: '#already-canceled-modal #full-error-modal-footer-buttons #primary-button-footer',
                        alreadyCancelledExitButton: '#already-canceled-modal #full-error-modal-footer-buttons #secondary-button-footer'
                    },
                    alreadyCancelledModal: {
                        properties: { root: 'insurance-cancellation-cancel-life-insurance-mx #already-canceled-modal' },
                        alreadyCancelledWarning: '#helpModalTitle slot bbva-type-icon',
                        alreadyCancelledTitle: '#title-text',
                        alreadyCancelledText: 'div.col-content',
                    },
                    keepInMindModal: {
                        properties: { root: 'insurance-cancellation-cancel-life-insurance-mx #keep-insurance-modal' },
                        closeButton: '#helpModalHeader #btn-close',
                        primaryText: '#title-text',
                        secondaryText: '#helpModalContent div slot div bbva-type-text'
                    },
                    multiStep: {
                        properties: { root: 'insurance-cancellation-cancel-life-insurance-mx'},
                        cancellationReasonModifyStepButton: '#reason-cancellation-step #editButton',
                        cancellationInsuranceSummary: '#cancel-insurance-multistep-confirmation',
                        keepInMindLabel: '#retention-arguments-step div.summary',
                        cancellationDetailLabel: '#cancellation-detail-step div.summary',
                        summaryConfirmButton: '#cancel-insurance-footer-buttons-summary-confirmation #primary-button-footer',
                        summaryKeepInsuranceButton: '#cancel-insurance-footer-buttons-summary-confirmation #secondary-button-footer',
                        cancellationKeepInMindModifyStepButton: '#retention-arguments-step #editButton',
                        cancellationDetailModifyStepButton: '#cancellation-detail-step #editButton',
                        reasonCancellation: {
                            properties:{ root:'#cancel-insurance-multistep-request #reason-cancellation-content-step'},
                            keepInsuranceButton: '#cancel-insurance-footer-buttons-reason-step #secondary-button-footer',
                            reasonsOther: '#cancel-insurance-radio-buttons-reason-step [value="028"]',
                            messageInfo: '#cancel-insurance-message-list-reason-step #inconvenience-travel',
                            continueButton: '#cancel-insurance-footer-buttons-reason-step [data-tag-name="bbva-button-default"]#primary-button-footer',
                            paymentNoLongerOption: '#cancel-insurance-radio-buttons-reason-step #radio-buttons-group [value="120"]',
                            notWantedOption: '#cancel-insurance-radio-buttons-reason-step #radio-buttons-group [value="121"]',
                        },
                        cancellationDetailStep: {
                            properties: { root: '#cancellation-detail-content-step' },
                            cancellationDetailContinueButton: '#cancel-insurance-footer-buttons-bullets-step #primary-button-footer',
                            cancellationDetailKeepInsuranceButton: '#cancel-insurance-footer-buttons-bullets-step #secondary-button-footer',
                        },
                        keepInMind: {
                            properties: { root: '#cancel-insurance-multistep-request #retention-arguments-step #retention-arguments-content-step' },
                            keepInMindContinueButton: '#cancel-insurance-footer-buttons-bullets-step #primary-button-footer',
                            keepInMindKeepInsuranceButton: '#cancel-insurance-footer-buttons-bullets-step #secondary-button-footer',
                            listOfBenefits: '#cancel-insurance-bullets-list-bullets-step',
                            continueButton: '#cancel-insurance-footer-buttons-bullets-step [data-tag-name="bbva-button-default"]#primary-button-footer',
                            assistancesBullet: '#cancel-insurance-bullets-list-bullets-step div div bbva-list-bullet',
                            warningContainer: '#cancel-insurance-message-list-bullets-step'
                        },
                        cancellationDetails: {
                            properties: { root: '#cancel-insurance-multistep-request #cancellation-detail-step #cancellation-detail-content-step' },
                            detailsList: '#cancel-insurance-bullets-list-bullets-step',
                            continueButton: '#cancel-insurance-footer-buttons-bullets-step [data-tag-name="bbva-button-default"]#primary-button-footer',
                        },
                    },
                    successModal: {
                        properties: {
                            root: 'insurance-cancellation-cancel-life-insurance-mx #receipt-success-modal div receipt-success'
                        },
                        receiptSuccessIllustration: '#receipt-success-icon',
                        receiptSuccessOperationDetails: '#receipt-success-title p',
                        receiptSuccessInsuranceType: 'div.content-list cancel-insurance-list',
                        shareReceiptButton: '#receipt-success-share-button-button-row #buttons span bbva-button-action',
                        successHeader: '#helpModalHeader header',
                        receiptContent: 'receipt-success div.content-list',
                        receiptInfoMessage: 'receipt-success #receipt-success-message #receipt-success-message',
                    },
                },
                elementsTravel: {
                    helpModal: [
                        BbvaHelpModal, { prefix: 'insurance-cancellation-cancel-travel-insurance-mx #receipt-success-modal' }
                    ],
                    errorModal:{
                        properties: {
                            root: 'insurance-cancellation-cancel-travel-insurance-mx',
                        },
                        unauthorizedWarning: '#full-error-modal #helpModalTitle slot bbva-type-icon',
                        unauthorizedTitle: '#full-error-modal #title-text',
                        unauthorizedText: '#full-error-modal div.col-content',
                        unauthorizedCallButton: '#full-error-modal #full-error-modal-footer-buttons #primary-button-footer',
                        unauthorizedExitButton: '#full-error-modal #full-error-modal-footer-buttons #secondary-button-footer',
                    },
                    alreadyCancelledModalButtons: {
                        properties: { root: 'insurance-cancellation-cancel-travel-insurance-mx' },
                        alreadyCancelledCallButton: '#already-canceled-modal #full-error-modal-footer-buttons #primary-button-footer',
                        alreadyCancelledExitButton: '#already-canceled-modal #full-error-modal-footer-buttons #secondary-button-footer'
                    },
                    alreadyCancelledModal: {
                        properties: { root: 'insurance-cancellation-cancel-travel-insurance-mx #already-canceled-modal' },
                        alreadyCancelledWarning: '#helpModalTitle slot bbva-type-icon',
                        alreadyCancelledTitle: '#title-text',
                        alreadyCancelledText: 'div.col-content',
                    },
                    keepInMindModal: {
                        properties: { root: 'insurance-cancellation-cancel-travel-insurance-mx #keep-insurance-modal' },
                        listOfBenefits: '',
                        continueButton: '',
                        closeButton: '#helpModalHeader #btn-close',
                        primaryText: '#title-text',
                        secondaryText: '#helpModalContent div slot div bbva-type-text'
                    },
                    multiStep: {
                        properties: {
                            root: 'insurance-cancellation-cancel-travel-insurance-mx #cancel-insurance-multistep-request'
                        },
                        summaryKeepInsuranceButton: '#cancel-insurance-footer-buttons-summary-confirmation #secondary-button-footer',
                        summaryConfirmButton: '#cancel-insurance-footer-buttons-summary-confirmation #primary-button-footer',
                        cancellationDetailLabel: '#cancellation-detail-step div.summary',
                        keepInMindLabel: '#retention-arguments-step div.summary',
                        insuranceData: '#insurance-detail-filled-step',
                        traveledCancelledOption: '#reason-cancellation-summary-step #label-summary',
                        cancellationInsuranceSummary: '#cancel-insurance-multistep-confirmation',
                        cancellationReasonModifyStepButton: '#reason-cancellation-step #editButton',
                        cancellationKeepInMindModifyStepButton: '#retention-arguments-step #editButton',
                        cancellationDetailModifyStepButton: '#cancellation-detail-step #editButton',
                        firstStepSummary: '#insurance-detail-filled-step',
                        reasonCancellation: {
                            properties:{ root:'#reason-cancellation-content-step'},
                            keepInsuranceButton: '#cancel-insurance-footer-buttons-reason-step #secondary-button-footer',
                            badServiceOption: '#radio-buttons-group [value="123"]',
                            travelCancelledOption: '#radio-buttons-group [value="133"]',
                            reasonsOther: '#cancel-insurance-radio-buttons-reason-step [value="028"]',
                            messageInfo: '#cancel-insurance-message-list-reason-step #inconvenience-travel',
                            continueButton: '#cancel-insurance-footer-buttons-reason-step [data-tag-name="bbva-button-default"]#primary-button-footer'
                        },
                        cancellationDetailStep: {
                            properties: { root: '#cancellation-detail-content-step' },
                            cancellationDetailContinueButton: '#cancel-insurance-footer-buttons-bullets-step #primary-button-footer',
                            cancellationDetailKeepInsuranceButton: '#cancel-insurance-footer-buttons-bullets-step #secondary-button-footer',
                        },
                        keepInMind: {
                            properties: { root: '#retention-arguments-step #retention-arguments-content-step' },
                            keepInMindContinueButton: '#cancel-insurance-footer-buttons-bullets-step #primary-button-footer',
                            keepInMindKeepInsuranceButton: '#cancel-insurance-footer-buttons-bullets-step #secondary-button-footer',
                            listOfBenefits: '#cancel-insurance-bullets-list-bullets-step',
                            continueButton: '#cancel-insurance-footer-buttons-bullets-step [data-tag-name="bbva-button-default"]#primary-button-footer',
                        },
                        cancellationDetails: {
                            properties: { root: '#cancellation-detail-step #cancellation-detail-content-step' },
                            detailsList: '#cancel-insurance-bullets-list-bullets-step',
                            continueButton: '#cancel-insurance-footer-buttons-bullets-step [data-tag-name="bbva-button-default"]#primary-button-footer',
                        },
                    },
                    successModal: {
                        properties: {
                            root: 'insurance-cancellation-cancel-travel-insurance-mx #receipt-success-modal div receipt-success'
                        },
                        receiptSuccessIllustration: '#receipt-success-icon',
                        receiptSuccessOperationDetails: '#receipt-success-title p',
                        receiptSuccessInsuranceType: 'div.content-list cancel-insurance-list',
                        shareReceiptButton: '#receipt-success-share-button-button-row #buttons span bbva-button-action',
                        successHeader: '#helpModalHeader header',
                        receiptContent: 'receipt-success div.content-list',
                        receiptInfoMessage: 'receipt-success #receipt-success-message #receipt-success-message',
                    }
                },
                continueCancellationBtn: '#cancel-insurance-footer-buttons-summary-confirmation [data-tag-name="bbva-button-default"]#primary-button-footer',
                tokenModal: CellsSignOperationModalSpherica,
            },
            requiredElements: [
                'root'
            ]
        }
        );
    }

    async _screenValidation({item, value = '', insurance = ''}) {
        const {
            successModal: currentSuccessModal,
            multiStep: currentMultistep,
            keepInMindModal: currentKeepInMindModal,
            alreadyCancelledModal: currentAlreadyCancelledModal,
            alreadyCancelledModalButtons: currentAlreadyCancelledModalButtons,
            errorModal: currentErrorModal,
            helpModal: currentHeader
        } = await this.getCurrentElements(insurance);

        switch (item.toLowerCase()) {
            case 'success header':
                await currentHeader.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'keep in mind assistances':
                await currentMultistep.keepInMind.assistancesBullet.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'keep in mind warning container':
                await currentMultistep.keepInMind.warningContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel insurance screen':
                await currentMultistep.cancellationInsuranceSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'travel cancelled option':
                await currentMultistep.traveledCancelledOption.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance data':
                await currentMultistep.insuranceData.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'keep in mind':
                await currentMultistep.keepInMindLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancellation detail':
                await currentMultistep.cancellationDetailLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary confirm button':
                await currentMultistep.summaryConfirmButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary keep insurance button':
                await currentMultistep.summaryKeepInsuranceButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'keep insurance close button':
                await currentKeepInMindModal.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'keep insurance main text':
                await currentKeepInMindModal.primaryText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'keep insurance secondary text':
                await currentKeepInMindModal.secondaryText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'already cancelled warning':
                await currentAlreadyCancelledModal.alreadyCancelledWarning.waitForDisplayed({timeout:config.wait.M, reverse: value === 'not visible'});
                break;
            case 'already cancelled title':
                await currentAlreadyCancelledModal.alreadyCancelledTitle.waitForDisplayed({timeout:config.wait.M, reverse: value === 'not visible'});
                break;
            case 'already cancelled text':
                await currentAlreadyCancelledModal.alreadyCancelledText.waitForDisplayed({timeout:config.wait.M, reverse: value === 'not visible'});
                break;
            case 'already cancelled call button':
                await currentAlreadyCancelledModalButtons.alreadyCancelledCallButton.waitForDisplayed({timeout:config.wait.M, reverse: value === 'not visible'});
                break;
            case 'already cancelled exit button':
                await currentAlreadyCancelledModalButtons.alreadyCancelledExitButton.waitForDisplayed({timeout:config.wait.M, reverse: value === 'not visible'});
                break;
            case 'unauthorized warning':
                await currentErrorModal.unauthorizedWarning.waitForDisplayed({timeout:config.wait.M, reverse: value === 'not visible'});
                break;
            case 'unauthorized title':
                await currentErrorModal.unauthorizedTitle.waitForDisplayed({timeout:config.wait.M, reverse: value === 'not visible'});
                break;
            case 'unauthorized text':
                await currentErrorModal.unauthorizedText.waitForDisplayed({timeout:config.wait.M, reverse: value === 'not visible'});
                break;
            case 'unauthorized call button':
                await currentErrorModal.unauthorizedCallButton.waitForDisplayed({timeout:config.wait.M, reverse: value === 'not visible'});
                break;
            case 'unauthorized exit button':
                await currentErrorModal.unauthorizedExitButton.waitForDisplayed({timeout:config.wait.M, reverse: value === 'not visible'});
                break;
            case 'receipt success screen':
                await currentSuccessModal.receiptSuccessScreen.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt success illustration':
                await currentSuccessModal.receiptSuccessIllustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt success operation detail':
                await currentSuccessModal.receiptSuccessOperationDetails.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt success share button':
                await currentSuccessModal.shareReceiptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'keep in mind continue button':
                await currentMultistep.keepInMind.keepInMindContinueButton.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'keep in mind keep insurance button':
                await currentMultistep.keepInMind.keepInMindKeepInsuranceButton.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'cancellation detail continue button':
                await currentMultistep.cancellationDetailStep.cancellationDetailContinueButton.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'cancellation detail keep insurance button':
                await currentMultistep.cancellationDetailStep.cancellationDetailKeepInsuranceButton.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'first step summary':
                await currentMultistep.firstStepSummary.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'footer cancellation step':
                await currentMultistep.reasonCancellation.continueButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'token page icon':
                await this.tokenModal.smsIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header receipt success':
                await currentSuccessModal.successHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance cancel receipt':
                await currentSuccessModal.receiptContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'receipt info message':
                await currentSuccessModal.receiptInfoMessage.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'share receipt button':
                await currentSuccessModal.shareReceiptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async chooseReasonCancellation(selectedOption, insuranceType) {
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.S,
            timeoutToDisappear: config.wait.XL
        });
        const selectedReason = (selectedOption.split('-'))[1].toLowerCase();
        let selector;
        switch (selectedReason.trim()) {
            case 'payment no longer':
                selector = 'paymentNoLongerOption';
                break;
            case 'my travel was cancelled':
                selector = 'travelCancelledOption';
                break;
            case 'did not want the insurance':
                selector = 'notWantedOption';
                break;
            default:
                throw new Error('Option is not available reason...');
        }
        const currentMultiStep = await this.getCurrentMultistep(insuranceType);
        const reasonElement = currentMultiStep.reasonCancellation[selector];
        await (await reasonElement.waitForClickable({timeout: config.wait.M})).click();
    }

    async goToConsiderationStep(insuranceType) {
        const currentMultiStep = await this.getCurrentMultistep(insuranceType);
        await (await currentMultiStep.reasonCancellation.continueButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async goToDetailCancelationStep(insuranceType) {
        const currentMultiStep = await this.getCurrentMultistep(insuranceType);
        await (await currentMultiStep.keepInMind.continueButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async goToSummaryStep(insuranceType) {
        let selector;
        if(insuranceType === 'travel') {
            selector = 'badServiceOption';
        } else {
            selector = 'paymentNoLongerOption';
        }
        const currentMultiStep = await this.getCurrentMultistep(insuranceType);
        const reasonElement = currentMultiStep.reasonCancellation[selector];
        await (await reasonElement.waitForClickable({timeout: config.wait.M})).click({ scrollIntoView: false });
        await (await currentMultiStep.reasonCancellation.continueButton.waitForDisplayed({timeout: config.wait.M})).click();
        await (await currentMultiStep.keepInMind.continueButton.waitForDisplayed({timeout: config.wait.L})).click({ scrollIntoView: false });
        await (await currentMultiStep.cancellationDetails.continueButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async finishProcess() {
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.S,
            timeoutToDisappear: config.wait.XL
        });
        await (await this.continueCancellationBtn.waitForClickable({timeout: config.wait.L})).click({ scrollIntoView: false });
    }

    async goToReasonCancellationStep(stepGoBack, insuranceType) {
        const currentMultiStep = await this.getCurrentMultistep(insuranceType);
        switch (stepGoBack) {
            case 'cancellation reason':
                await (await currentMultiStep.cancellationReasonModifyStepButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'keep in mind':
                await (await currentMultiStep.cancellationKeepInMindModifyStepButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'cancellation detail':
                await (await currentMultiStep.cancellationDetailModifyStepButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${stepGoBack} option is not available step to go back...`);
        }
    }

    async goToSummaryFromStep(insuranceType) {
        const currentMultiStep = await this.getCurrentMultistep(insuranceType);
        await (await currentMultiStep.reasonCancellation.continueButton.waitForDisplayed({timeout: config.wait.M})).click();
        if(insuranceType === 'dynamic life') {
            await (await currentMultiStep.keepInMind.continueButton.waitForDisplayed({timeout: config.wait.L})).click();
        }
    }

    async openKeepInsuranceModal(insuranceType, keepInMindStep) {
        const currentMultiStep = await this.getCurrentMultistep(insuranceType);
        let button;
        if(keepInMindStep === 'keep in mind step') {
            button = await currentMultiStep.keepInMind.keepInMindKeepInsuranceButton;
        } else {
            button = await currentMultiStep.reasonCancellation.keepInsuranceButton;
        }
        await button.waitForDisplayed({timeout: config.wait.M});
        await button.click();
    }

    async getCurrentMultistep(insuranceType) {
        return insuranceType === 'travel' ? this.elementsTravel.multiStep : this.elementsLife.multiStep;
    }

    async getCurrentElements(insurance = '') {
        if(insurance === 'life') {
            return this.elementsLife;
        }
        return this.elementsTravel;
    }

    async chooseAndGoToStep(step, insuranceType) {
        switch (step.toLowerCase()) {
            case 'consideration':
                await this.goToConsiderationStep(insuranceType);
                break;
            case 'summary view confirm':
                await this.goToSummaryStep(insuranceType);
                break;
            default:
                throw new Error(`${step} option is not available step...`);
        }
    }
}

export default new CancelInsurance();
