import { ScreenValidationKeyNotFound } from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

class EquityDetailPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-equityMoreInfo[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                fullScreenModal: {
                    component: {
                        ComponentClass: GlomoAlertManager
                    }
                },
                generalHeader: 'cells-product-more-info .info-list .flex-container--row [data-selector="main-title-0"]',
                contractProduct: 'cells-product-more-info div.descriptive-list div.item-title-and-description.cells-product-more-info-equity-info-product',
                contractAlias: 'cells-product-more-info .content .info-list div.descriptive-list div.flex-container--row div.item-title-and-description.cells-product-more-info-equity-alias-title',
                contractNumber: 'cells-product-more-info .content .info-list div.descriptive-list div.item-title-and-description.cells-product-more-info-equity-number',
                contractNumberCopyBtn: 'cells-product-more-info .content .info-list div.descriptive-list .cells-product-more-info-equity-number ~ cells-st-button',
                managementService: 'cells-product-more-info .content .info-list div.descriptive-list div.item-title-and-description.glomo-equity-summary-dm-management-service',
                managementServiceTooltip: 'cells-product-more-info .content .info-list div.descriptive-list div.flex-container--row .glomo-equity-summary-dm-management-service ~ cells-st-button',
                associateProductsHeader: 'cells-product-more-info .info-list .flex-container--row [data-selector="main-title-1"]',
                currentAccount: 'cells-product-more-info .descriptive-list div.item-title-and-description.cells-product-more-info-equity-axis-number',
                currentAccountCopyBtn: 'cells-product-more-info .content .info-list div.descriptive-list .cells-product-more-info-equity-axis-number ~ cells-st-button',
                headerButtonBackEdit: 'cells-template-edit-alias > cells-molecule-header #btnLeft',
                headerButtonBack: 'cells-molecule-header #btnLeft',
                acceptButton: '#cells-template-__cross > glomo-alert-manager #modal #acceptButton',
                cancelButton: '#cells-template-__cross > glomo-alert-manager #modal #cancelButton',

            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                fullScreenModal: GlomoAlertManagerSpherica,
                generalHeader: 'cells-product-more-info-spherica div.content div.info-list [data-selector="main-title-0"]',
                contractProduct: 'cells-product-more-info-spherica div.content div.info-list div.item-title-and-description.cells-product-more-info-equity-info-product',
                contractAlias: 'cells-product-more-info-spherica div.content div.info-list div.item-title-and-description.cells-product-more-info-equity-alias-title',
                contractNumber: 'cells-product-more-info-spherica div.content div.info-list div.item-title-and-description.cells-product-more-info-equity-number',
                contractNumberCopyBtn: 'cells-product-more-info-spherica div.content div.info-list div cells-st-button-spherica',
                managementService: 'cells-product-more-info-spherica div.content div.info-list div.item-title-and-description.glomo-equity-summary-dm-management-service',
                managementServiceTooltip: 'cells-product-more-info-spherica div.content div.info-list .item-key cells-atom-icon-spherica',
                associateProductsHeader: 'cells-product-more-info-spherica div.content div.info-list [data-selector="main-title-1"]',
                currentAccount: 'cells-product-more-info-spherica div.content div.info-list div.item-title-and-description.cells-product-more-info-equity-axis-number',
                currentAccountCopyBtn: 'cells-product-more-info-spherica div.content div.info-list div cells-st-button-spherica',
                headerButtonBack: 'cells-molecule-header-spherica #btnLeft',
            },
            defaultSphericaElements: [
                'GlomoAlertManager'
            ],
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
            case 'general header':
                await this.generalHeader.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'contract product':
                await this.contractProduct.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'contract alias':
                await this.contractAlias.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'contract number':
                await this.contractNumber.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'contract number copy':
                await this.contractNumberCopyBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'associate products header':
                await this.associateProductsHeader.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'current account':
                await this.currentAccount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'current account copy':
                await this.currentAccountCopyBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header button back':
                await this.headerButtonBack.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header button back edit':
                await this.headerButtonBackEdit.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'accept button':
                await this.acceptButton.waitForDisplayed({timeout: config.wait.L, reverse: true});
                break;
            case 'cancel button':
                await this.cancelButton.waitForDisplayed({timeout: config.wait.L, reverse: true});
                break;
            case 'management service label':
                await this.managementService.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'management service tooltip':
                await this.managementServiceTooltip.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'tittle':
                await this.fullScreenModal.elementValidation({item: this.fullScreenModal.TITLE});
                break;
            case 'accept':
                await this.fullScreenModal.elementValidation({item: this.fullScreenModal.ACCEPT_BUTTON});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }

    async showManagementServiceModal() {
        await this.managementServiceTooltip.waitForClickable({timeout: config.wait.L});
        await this.managementServiceTooltip.click();
    }
}

export default new EquityDetailPage();
