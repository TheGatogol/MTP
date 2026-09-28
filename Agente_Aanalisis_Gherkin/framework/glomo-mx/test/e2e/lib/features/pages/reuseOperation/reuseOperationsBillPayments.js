import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import CellsAtomAmount from '../../components/cells-atom-amount';
import CellsStepProductSelector from '../../components/cells-step-product-selector';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

@page()
class ReuseOperationsBillPayments extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-reuseOperationsBillPayments[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                closebuttonHeader: 'cells-molecule-header #btnRight',
                originAccount: 'cells-step-product-selector #item #maskedValue span.number',
                destinationTitle: 'cells-step-bill-payment-service-selector-mx #stepContainer h2',
                destinationName: 'cells-step-bill-payment-service-selector-mx #stepContainer cells-avatar-item .cells-avatar-item-list-container p',
                destinationAccount: 'cells-step-bill-payment-service-selector-mx #stepContainer cells-avatar-item .cells-avatar-item-list .cells-avatar-item-list__secondaryList p.cells-avatar-item-list__secondaryList__description',
                destinationNameBank: 'cells-step-bill-payment-service-selector-mx #stepContainer cells-avatar-item .cells-avatar-item-list .cells-avatar-item-list__secondaryList p.cells-avatar-item-list__secondaryList__title',
                modalInputReference: 'cells-modal-new-recipient-service-selector #modal #input',
                modalBtnContinueReference: 'cells-modal-new-recipient-service-selector #modal cells-st-button.secondary',
                amountTitle: 'cells-step-enter-amount-bill-payments #stepContainer h2',
                destinationAmount: 'cells-step-enter-amount-bill-payments #stepContainer .filled .element-item.amount-column-radio cells-atom-amount',
                conceptTitle: 'cells-step-concept #stepContainer h2',
                conceptLabel: 'cells-step-concept #stepContainer p.filled-subtitle.concept-label',
                concept: 'cells-step-concept #stepContainer p.subtitle',
                amount: 'cells-summary-view #operationTotal cells-atom-amount',
                conceptReference: '#transfer-concept #refInput div.field-icons-wrapper',
                conceptInput: '#cells-modal-new-recipient-service-selector .selectedOptionBox cells-molecule-input',
                conceptContinueButton: '#cells-modal-new-recipient-service-selector cells-st-button.secondary  button',
                summaryAmount: '#collapser cells-atom-amount',
                continueButton: '#collapser .cells-summary-view--submit-button',
                productSelector: CellsStepProductSelector,
                amountLabel: CellsAtomAmount,
                signConnector: CellsSignOperationModal
            },
            elementsSpherica: {
                signConnector: CellsSignOperationModalSpherica
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
            case 'close button':
                await this.closebuttonHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'origin title':
                await this.productSelector.validateStepCollapsed();
                break;
            case 'origin account':
                await this.originAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'destination title':
                await this.destinationTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'destination name':
                await this.destinationName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'destination account':
                await this.destinationAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'destination name bank':
                await this.destinationNameBank.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount title':
                await this.amountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'destination amount':
                await this.destinationAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'concept title':
                await this.conceptTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'concept label':
                await this.conceptLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'concept':
                await this.concept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount':
                await this.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header otp':
                await this.signConnector.smsPasswordLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'img otp':
                await this.signConnector.smsImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title otp':
                await this.signConnector.insertSmsLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input otp':
                await this.signConnector.smsPasswordInputField.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button otp':
                await this.signConnector.smsContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async finishProcess() {
        await this.continueButton.waitForAnimation({timeout: config.wait.M, interval: 500});
        await (await this.continueButton.waitForDisplayed({time: config.wait.M})).click({ useActions: true });
    }
}

export default new ReuseOperationsBillPayments();
