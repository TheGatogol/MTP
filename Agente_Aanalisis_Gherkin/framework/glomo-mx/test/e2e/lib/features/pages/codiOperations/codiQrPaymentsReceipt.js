import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class CodiQrPaymentsReceipt extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-codiQrPaymentsReceipt[state="active"]',
            elements: {
                btnClose: 'cells-sign-operation-modal #modal #closeButton',
                btnConfirm: 'cells-sign-operation-modal #accept',
                btnCancel: 'cells-sign-operation-modal #cancel',
                btnExit: 'cells-successful-response #primaryBtn',
                txtDate: 'cells-successful-response div.main-text-head.bold.with-default-space cells-atom-date #date',
                containerAmountPayment: 'cells-successful-response #body-section ul li:nth-child(1) div.key-value-container',
                containerAccountPayment: 'cells-successful-response #body-section ul li.spacing.mask-normal div.key-value-container',
                btnShare: 'cells-successful-response #body-section cells-operations-list ul li button'
            },
            requiredElements: ['btnClose'],
        });

    }

    async _screenValidation({item}) {
        switch(item.toLowerCase()) {
            case 'btn close':
                await this.btnClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'txt date':
                await this.txtDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'container amount payment':
                await this.containerAmountPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'container account payment':
                await this.containerAccountPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn share':
                await this.btnShare.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async confirmPay() {
        await this.btnConfirm.waitForDisplayed({timeout: config.wait.M});
        await this.btnConfirm.click();
    }

    async sharePayments() {
        await this.btnShare.waitForDisplayed({timeout: config.wait.M});
        await this.btnShare.click();
    }
}

export default new CodiQrPaymentsReceipt();
