import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class CodiPaymentInformationSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-codiPaymentInformationSuccess[state="active"]',
            elements: {
                btnClose: 'bbva-header-main #btn-right-primary',
                btnConfirm: 'cells-sign-operation-modal #accept',
                btnCancel: 'cells-sign-operation-modal #cancel',
                txtDate: 'cells-successful-response div.main-text-head.bold.with-default-space cells-atom-date #date',
                containerAmountPaymentmobile: 'cells-successful-response #body-section ul li:nth-child(1) div.key-value-container',
                containerAccountPaymentmobile: 'cells-successful-response #body-section ul li.spacing.mask-normal div.key-value-container',
                btnShare: 'cells-successful-response #body-section cells-operations-list ul li button'
            },
            requiredElements: ['header'],
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
            case 'container amount payment mobile':
                await this.containerAmountPaymentmobile.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'container account payment mobile':
                await this.containerAccountPaymentmobile.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn share':
                await this.btnShare.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async confirmPayMoney() {
        await this.btnConfirm.waitForDisplayed({timeout: config.wait.M});
        await this.btnConfirm.click();
    }

    async sharePaymentMobile() {
        await this.btnShare.waitForDisplayed({timeout: config.wait.M});
        await this.btnShare.click();
    }

}

export default new CodiPaymentInformationSuccess();
