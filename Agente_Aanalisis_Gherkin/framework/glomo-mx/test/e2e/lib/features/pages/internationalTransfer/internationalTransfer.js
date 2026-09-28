import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsModalSelector from '../../components/cells-modal-selector';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import FeedbackClientVoiceConnect from '../../components/feedback-client-voice-connect-gl';
@page()
class InternationalTransfer extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'InternationalTransfer',
            root: '#cells-template-internationalTransfers[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                textAccount: 'cells-step-product-selector #stepContainer div div h2',
                textAddressee: 'cells-step-recipient-selector #stepContainer div div h2',
                internationalTransferTitle: 'cells-molecule-header',
                addRecipientBtn: '#stepContainer > div.full > div',
                economicActivityFirstTextArea: '#cells-step-economic-activity #first-text-area #ironArea #textarea',
                economicActivitySecondTextArea: '#cells-step-economic-activity #second-text-area #ironArea #textarea',
                economicActivityCheckbox: '#cells-step-economic-activity #checkbox-btn',
                economicActivityContinueButton: '#cells-step-economic-activity #continue-btn',
                addLimitedAmount: '#amountInput #input',
                btnContinueInternational:'cells-st-button #continueButton',
                addConceptInput: '#conceptInput #input',
                reasonTransferSelect: 'cells-step-concept #movementTypeSelector',
                reasonTransferOptions: {
                    component: {
                        ComponentClass: CellsModalSelector
                    }
                },
                btnContinueReferenceI: '#continueBtn > button',
                btnContinueStepI: '#collapser > cells-st-button.primary.size-m.cells-summary-view--submit-button > button',
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        paragraphElements:{
                            information: '.text-with-icon p',
                        },
                        additionalElements:{
                            contentTitle: '#modal header',
                            iconHelp: '#modal div.icon-container',
                        }
                    }
                ],
                originAccountSelected: 'cells-step-product-selector',
                addNewRecipient: 'cells-step-recipient-selector',
                feedbackClient: FeedbackClientVoiceConnect,
            },
            requiredElements: [
                'internationalTransferTitle',
            ],
        });
    }

    async addRecipient() {
        await (await this.addRecipientBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async enterEconomicActivity(economicActivity) {
        await this.economicActivityFirstTextArea.waitForClickable({timeout: config.wait.L});
        await this._fillInputField({element: this.economicActivityFirstTextArea, value:'Vendo calzado.'});

        if (economicActivity === 'foreign') {
            await this.economicActivityCheckbox.click();
            await (await this.economicActivitySecondTextArea.waitForClickable({timeout: config.wait.L})).click();
            await this._fillInputField({element: this.economicActivitySecondTextArea, value:'Vendo calzado en canadá.'});
        }
    }

    async economicActivityClickOnContinue() {
        await (await this.economicActivityContinueButton.waitForClickable({timeout: config.wait.L})).click();
    }

    async addAmount() {
        await this.addLimitedAmount.waitForClickable({timeout: config.wait.L});
        await this._fillInputField({element: this.addLimitedAmount, value:'300'});
    }

    async completeExchangeRate() {
        await (await this.btnContinueInternational.waitForClickable({timeout: config.wait.L})).click();
    }

    async continueProcess() {
        await this.dialogOperations.confirmDialog({isConfirmed: true});
    }

    async selectReasonTransfer() {
        await (await this.reasonTransferSelect.waitForClickable({timeout: config.wait.M})).click();
        await this.reasonTransferOptions.waitForDisplayed({timeout: config.wait.L});
        await this.reasonTransferOptions.selectItem('201');
    }

    async addConcept() {
        await this.selectReasonTransfer();
        await this.addConceptInput.waitForClickable({timeout: config.wait.M});
        await this._fillInputField({element: this.addConceptInput, value:'Alquiler'});
    }

    async completePayment() {
        await (await this.btnContinueReferenceI.waitForClickable({timeout: config.wait.M})).click();
    }

    async timeActivation() {
        await (await this.internationalTransferTitle.waitForVisible({timeout: config.wait.M})).click();
    }

    async completeProcessTransfer() {
        await (await this.btnContinueStepI.waitForClickable({timeout: config.wait.M})).click();
        await this.waitUntilSpinnerVeil();
    }

    async flowToBeneficiaryData() {
        await this.enterEconomicActivity();
        await this.economicActivityClickOnContinue();
        await this.addAmount();
        await this.timeActivation();
        await this.completeExchangeRate();
    }

    async flowToAmount() {
        await this.flowToBeneficiaryData();
        await this.addConcept();
        await this.completePayment();
    }

    async flowToConcept() {
        await this.flowToAmount();
        await this.completeProcessTransfer();
    }

    async flowToUserOtp() {
        await this.flowToConcept();
    }

    async fillOtp(code = '12345678') {
        await super.fillOtp(code);
    }

    async completeOperation() {
        await (await this.btnContinueStepI.waitForClickable({timeout: config.wait.M})).click();
    }

    async continueUntilCompleteProcess(economicActivity, MTU) {        
        await this.enterEconomicActivity(economicActivity);
        await this.economicActivityClickOnContinue();
        await this.addAmount();
        await this.timeActivation();
        if (!await this.isFeedback()) {
            await this.completeExchangeRate();
            await this.selectReasonTransfer();
            await this.addConcept();
            await this.completePayment();
        }
        if (!MTU) {
            await this.completeProcessTransfer();
        }
    }

    async isFeedback() {
        return global.user.abandonProcess !== false && global.user.abandonProcess !== undefined;
    }

    async abandonProcess() {
        await this.header.actionRight();
        await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
        await this.dialogOperations.acceptBtn.click();
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'title':
                await this.dialogOperations.additionalElements.contentTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon help':
                await this.dialogOperations.additionalElements.iconHelp.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information':
                await this.dialogOperations.paragraphElements.information.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async answerFeedbackForm(feedback) {
        await this.feedbackClient.answerFeedbackForm(feedback);
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header title':
                await this.header.operationTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button exit':
                await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text account':
                await this.textAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text addressee':
                await this.textAddressee.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add recipient':
                await this.addRecipientBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header feedback':
                await this.feedbackClient.welcome.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button feedback':
                await this.feedbackClient.welcome.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rating feedback button':
                await this.feedbackClient.selectRating(5, false);
                break;
            case 'header thankyou feedback': 
                await this.feedbackClient.thankYou.headerThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit thankyou feedback': 
                await this.feedbackClient.thankYou.exitThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'micro thankyou feedback': 
                await this.feedbackClient.thankYou.microillustrationThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title thankyou feedback': 
                await this.feedbackClient.thankYou.titleThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description thankyou feedback': 
                await this.feedbackClient.thankYou.descriptionThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _fillInputField({element, value = ''}) {
        await element.waitForDisplayed({timeout: config.wait.M});
        await element.setValue({value: value, slow: true});
    }

}

export default new InternationalTransfer();
