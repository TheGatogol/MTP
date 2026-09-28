import AbstractGlomoPage from '../abstract-glomo-page.js';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page('RequestDebitCardSucess')
class RequestDebitCardSucess extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'debit card request success',
            root: '#cells-template-requestDebitCardSuccess[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                requestDebitCardReceipt: 'cells-successful-response',
                operationDate: 'cells-successful-response div.main-text-head.spacing-bottom.bold > cells-atom-date #date',
                accountNumber: 'cells-successful-response #body-section > ul > li:nth-child(2) > div.inline-mask > span',
                maskedAddress: 'cells-successful-response #body-section > ul > li:nth-child(3) > div.key-value-container > span.value',
                operationNumber: 'cells-successful-response #body-section > ul > li:nth-child(5) > div.key-value-container > span.value',
                infoMessage: 'cells-successful-response #body-section > div > cells-icon-message #notInline',
            },
            requiredElements: [
                'header'
            ]
        });

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'debit card receipt':
                await this.requestDebitCardReceipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation date':
                await this.operationDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation number':
                await this.operationNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delivery address':
                await this.maskedAddress.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information message':
                await this.maskedAddress.scrollIntoView({block: 'start'});
                await this.maskedAddress.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new RequestDebitCardSucess();
