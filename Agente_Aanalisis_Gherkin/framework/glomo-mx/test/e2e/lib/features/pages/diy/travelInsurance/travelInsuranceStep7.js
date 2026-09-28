import AbstractGlomoPage from '../../abstract-glomo-page.js';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page('TravelInsuranceStep7')
class TravelInsuranceStep7 extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-travelInsuranceSuccessPage[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                insuranceReceipt: 'cells-successful-response',
                insuranceReceiptPolicyNumber: 'cells-successful-response #header-section > p.folio-number',
                insuranceReceiptAmount: 'cells-successful-response #header-section > ul > li:nth-child(1) > cells-key-values div.value > div > span',
                insuranceReceiptExchangeRate: 'cells-successful-response #header-section > ul > li:nth-child(2) > cells-key-values div.value > div > span',
                insuranceReceiptExchangedAmount:'cells-successful-response #header-section > ul > li:nth-child(3) > cells-key-values div.value > div > span',
                insuranceReceiptAccountNumber:'cells-successful-response #body-section > ul > li:nth-child(2) > div > cells-molecule-mask',
                insuranceReceiptDestinationType:'cells-successful-response #body-section > ul > li:nth-child(3) > div > span.value',
                insuranceReceiptFromDate:'cells-successful-response #body-section > ul > li:nth-child(4) > div > span.value',
                insuranceReceiptToDate:'cells-successful-response #body-section > ul > li:nth-child(5) > div > span.value',
                insuranceReceiptTravelerName:'cells-successful-response #body-section > ul > li:nth-child(6) > div > span.value',
                insuranceReceiptFolioNumber:'cells-successful-response #body-section > ul > li:nth-child(7) > div > span.value',
                insuranceReceiptTravelerEmail:'cells-successful-response #body-section > ul > li.bold.medium.spacing-sm-top > div > span.value',
            },
            requiredElements: [
                'header',
                'insuranceReceipt',
                'insuranceReceiptPolicyNumber',
                'insuranceReceiptAmount',
                'insuranceReceiptExchangeRate',
                'insuranceReceiptExchangedAmount',
                'insuranceReceiptAccountNumber',
                'insuranceReceiptDestinationType',
                'insuranceReceiptFromDate',
                'insuranceReceiptToDate',
                'insuranceReceiptTravelerName',
                'insuranceReceiptFolioNumber',
                'insuranceReceiptTravelerEmail'
            ]
        });

    }

    async _screenValidation(
        {
            item
        },
    ) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance receipt':
                await this.insuranceReceipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance receipt policy':
                await this.insuranceReceiptPolicyNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance receipt amount':
                await this.insuranceReceiptAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance receipt exchange rate':
                await this.insuranceReceiptExchangeRate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance receipt exchanged amount':
                await this.insuranceReceiptExchangedAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance receipt account number':
                await this.insuranceReceiptAccountNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance receipt destination type':
                await this.insuranceReceiptDestinationType.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance receipt from date':
                await this.insuranceReceiptFromDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance receipt to date':
                await this.insuranceReceiptToDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance receipt traveler name':
                await this.insuranceReceiptTravelerName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance receipt folio number':
                await this.insuranceReceiptFolioNumber.scrollIntoView({block: 'start'});
                await this.insuranceReceiptFolioNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insurance receipt traveler email':
                await this.insuranceReceiptTravelerEmail.scrollIntoView({block: 'start'});
                await this.insuranceReceiptTravelerEmail.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    key: item,
                    args: arguments[0]
                });
        }
    }
}

export default new TravelInsuranceStep7();
