import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class PfmMovementDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pfmTransactionDetail[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                back: 'cells-molecule-header button#btnLeft',
                titleDescription: '.transaction-description',
                amount: 'cells-atom-amount',
                operationDate: '.operation-date-group .operation-date-value',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async waitForLoaded(timeOut = config.wait.M) {
        await super.waitForLoaded(timeOut);
    }

    async returnFromTransactionDetail() {
        await this.back.waitForDisplayed({timeout: config.wait.M});
        await this.back.click();
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'header back':
                await this.back.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'title description':
                await this.titleDescription.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'amount':
                await this.amount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'operation date':
                await this.operationDate.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new PfmMovementDetail();
