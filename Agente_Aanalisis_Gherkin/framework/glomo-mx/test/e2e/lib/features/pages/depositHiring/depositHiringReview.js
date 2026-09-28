import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
@page()
class DepositHiringReview extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'DepositHiringReview',
            root: '#cells-template-depositHiringReview[state="active"]',
            elements: {
                titleDepositHiringReview: 'cells-molecule-header',
                titleDepositHiringConfirm: 'h2.title',
                amountDepositHiring: 'cells-atom-amount.charge-amount.amount-huge-decimals',
                btnExit: '#primaryBtn',
                balanceIcon: 'cells-successful-response #body-section ul.additional-info li:nth-child(1) cells-icon-message #principalIcon',
                balanceText: 'cells-successful-response #body-section ul.additional-info li:nth-child(1) cells-icon-message #notInline',
            },
            requiredElements: [
                'titleDepositHiringReview',
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.titleDepositHiringReview.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title':
                await this.titleDepositHiringConfirm.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount':
                await this.amountDepositHiring.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button exit':
                await this.btnExit.waitForClickable({timeout: config.wait.XL});
                break;
            case 'balance icon':
                await this.balanceIcon.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'balance text':
                await this.balanceText.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new DepositHiringReview();
