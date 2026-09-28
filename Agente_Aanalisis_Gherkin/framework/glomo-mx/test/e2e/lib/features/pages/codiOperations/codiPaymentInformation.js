import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class CodiPaymentInformation extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-codiPaymentInformation[state="active"]',
            elements: {
                header: '',
                btnClose: 'bbva-multistep-codi-p2p-mobile-transfer-request #header #btn-right-primary',
                containerAccount: 'bbva-multistep-codi-p2p-mobile-transfer-request #step-1 div.content bbva-step-account-list-codi-request bbva-list-card:nth-child(3) div.container',
                btnPayMoney: 'bbva-multistep-codi-p2p-mobile-transfer-request #paymentRequestBtn',
                btnAccept: 'cells-sign-operation-modal #accept button',
                btnCancel: 'cells-sign-operation-modal #cancel'
            },
            requiredElements: ['header'],
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
            case 'pay money button':
                await this.btnPayMoney.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectIssuingAccount() {
        await this.containerAccount.waitForDisplayed({timeout: config.wait.M});
        await this.containerAccount.click();
    }

    async payMoney() {
        await this.btnPayMoney.waitForDisplayed({timeout: config.wait.M});
        await this.btnPayMoney.click();
    }

    async confirmPay() {
        await this.btnPayMoney.waitForDisplayed({timeout: config.wait.M});
        await this.btnAccept.click();
    }
}

export default new CodiPaymentInformation();
