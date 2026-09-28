import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class CodiQrPaymentsMain extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-codiQrPaymentsMain[state="active"]',
            elements: {
                btnClose: 'cells-molecule-header #btnRight cells-atom-icon',
                containerAccount: 'bbva-multistep-codi-qr-payments-p2m #account-list bbva-step-account-list-codi-qr-payments-p2m [class="subcategory"] div.container',
                inputAmount: 'bbva-multistep-codi-qr-payments-p2m #amount-codi [slot="_input"]',
                btnContinue: 'bbva-multistep-codi-qr-payments-p2m #amount-codi #button-step-3',
                btnPay: 'bbva-multistep-codi-qr-payments-p2m #payment-request-button',
                btnConfirmPay: 'cells-sign-operation-modal #accept button',
                btnCancel: 'cells-sign-operation-modal #cancel',
            },
            requiredElements: ['btnClose'],
        });
    }

    async _screenValidation({item}) {
        switch(item.toLowerCase()) {
            case 'header':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.btnClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'container account':
                await this.containerAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount input':
                await this.inputAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.btnContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay button':
                await this.btnPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm pay button':
                await this.btnConfirmPay.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectAccount() {
        await this.containerAccount.waitForDisplayed({timeout: config.wait.M});
        await this.containerAccount.click();
    }

    async insertAmount() {
        await this.inputAmount.waitForDisplayed({timeout: config.wait.M});
        await this.inputAmount.click();
        await this.inputAmount.setValue({value: '100'});
        await this.btnContinue.waitForEnabled();
        await this.btnContinue.click();
    }

    async pay() {
        await this.btnPay.waitForDisplayed({timeout: config.wait.M});
        await this.btnPay.click();
    }

    async confirmPay() {
        await this.btnConfirmPay.waitForDisplayed({timeout: config.wait.M});
        await this.btnConfirmPay.click();
    }

    async cancelPay() {
        await this.btnCancel.waitForDisplayed({timeout: config.wait.M});
        await this.btnCancel.click();
    }
}

export default new CodiQrPaymentsMain();
