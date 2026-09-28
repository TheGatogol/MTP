import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundsWithdrawalStep1 extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'FundsWithdrawalStep1',
            root: '#cells-template-fundsWithdrawal[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                fundOffer: '#cells-step-card-offer-page .cells-step-offer-page-header__title--additional',
                selectedAccount: 'cells-step-product-selector.funds-investment cells-product-item  .item__quantities .amount-wrapper',
                continueBtn:   'cells-step-product-selector.funds-investment cells-molecule-actions cells-st-button button',
                partialWithdrawal: '#cells-step-select-operation-type .full div:nth-of-type(1) cells-key-values',
                totalWithdrawal: '#cells-step-select-operation-type .full div:nth-of-type(2) cells-key-values',
                btnClose: 'cells-molecule-header #btnLeft',
                simulationInput: 'cells-step-simulation-operation cells-enter-limited-amount #input',
                changeAmountBtn: '#cells-step-simulation-operation #stepContainer div.cells-step__header #changeBtn button.cells-step__header-button--text',
                titleAmount: 'cells-step-simulation-operation #stepContainer [class="cells-step__header-title"]',
                descriptionAmount: 'cells-step-simulation-operation #stepContainer [class="cells_step_enter_limited_amount__description"]',
                iconAmount: 'cells-step-simulation-operation cells-enter-limited-amount #iconlimitsInRangeSection',
                messageAmount: 'cells-enter-limited-amount cells-icon-message #notInline',
                btnCalculeFound: 'cells-step-simulation-operation cells-enter-limited-amount #enterAmountBtn',
                btnSuccessfulSale: 'cells-summary-view cells-st-button.primary.size-m.cells-summary-view--submit-button',
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica',
                fundOffer: 'cells-step-card-offer-page-spherica div.cells-step-offer-page-header__title--additional',
                selectedAccount: 'cells-step-product-selector-spherica.funds-investment cells-product-item-spherica  .item__quantities .amount-wrapper',
                continueBtn: 'cells-step-product-selector-spherica.funds-investment cells-molecule-actions-spherica cells-st-button-spherica button',
                parcialWithdrawal: 'cells-step-spherica#stepOperationType div.full div.several-operation:nth-of-type(1) cells-key-values-spherica',
                totalWithdrawal: 'cells-step-spherica#stepOperationType div.full div.several-operation:nth-of-type(2) cells-key-values-spherica',
                btnClose: 'cells-molecule-header-spherica #btnRight',
                simulationInput: 'cells-step-simulation-operation-spherica cells-enter-limited-amount-spherica #input',
                changeAmountBtn: '#cells-step-simulation-operation-spherica #stepContainer div.cells-step__header #changeBtn button.cells-step__header-button--text',
                titleAmount: 'cells-step-simulation-operation-spherica #stepContainer [class="cells-step__header-title"]',
                descriptionAmount: 'cells-step-simulation-operation-spherica #stepContainer [class="cells_step_enter_limited_amount__description"]',
                iconAmount: 'cells-step-simulation-operation-spherica cells-enter-limited-amount-spherica #iconlimitsInRangeSection',
                messageAmount: 'cells-enter-limited-amount-spherica cells-icon-message-spherica #notInline',
                btnCalculeFound: 'cells-step-simulation-operation-spherica cells-enter-limited-amount-spherica #enterAmountBtn',
                btnSuccessfulSale: 'cells-summary-view-spherica cells-st-button-spherica.primary.size-m.cells-summary-view--submit-button'
            },

            requiredElements: [
                'selectedAccount'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'fund offer summary':
                await this.fundOffer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'selected account':
                await this.selectedAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continueBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title amount':
                await this.titleAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description amount':
                await this.descriptionAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input amount':
                await this.simulationInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon amount':
                await this.iconAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message amount':
                await this.messageAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async confirmAccountSelection() {
        await this.continueBtn.scrollIntoView();
        await this.continueBtn.waitForClickable({timeout: config.wait.M});
        await this.continueBtn.click();
    }

    async saleSelection(option) {
        if (option === 'partial') {
            await this.partialWithdrawal.waitForClickable({timeout: config.wait.M});
            await this.partialWithdrawal.click();
        } else {
            await this.totalWithdrawal.waitForClickable({timeout: config.wait.M});
            await this.totalWithdrawal.click();
        }
    }

    async changeAmount() {
        await this.btnSuccessfulSale.waitForAnimation({timeout: config.wait.L});
        await this.changeAmountBtn.scrollIntoView();
        await this.changeAmountBtn.waitForDisplayed({timeout: config.wait.M});
        await this.changeAmountBtn.click({useActions: true});
    }

    async inputAmount(amount) {
        await this.simulationInput.waitForDisplayed({timeout: config.wait.L});
        await this.simulationInput.click();
        await this.simulationInput.setValue({value: amount});
    }

    async closePage() {
        await this.btnClose.waitForClickable({timeout: config.wait.M});
        await this.btnClose.click();
    }

    async calculateFund() {
        await this.btnCalculeFound.waitForClickable({timeout: config.wait.M});
        await this.btnCalculeFound.click();
    }

    async successfulSale() {
        await this.btnSuccessfulSale.waitForClickable({timeout: config.wait.M});
        await this.btnSuccessfulSale.click();
    }

    async confirmSale(otp = '11111111') {
        await this.fillOtp(otp);
    }
}

export default new FundsWithdrawalStep1();
