import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class CodiPaymentRequestSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-codiPaymentRequestSuccess[state="active"]',
            elements: {
                btnClose: 'bbva-header-main #btn-right-primary',
                imgSuccessful: 'cells-successful-response div.head-icon-white cells-contact-avatar',
                txtTitle: 'cells-successful-response div.main-text-head.bold.with-default-space span',
                txtDescription: 'cells-successful-response div.main-text-head.bold.with-default-space p',
                txtDate: 'cells-successful-response div.main-text-head.bold.with-default-space cells-atom-date #date',
                containerAmountRequest: 'cells-successful-response #body-section ul li:nth-child(1) div.key-value-container',
                phoneContact: 'cells-successful-response #body-section ul li:nth-child(3) div.key-value-container span.value',
                containerExpirationTimeDate: 'cells-successful-response #body-section ul li:nth-child(6) div.key-value-container',
                containerAccount: 'cells-successful-response #body-section ul li.spacing.mask-normal div.key-value-container',
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
            case 'img successful':
                await this.imgSuccessful.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'txt title':
                await this.txtTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'txt description':
                await this.txtDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'txt date':
                await this.txtDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'container amount request':
                await this.containerAmountRequest.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone contact':
                await this.phoneContact.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'container expiration timeDate':
                await this.containerExpirationTimeDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'container account':
                await this.containerAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn share':
                await this.btnShare.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async sharePaymentsRequest() {
        await this.btnShare.waitForDisplayed({timeout: config.wait.M});
        await this.btnShare.click();
    }
}

export default new CodiPaymentRequestSuccess();
