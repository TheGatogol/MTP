import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

import ProductDetail from './productDetail';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';

@page()
class InsuranceProductDetail extends ProductDetail {
    constructor() {

        super({
            root: '#cells-template-insurance[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },

                productSummaryContent: {
                    properties: { root: 'cells-product-summary-insurance-spherica #productSummary'},
                    productTitle: '.header__text',
                    policyStatus: 'div.status.pending > span',
                    policyNumber: '.optional-items .item-container:nth-child(1) cells-key-values-spherica div.key span',
                    policyNumberLabel: '.optional-items .item-container:nth-child(1) cells-key-values-spherica div.value-item-0 span',
                    policyCost: '.optional-items .item-container:nth-child(2) cells-key-values-spherica div.key span',
                    policyCostLabel: '.optional-items .item-container:nth-child(2) cells-key-values-spherica div.value-item-0 span',
                    policyCostIcon: '.optional-items .item-container:nth-child(2) cells-key-values-spherica cells-atom-icon-spherica.icon-size-20',
                    paymentFrequencyLabel: '.bottom-summary ul.cells-key-values-list.inline:nth-child(1) cells-key-values-spherica div.key span',
                    paymentFrequency: '.bottom-summary ul.cells-key-values-list.inline:nth-child(1) cells-key-values-spherica div.value-item-0 span',
                    certificateLabel: '.bottom-summary ul.cells-key-values-list.inline:nth-child(1) li:nth-child(2) span',
                    certificateNumber: '.bottom-summary ul.cells-key-values-list.inline:nth-child(1) li:nth-child(2) div.value-item-0 span',
                    moreInfoLink: '#moreInfoButton',
                },

                validityTitle: 'cells-product-summary-insurance-spherica div.validity div.validity__title span',
                validityDateLabel: 'cells-product-summary-insurance-spherica div.validity cells-key-values-spherica.inline div.key span',
                validityDate: 'cells-product-summary-insurance-spherica div.validity cells-key-values-spherica.inline div.value-item-0 span',
                validityTypeLabel: 'cells-product-summary-insurance-spherica div.validity cells-key-values-spherica.inline.value-book div.key span',
                validityType: 'cells-product-summary-insurance-spherica div.validity cells-key-values-spherica.inline.value-book div.value-item-0 span',
                downloadPolicy: 'cells-operations-list-indicators-spherica cells-operations-list-spherica ul li[data-selector="seePolicy"] button',
                cancelInsuranceBtn: 'cells-operations-list-indicators-spherica cells-operations-list-spherica ul li[data-selector="cancelPolicy"] button',
                infoMessage: 'cells-icon-message-spherica.in-page',

                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            helpIcon: '.paragraph-template .paragraph-icon cells-atom-icon-spherica'
                        }
                    }
                ],
                singOperationModal: CellsSignOperationModal
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'help icon':
                await this.dialogOperations.additionalElements.helpIcon.waitForDisplayed();
                break;
            default:
                /**
                 * By default we execute the basic modalElementValidation to also use the basic glomo-alert-manager validation process
                 */
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            //header section
            case 'header title':
                await this.header.operationTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.header.primaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            //product summary section
            case 'product title':
                await this.productSummaryContent.productTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'policy status':
                await this.productSummaryContent.policyStatus.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value.toLowerCase() === 'not visible'
                });
                break;
            case 'policy number':
                await this.productSummaryContent.policyNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'policy number label':
                await this.productSummaryContent.policyNumberLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cost':
                await this.productSummaryContent.policyCost.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cost label':
                await this.productSummaryContent.policyCostLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cost help icon':
                await this.productSummaryContent.policyCostIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment frequency label':
                await this.productSummaryContent.paymentFrequencyLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment frequency':
                await this.productSummaryContent.paymentFrequency.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'certificate number label':
                await this.productSummaryContent.certificateLabel.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value.toLowerCase() === 'not visible'
                });
                break;
            case 'certificate number':
                await this.productSummaryContent.certificateNumber.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value.toLowerCase() === 'not visible'
                });
                break;
            case 'insurance detail link':
                await this.productSummaryContent.moreInfoLink.waitForDisplayed({timeout: config.wait.M});
                break;
            //validity section
            case 'validity title':
                await this.validityTitle.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value.toLowerCase() === 'not visible'
                });
                break;
            case 'end of validity label':
                await this.validityDateLabel.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value.toLowerCase() === 'not visible'
                });
                break;
            case 'end of validity':
                await this.validityDate.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value.toLowerCase() === 'not visible'
                });
                break;
            case 'type of renovation label':
                await this.validityTypeLabel.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value.toLowerCase() === 'not visible'
                });
                break;
            case 'type of renovation':
                await this.validityType.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value.toLowerCase() === 'not visible'
                });
                break;
            //Information section
            case 'information box':
                await (await this.infoMessage
                    .scrollIntoView())
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'code sing text':
                await this.singOperationModal.mainTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit sing button':
                await this.singOperationModal.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm sing button':
                await this.singOperationModal.smsContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel sing button':
                await this.singOperationModal.requestNewSmsLink.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goBack() {
        await this.header.primaryBtn.waitForDisplayed({timeout: config.wait.M});
        await this.header.primaryBtn.click();
    }

    async openHelpModal() {
        await this.productSummaryContent.policyCostIcon.waitForDisplayed({timeout: config.wait.M});
        await this.productSummaryContent.policyCostIcon.click();
    }

    async accessMoreInfo() {
        await this.productSummaryContent.moreInfoLink.waitForDisplayed({timeout: config.wait.M});
        await this.productSummaryContent.moreInfoLink.click();
    }

    async seePolicy() {
        await this.downloadPolicy.waitForDisplayed({timeout: config.wait.M});
        await this.downloadPolicy.click();
    }

    async accessCancelInsurance() {
        await this.cancelInsuranceBtn.waitForDisplayed({timeout: config.wait.M});
        await this.cancelInsuranceBtn.click();
    }
}

export default new InsuranceProductDetail();
