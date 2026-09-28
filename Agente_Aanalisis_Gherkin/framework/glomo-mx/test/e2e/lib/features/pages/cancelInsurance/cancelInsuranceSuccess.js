import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class CancelInsuranceSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-insuranceCancelationSuccess[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                insuranceCancelationReceipt: 'cells-successful-response',
                operationDate: '#date',
                insuranceName: '#body-section ul li.bold.spacing.spacing-top span.value',
                insuranceNumber: '#body-section ul li:nth-child(2) span.value',
                operationNumber: '#body-section ul li:nth-child(5) span.value',
                maskedAddress: '#body-section ul li:nth-child(7) span.value',
                infoMessage: '#body-section cells-icon-message',
            },
            requiredElements: [
                'header'
            ]
        }
        );
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance cancel receipt':
                await this.insuranceCancelationReceipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation date':
                await this.operationDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance name':
                await this.insuranceName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance number':
                await this.insuranceNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation number':
                await this.operationNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delivery address':
                await this.maskedAddress.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information message':
                await this.maskedAddress.scrollIntoView();
                await this.infoMessage.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new CancelInsuranceSuccess();
