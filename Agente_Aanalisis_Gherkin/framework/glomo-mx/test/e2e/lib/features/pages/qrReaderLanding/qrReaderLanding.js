import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound } from '@csqe/radish';

class QrReaderLanding extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-qrReaderLanding[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                cardAdvice: 'cells-card-advice div',
                message: 'cells-icon-message',
                operationTransfer: 'cells-operations-list-indicators cells-operations-list ul li:nth-child(1) button',
                operationPay: ' cells-operations-list-indicators cells-operations-list ul  li:nth-child(2) button',
                acctionSecurity: 'cells-text-description',
                acctionAccesKey: 'cells-link-list-wrapper #create-password-event cells-link-list div  div',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card advice':
                await this.cardAdvice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message':
                await this.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation trannfer':
                await this.operationTransfer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation pay':
                await this.operationPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'security':
                await this.acctionSecurity.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'access key recovery':
                await this.acctionAccesKey.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }

    }
}

export default new QrReaderLanding();
