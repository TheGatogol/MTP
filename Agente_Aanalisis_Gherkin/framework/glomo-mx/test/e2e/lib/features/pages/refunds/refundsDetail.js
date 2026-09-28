import AbstractGlomoPage from '../abstract-glomo-page';
import {
    ScreenValidationKeyNotFound,
    page
} from '@csqe/radish';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
@page()
class RefundsDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: 'glomo-opx-template-spherica#cells-template-refunds[state="active"]',
            elements: {
                header: '#refunds-origin #stepContainer .cells-step__header .cells-step__header-title',
                closeButton: 'cells-molecule-header-spherica#header-refunds #btnRight',
                originTitle: '#refunds-origin #stepContainer .cells-step__header .cells-step__header-title',
                origiAccuntLabel: '#refunds-origin #item .item__title .item__name',
                originAmount: '#refunds-origin .item__quantities cells-atom-amount-spherica',
                originAccount: '#refunds-origin #item .item__title .item__additional',
                originAmounLabel: '#refunds-origin .item__quantities .amount-label',
                destinationLabel: '#refunds-destination .cells-step__header .cells-step__header-title',
                destinationAvatarIcon: '#refunds-destination cells-avatar-item-spherica #contactAvatar',
                destinationName: '#refunds-destination cells-avatar-item-spherica .cells-avatar-item-list .cells-avatar-item-list__main',
                destinationAccount: '#refunds-destination  cells-avatar-item-spherica .cells-avatar-item-list__secondaryList .cells-avatar-item-list__secondaryList__description',
                destinationNameBank: '#refunds-destination  cells-avatar-item-spherica .cells-avatar-item-list__secondaryList__block .cells-avatar-item-list__secondaryList__description',
                amountTitle: '#refunds-amount .step-container .cells-step__header-title',
                destinationAmount: '#refunds-amount #cellsStepEnterAmountFilled cells-atom-amount-spherica',
                conceptTitle: '#refunds-concept #stepContainer .cells-step__header .cells-step__header-title',
                referenceLabel: '#refunds-concept #stepContainer .reference',
                reference: '#refunds-concept #stepContainer .subtitle',
                conceptLabel: '#refunds-concept #stepContainer .concept-in-line .filled-subtitle',
                concept: '#refunds-concept #stepContainer .concept-in-line .subtitle',
                refundAmountLabel: 'cells-operation-summary-spherica#refunds-summary div#operationTotal p.cells-summary-view--title',
                amount: 'cells-operation-summary-spherica#refunds-summary div#operationTotal [data-selector="cells-summary-view-main-amount"]',
                taxAmountLabel: 'cells-operation-summary-spherica#refunds-summary div#operationTotal p.cells-summary-view--commission',
                taxAmount: 'cells-operation-summary-spherica#refunds-summary div#operationTotal p.cells-summary-view--commission .amount-wrapper',
                continueButton: '#refunds-summary #summary .cells-st-button-spherica-container cells-st-button-spherica:not(.btn-link)',
                dmRefunds: 'glomo-refund-transfer-manager-mx',

                refudsInformation: GlomoAlertManagerSpherica,
                errorModalInsufficientInsurance: {
                    containerIcon: 'bbva-help-modal-spherica #helpModalTitle  bbva-type-icon',
                    descriptions: 'bbva-help-modal-spherica #helpModalContent bbva-type-text',
                    title: 'bbva-help-modal-spherica #title-text',
                    acceptBtn: 'bbva-help-modal-spherica div .content .modal-main .modal-footer bbva-button-default'
                },
                signConnector: CellsSignOperationModal,
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation(
        {
            item
        },
    ) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'close button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'origin title':
                await this.originTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'origin account label':
                await this.origiAccuntLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'origin amount':
                await this.originAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'origin account':
                await this.originAccount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'origin amount label':
                await this.originAmounLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'destination title':
                await this.destinationLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'destination avatar icon':
                await this.destinationAvatarIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'destination name':
                await this.destinationName.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'destination account':
                await this.destinationAccount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'destination name bank':
                await this.destinationNameBank.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount title':
                await this.amountTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'destination amount':
                await this.destinationAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'concept title':
                await this.conceptTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'reference label':
                await this.referenceLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'reference':
                await this.reference.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'concept label':
                await this.conceptLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'concept':
                await this.concept.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'refund amount label':
                await this.refundAmountLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount':
                await this.amount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'tax amount label':
                await this.taxAmountLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'tax amount':
                await this.taxAmount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'continue button':
                await (await this.continueButton.waitForDisplayed({timeout: config.wait.L}));
                break;
            case 'modal header':
                await this.refudsInformation.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'modal close button':
                await this.refudsInformation.closeBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'information icon':
                await this.refudsInformation.containerIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'information icon modal':
                await this.errorModalInsufficientInsurance.containerIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'descriptions':
                await this.refudsInformation.descriptions.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'refund money button':
                await this.refudsInformation.acceptBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'cancel link':
                await this.refudsInformation.cancelBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'insufficient balance title':
                await this.refudsInformation.message.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'insufficient balance title modal':
                await this.errorModalInsufficientInsurance.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'insufficient balance label':
                await this.refudsInformation.descriptions.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'insufficient balance label modal':
                await this.errorModalInsufficientInsurance.containerIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'understand button':
                await this.refudsInformation.acceptBtn.waitForDisplayed({timeout: config.wait.L});    
                break;
            case 'header otp':
                await this.signConnector.smsPasswordLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'img otp':
                await this.signConnector.smsImage.waitForDisplayed({timeout: config.wait.L});
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
                throw new ScreenValidationKeyNotFound({
                    key: item,
                    args: arguments[0]
                });
        }
    }
    async refundsButtonClick() {
        await this.refudsInformation.acceptBtn.waitForClickable({timeout: config.wait.L});
        await this.refudsInformation.acceptBtn.click();
    }

    async refundsButtonClickCancel() {
        await this.refudsInformation.cancelBtn.waitForClickable({timeout: config.wait.L});
        await this.refudsInformation.cancelBtn.click();
    }

    async refundsSetInoformation() {
        await this.dmRefunds.execute({
            script: (storageResponse = false) => this._dispatchCustomDataModalErrorRefounds(storageResponse)
        });
    }

    async continueBtnClic() {
        await (await this.continueButton.waitForClickable({timeout: config.wait.L})).click();
    }

    async exitButton() {
        await this.closeButton.waitForEnabled({timeout: config.wait.L});
        await this.closeButton.click();
    }

    async setOtp() {
        await this.fillOtp('11111111');
    }

}

export default new RefundsDetail();
