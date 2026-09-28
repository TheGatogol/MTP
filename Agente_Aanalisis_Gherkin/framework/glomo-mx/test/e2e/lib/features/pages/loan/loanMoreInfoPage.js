import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class LoanMoreInfoPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-loanMoreInfo[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                generalTitle: 'cells-product-more-info div.content div.info-list div.section-title[data-selector="main-title-0"]',
                creditType: 'cells-product-more-info div.content div.info-list .descriptive-list .cells-product-more-info-loan-type',
                alias: 'cells-product-more-info div.content div.info-list div.cells-product-more-info-alias',
                contractNumber: 'cells-product-more-info div.content div.info-list .cells-product-more-info-loan-detail',
                contractNumberCopyBtn: 'cells-product-more-info div.content div.info-list div.cells-product-more-info-loan-detail ~ cells-st-button.link.size-xs',
                accountCLABE: 'cells-product-more-info div.content div.info-list div.cells-product-more-info-loan-clabe',
                accountCLABECopyBtn: 'cells-product-more-info div.content div.info-list div.cells-product-more-info-loan-clabe ~ cells-st-button.link.size-xs',
                accountCLABETooltipBtn: 'cells-product-more-info div.content div.info-list div.cells-product-more-info-loan-clabe .toolTip',
                hiringDate: 'cells-product-more-info div.content div.info-list div.cells-product-more-info-contract-date',
                expirationDate: 'cells-product-more-info div.content div.info-list div.cells-product-more-info-loan-expiration-date',
                capitalSuscriber: 'cells-product-more-info div.content div.info-list div.cells-product-more-info-loan-capital-loan',
                currency: 'cells-product-more-info div.content div.info-list div.cells-product-more-info-loan-currency',
                conditionsTitle: 'cells-product-more-info div.content div.info-list div.section-title[data-selector="main-title-1"]',
                paidReceipts: 'cells-product-more-info div.content div.info-list div.cells-product-more-info-receipts-paid',
                pendingReceipts: 'cells-product-more-info div.content div.info-list div.cells-product-more-info-pending-receipts',
                totalReceipts: 'cells-product-more-info div.content div.info-list div.cells-product-more-info-total-receipts',
                payFrequency: 'cells-product-more-info div.content div.info-list div.cells-product-more-info-frequency'
            },
            elementsSpherica: {
                creditType: 'cells-product-more-info-spherica div.content div.info-list .descriptive-list .cells-product-more-info-loan-type',
                alias: 'cells-product-more-info-spherica div.content div.info-list div.cells-product-more-info-alias',
                contractNumber: 'cells-product-more-info-spherica div.content div.info-list .cells-product-more-info-loan-detail',
                contractNumberCopyBtn: 'cells-product-more-info-spherica div.content div.info-list div.cells-product-more-info-loan-detail ~ cells-st-button-spherica.link.size-xs',
                accountCLABE: 'cells-product-more-info-spherica div.content div.info-list div.cells-product-more-info-loan-clabe',
                accountCLABECopyBtn: 'cells-product-more-info-spherica div.content div.info-list div.cells-product-more-info-loan-clabe ~ cells-st-button-spherica.link.size-xs',
                accountCLABETooltipBtn: 'cells-product-more-info-spherica div.content div.info-list div.cells-product-more-info-loan-clabe .toolTip',
                hiringDate: 'cells-product-more-info-spherica div.content div.info-list div.cells-product-more-info-contract-date',
                expirationDate: 'cells-product-more-info-spherica div.content div.info-list div.cells-product-more-info-loan-expiration-date',
                capitalSuscriber: 'cells-product-more-info-spherica div.content div.info-list div.cells-product-more-info-loan-capital-loan',
                currency: 'cells-product-more-info-spherica div.content div.info-list div.cells-product-more-info-loan-currency',
                conditionsTitle: 'cells-product-more-info-spherica div.content div.info-list div.section-title[data-selector="main-title-1"]',
                paidReceipts: 'cells-product-more-info-spherica div.content div.info-list div.cells-product-more-info-receipts-paid',
                pendingReceipts: 'cells-product-more-info-spherica div.content div.info-list div.cells-product-more-info-pending-receipts',
                totalReceipts: 'cells-product-more-info-spherica div.content div.info-list div.cells-product-more-info-total-receipts',
                payFrequency: 'cells-product-more-info-spherica div.content div.info-list div.cells-product-more-info-frequency',
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnLeft: true});
                break;
            case 'general title':
                await this.genetalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit type':
                await this.creditType.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'alias':
                await this.alias.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract number':
                await this.contractNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract number copy':
                await this.contractNumberCopyBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account clabe':
                await this.accountCLABE.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account clabe copy':
                await this.accountCLABECopyBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account clabe tooltip':
                await this.accountCLABETooltipBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hiring date':
                await this.hiringDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expiration date':
                await this.expirationDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'capital suscriber':
                await this.capitalSuscriber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'currency':
                await this.currency.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'conditions title':
                await this.conditionsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'paid receipts':
                await this.paidReceipts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pending receipts':
                await this.pendingReceipts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'total receipts':
                await this.totalReceipts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay frequency':
                await this.payFrequency.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new LoanMoreInfoPage();
