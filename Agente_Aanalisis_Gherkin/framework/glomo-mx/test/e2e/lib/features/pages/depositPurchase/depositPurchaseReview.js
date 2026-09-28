import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
@page()
class DepositPurchaseReview extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'DepositPurchaseReview',
            root: '#cells-template-depositsPurchaseReview[state="active"]',
            elements: {
                titleDepositPurchaseReview: 'cells-molecule-header-spherica',
                titleDepositPurchaseConfirm: 'h2.title',
                amountDepositPurchase: 'cells-atom-amount-spherica.currency-xxxl',
                btnExit: '#btnRight',
                couponLegend: 'cells-successful-response-spherica #header-section div.coupon-container',
                storeAndForward: 'cells-successful-response-spherica #header-section.info.core'
            },
            requiredElements: [
                'titleDepositPurchaseReview',
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.titleDepositPurchaseReview.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title':
                await this.titleDepositPurchaseConfirm.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount':
                await this.amountDepositPurchase.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button exit':
                await this.btnExit.waitForClickable({timeout: config.wait.XL});
                break;
            case 'coupon':
                await this.couponLegend.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'store forward':
                await this.storeAndForward.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new DepositPurchaseReview();
