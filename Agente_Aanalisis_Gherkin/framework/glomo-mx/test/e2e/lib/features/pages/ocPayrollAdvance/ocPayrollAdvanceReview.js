import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class OcPayrollAdvanceReview extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'ocPayrollAdvanceReview',
            root: '#cells-template-ocPayrollAdvanceReview[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                subheader: 'cells-successful-response #header-section',
                date: 'cells-successful-response #header-section .subtitle',
                amount: 'cells-successful-response #header-section .charge-amount',
                bodySection: 'cells-successful-response #body-section',
                avatar: 'cells-successful-response #body-section cells-contact-avatar',
                otherInfo: 'cells-successful-response #body-section .otherInfo',
                exitButton: 'cells-confirm-buttons #primaryBtn',
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica',
                subheader: 'cells-successful-response-spherica #header-section',
                date: 'cells-successful-response-spherica #body-section ul.otherInfo li:nth-of-type(8)',
                amount: 'cells-successful-response-spherica #header-section cells-atom-amount-spherica.currency-xxxl',
                bodySection: 'cells-successful-response-spherica #body-section',
                avatar: 'cells-successful-response-spherica #body-section cells-contact-avatar-spherica',
                otherInfo: 'cells-successful-response-spherica #body-section .otherInfo',
                exitButton: 'cells-confirm-buttons-spherica #primaryBtn',
            },
            requiredElements: [
                'header', 'subheader', 'bodySection'
            ]
        });

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.XXL});
                break;
            case 'header information':
                await this.subheader.waitForDisplayed({timeout: config.wait.XXL});
                break;
            case 'body section':
                await this.bodySection.waitForDisplayed({timeout: config.wait.XXL});
                break;
            case 'hiring date':
                await this.date.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'amount':
                await this.amount.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'image doc':
                await this.avatar.waitForDisplayed({timeout: config.wait.M, reverse: this.isSpherica()});
                break;
            case 'list info':
                await this.otherInfo.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'exit button':
                await this.exitButton.waitForDisplayed({timeout: config.wait.XL});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new OcPayrollAdvanceReview();
