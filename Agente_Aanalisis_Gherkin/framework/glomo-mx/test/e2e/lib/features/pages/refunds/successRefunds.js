import AbstractGlomoPage from '../abstract-glomo-page';
import {
    ScreenValidationKeyNotFound,
    page
} from '@csqe/radish';

@page()
class SuccessRefunds extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-refundsReview[state="active"]',
            elements: {
                // Transfer title
                header: 'cells-molecule-header-spherica #titleZone',
                title: 'cells-successful-response-spherica h2.title',
                date: 'cells-successful-response-spherica cells-atom-date-spherica #date',
                amount: 'cells-successful-response-spherica [data-selector="cells-successful-response-charge-amount"] .amount-wrapper',
                amountDescription: 'cells-successful-response-spherica [data-selector="cells-successful-response-amount-description"]',
                // Information labels
                labelOrigin: 'cells-successful-response-spherica [data-selector="cells-successful-response-top-info-Origen"]',
                labelDestination: 'cells-successful-response-spherica [data-selector="cells-successful-response-top-info-Destino"]',
                labelConcept: 'cells-successful-response-spherica [data-selector="cells-successful-response-top-info-Concepto"]',
                labelReference: 'cells-successful-response-spherica [data-selector="cells-successful-response-top-info-Referencia"]',
                labelTicketOperation: 'cells-successful-response-spherica [data-selector="cells-successful-response-top-info-Folio de operación"]',
                labelKey: 'cells-successful-response-spherica [data-selector="cells-successful-response-top-info-Clave de rastreo"]',
                labelOperationDate: 'cells-successful-response-spherica [data-selector="cells-successful-response-top-info-Fecha de operación"]',
                // Share button
                iconShare: 'cells-successful-response-spherica cells-operations-list-spherica[data-selector="cells-successful-response-operations"] .link',
                // Exit button
                buttonExit: 'cells-successful-response-spherica #primaryBtn'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'subtitle':
                await this.date.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount label':
                await this.amountDescription.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount wrapper':
                await this.amount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'origin data':
                await this.labelOrigin.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'label concepto':
                await this.labelConcept.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'label referencia':
                await this.labelReference.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'label tipo de operación':
                await this.labelDestination.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'label folio de operación':
                await this.labelTicketOperation.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'label clave rastreo':
                await this.labelKey.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'label email':
                await this.labelOperationDate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'link share':
                await this.iconShare.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button exit':
                await this.buttonExit.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    key: item,
                    args: arguments[0]
                });
        }
    }

}

export default new SuccessRefunds();
