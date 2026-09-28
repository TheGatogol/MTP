import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';

@page()
class ReuseOperation extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-reuseOperationsTransfers[state="active"]',
            elements: {
                header: 'cells-molecule-header.header',
                stepProductSelector: '#transfer-origin[active][collapsed]',
                stepRecipientSelector: '#transfer-destination[active][collapsed]',
                stepEnterAmount: '#transfer-amount[active][collapsed]',
                stepConcept: '#transfer-concept[active]',
                operationSummary: '#budgetSubmitCreate #summary #operationTotal cells-atom-amount',
                originTitle: '#transfer-origin #stepContainer div div h2',
                originAccountName: '#transfer-origin #item div.column div div.item__info div.item__title div.item__name span',
                originAccountLabel: '#transfer-origin #item #maskedValue div.wrapper span.number',
                originAccountBalance: '#transfer-origin #item div.column div div.item__quantities div cells-atom-amount',
                receiverTitle: '#transfer-destination #stepContainer div div h2',
                receiverAvatar: '#transfer-destination #recipient #contactAvatar',
                receiverAccountName: '#transfer-destination #item div.column div div.item__info div.item__title div.item__additional div cells-heading span',
                receiverName: '#transfer-destination #recipient div div.cells-avatar-item-list div.cells-avatar-item-list-container p',
                receiverAlias: '#transfer-destination #recipient div div.cells-avatar-item-list div.cells-avatar-item-list__secondaryList p.cells-avatar-item-list__secondaryList__description',
                receiverThirdAccountNumber: '#transfer-destination #recipient div div.cells-avatar-item-list div.cells-avatar-item-list__secondaryList div p.cells-avatar-item-list__secondaryList__description',
                receiverBankName: '#transfer-destination #recipient div div.cells-avatar-item-list div.cells-avatar-item-list__secondaryList div p.cells-avatar-item-list__secondaryList__description',
                receiverAccountNumber: '#transfer-destination #item #maskedValue div.wrapper span.number',
                receiverAccountBalance: '#transfer-destination #item div.column div div.item__quantities div cells-atom-amount',
                amountTitle: '#transfer-amount #stepContainer div div h2',
                amount: '#transfer-amount #cellsStepEnterAmountFilled div.value div cells-atom-amount',
                conceptTitle: '#transfer-concept #stepContainer div.cells-step__header div',
                concept: '#transfer-concept #stepContainer div div div.concept-in-line p.filled-subtitle.concept-label',
                conceptReference: '#transfer-concept #refInput div.field-icons-wrapper',
                conceptInput: '#transfer-concept #conceptInput input',
                conceptContinueButton: '#transfer-concept #continueBtn',
                summaryAmount: '#budgetSubmitCreate #summary #operationTotal cells-atom-amount',
                continueButton: '#budgetSubmitCreate #summary #collapser cells-st-button.primary.size-m.cells-summary-view--submit-button',
                signConnector: CellsSignOperationModal,
            },
            elementsSpherica: {
                signConnector: CellsSignOperationModalSpherica,
                header: 'cells-molecule-header-spherica',
                continueButton: 'cells-operation-summary-spherica#budgetSubmitCreate cells-summary-view-spherica#summary cells-st-button-spherica.positive.full button',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'step product selector':
                await this.stepRecipientSelector.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'step recipient selector':
                await this.stepProductSelector.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'step enter amount':
                await this.stepEnterAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'step concept':
                await this.stepConcept.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'operation summary':
                await this.operationSummary.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'origin title':
                await this.originTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'account name':
                await this.originAccountName.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'account label':
                await this.originAccountLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'account balance':
                await this.originAccountBalance.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'receiver title':
                await this.receiverTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'receiver avatar':
                await this.receiverAvatar.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'receiver name':
                await this.receiverName.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'receiver alias':
                await this.receiverAlias.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'receiver third account':
                await this.receiverThirdAccountNumber.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'receiver third bank':
                await this.receiverBankName.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'receiver account name':
                await this.receiverAccountName.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'receiver account number':
                await this.receiverAccountNumber.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'receiver account balance':
                await this.receiverAccountBalance.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount title':
                await this.amountTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount':
                await this.amount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'concept title':
                await this.conceptTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'concept':
                await this.concept.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'reference concept':
                await this.conceptReference.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'input concept':
                await this.conceptInput.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button concept':
                await this.conceptContinueButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary':
                await this.summaryAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header otp':
                await this.signConnector.smsPasswordLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'img otp':
                this.isSpherica() ? await this.signConnector.smsIcon.waitForDisplayed({timeout:config.wait.M}) :
                    await this.signConnector.smsImage.waitForDisplayed({timeout:config.wait.M}) ;
                break;
            case 'title otp':
                await this.signConnector.insertSmsLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'input otp':
                await this.signConnector.smsPasswordInputField.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'continue button otp':
                await this.signConnector.smsContinueButton.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async continueProcess() {
        await this.continueButton.waitForClickable({timeout: config.wait.L});
        await this.continueButton.click();
    }

    async fillInterbankConceptForInterbankTransfer() {
        await this.conceptInput.waitForDisplayed({timeout: config.wait.M});
        await this.conceptInput.setValue({value: 'interbank'});
    }

    async fillInterbankConcept() {
        await this.fillInterbankConceptForInterbankTransfer();
        await this.conceptContinueButton.waitForDisplayed({timeout: config.wait.M});
        await this.conceptContinueButton.waitForClickable({timeout: config.wait.L});
        await this.conceptContinueButton.click();
    }

    async finishProcess() {
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.L
        });
        await (await this.continueButton.waitForClickable({timeout: config.wait.L})).click();
    }

    async continueActionByType(transferType) {
        switch (transferType) {
            case 'internal transfer':
            case 'interbank transfer':
            case 'transferencia a terceros':
            case 'transferencia otros bancos':
                await this.finishProcess();
                await this.fillOtp('11111111');
                break;
            case 'transferencia cuentas propias':
            case 'own transfer':
                await this.continueProcess();
                break;
            default:
                throw new Error(`${transferType} option is not available...`);
        }
    }
}

export default new ReuseOperation();
