import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page('CustomerContractsPage')
class CustomerContracts extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-customerContracts[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                returnButton: 'cells-molecule-header iron-icon',
                title: 'cells-atom-subheader span',
                contractsList: 'cells-product-item-list',
                termsAndConditions: 'cells-product-item-list ul li:nth-child(1) cells-product-item',
                digitalServicesContract: 'cells-product-item-list ul li:nth-child(3) cells-product-item',
                registrationSingleDigitalContract: 'cells-product-item-list ul li:nth-child(5) cells-product-item',
                bluecard: 'cells-product-item-list ul li:nth-child(7) cells-product-item',
                payrollPortability: 'cells-product-item-list ul li:nth-child(9) cells-product-item',
                //error modal
                closeAlert: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            acceptBtn: 'div.buttons-container cells-st-button #acceptButton',
                            cancelBtn: 'div.buttons-container cells-st-button #cancelButton'
                        }
                    }
                ]
            },
            elementsSpherica: {
                returnButton: 'cells-molecule-header-spherica iron-icon',
                title: 'cells-atom-subheader-spherica span',
                contractsList: 'cells-product-item-list-spherica',
                termsAndConditions: 'cells-product-item-list-spherica ul li:nth-child(1) cells-product-item-spherica',
                digitalServicesContract: 'cells-product-item-list-spherica ul li:nth-child(3) cells-product-item-spherica',
                registrationSingleDigitalContract: 'cells-product-item-list-spherica ul li:nth-child(5) cells-product-item-spherica',
                bluecard: 'cells-product-item-list-spherica ul li:nth-child(7) cells-product-item-spherica',
                payrollPortability: 'cells-product-item-list-spherica ul li:nth-child(9) cells-product-item-spherica',
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                closeAlert: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            acceptBtn: 'div.buttons-container cells-st-button-spherica #acceptButton',
                            cancelBtn: 'div.buttons-container cells-st-button-spherica #cancelButton'
                        }
                    }
                ]
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contracts list':
                await this.contractsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions':
                await this.termsAndConditions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'digital services contract':
                await this.digitalServicesContract.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'single digital contract':
                await this.registrationSingleDigitalContract.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payroll portability':
                await this.payrollPortability.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'blue card':
                await this.bluecard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retry button error':
                await this.closeAlert.additionalElements.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button error':
                await this.closeAlert.additionalElements.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async consultContract() {
        await this.contract.waitForClickable({timeout: config.wait.L});
        await this.contract.click();
        await this.fillOtp('11111111');
    }

    async openPDF(pdfName) {
        switch(pdfName.toLowerCase()){
            case 'terms and conditions':
                await (await this.termsAndConditions.waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`Section '${pdfName}' is not implemented`);
        }
    }

    async headerReturnToProfile(){
        await this.returnButton.waitForClickable({timeout: config.wait.L});
        await this.returnButton.click();
        await this.waitUntilSpinnerVeil({timeoutToDisappear: config.wait.M});
    }
}

export default new CustomerContracts();
