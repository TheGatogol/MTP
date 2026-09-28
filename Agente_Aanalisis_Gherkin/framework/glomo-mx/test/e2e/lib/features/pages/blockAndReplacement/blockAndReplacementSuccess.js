import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';

@page()
class BlockAndReplacementSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-blockAndReplacementSuccess',
            elements: {
                header: 'bbva-header-main',
                closeBtn: '#btn-right-primary',
                imgSuccess: '.head-icon-white',
                titleBlockedSuccess: '.main-text-head span:not([id="date"])',
                textBlockedCard: '.main-text-head p',
                dateBlockedCard: '.main-text-head #date',
                digitsBlockedCard: 'cells-successful-response #body-section ul li:nth-child(1)',
                deliveryAddressTitle: 'cells-successful-response #body-section ul li:nth-child(3)',
                folio: 'cells-successful-response #body-section ul li:nth-child(6)',
                cost: 'cells-successful-response #body-section ul li:nth-child(2)',
                deliveryAddress: 'li[data-selector="cells-successful-response-top-info-"]',
                cardInfoBlocked: '#body-section ul [type="info"]',
                voucherEmail: '#body-section ul .email-key',
                exitBtn: '#primaryBtn'
            },
            elementsSpherica:  {
                header: 'bbva-header-main-spherica',
                closeBtn: '#btn-close',
                textBlockedCard: '#body-section li.mask-bold.spacing-top.light-key > span.key',
                digitsBlockedCard: '#body-section li.mask-bold.spacing-top.light-key > cells-molecule-mask-spherica',
                dateBlockedCard:'#body-section ul li:nth-of-type(7) > span.key',
                imgSuccess: 'div.icon.success',
                titleBlockedSuccess: 'h2.title',
                folio: 'cells-successful-response-spherica #body-section ul li:nth-of-type(4)',
                cost: 'cells-successful-response-spherica #body-section ul li:nth-of-type(2)',
                voucherEmail: '#body-section ul',
                cardInfoBlocked: '#body-section li.mask-bold.spacing-top.light-key'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'close button':
                await this.closeBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'icon success':
                await this.imgSuccess.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'title blocked card':
                await this.titleBlockedSuccess.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'text blocked card':
                await this.textBlockedCard.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'date blocked card':
                await this.dateBlockedCard.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'digits blocked card':
                await this.digitsBlockedCard.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'cost blocked card':
                await this.cost.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery address title':
                await this.deliveryAddressTitle.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'delivery address':
                await (await this.deliveryAddress.elements()).value[4].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'folio':
                await this.folio.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'info blocked card':
                await this.cardInfoBlocked.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'voucher email notification':
                await this.voucherEmail.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'exit button':
                await this.exitBtn.waitForDisplayed({timeout:config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async exitSuccessPage() {
        await (await this.exitBtn.waitForClickable({timeout: config.wait.L})).click();
    }
}

export default new BlockAndReplacementSuccess();
