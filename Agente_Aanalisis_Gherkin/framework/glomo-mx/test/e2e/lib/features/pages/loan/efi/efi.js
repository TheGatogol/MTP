import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeader from '../../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';

import AbstractGlomoPage from '../../abstract-glomo-page';

@page()
class EfiPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-instantCash[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                multiStep: {
                    instantCash: {
                        headerImage: 'cells-step-instant-cash-mx #list2 #image #sizedImgDiv',
                        amountInput: 'cells-step-instant-cash-mx #step-input-message-limited-amount #enterAmountInput input',
                        lapseAmount: 'cells-step-instant-cash-mx cells-step div.full cells-select-modal',
                        infoCatMessage: 'cells-step-instant-cash-mx cells-step div.full cells-icon-message',
                        stickyMonthlyPayment: 'cells-step-instant-cash-mx #sticky-container',
                        acceptButton: 'cells-step-instant-cash-mx #sticky-container cells-summary-view cells-st-button.primary button',
                        lastIconMessage: 'cells-step-instant-cash-mx cells-step div.full cells-sticky-container.percentage-width',
                        inputInvalidState: 'cells-step-instant-cash-mx #step-input-message-limited-amount #enterAmountInput[invalid]',
                        inputErrorMessage: 'cells-step-instant-cash-mx #step-input-message-limited-amount #enterAmountInput cells-icon-message[type="error"]',
                        disabledContinueButton: 'cells-step-instant-cash-mx #sticky-container cells-summary-view.summary-view #collapser cells-st-button button[disabled]',
                        collapsed: 'cells-step-instant-cash-mx[collapsed]',
                    },
                    productSelector: {
                        singleProduct: 'cells-step-product-selector #selector div:nth-child(9) cells-product-item',
                        labelAccounts: 'cells-step-product-selector #selector cells-atom-subheader span',
                        informationText: 'cells-step-product-selector #stepContainer div.full p.description.order-item',
                        collapsed: 'cells-step-product-selector[collapsed]',
                    },
                    terms: {
                        termsCheckbox: 'cells-step-card-checklist-contract cells-checkbox-button.checkbox__preaccepted',
                        continueButton: 'cells-step-card-checklist-contract #checklistStepContainer div[slot="full"] div.full main cells-st-button',
                        termsAndConditionsText: 'cells-step-card-checklist-contract #\\30 div.body-label.right-description',
                        collapsed: 'cells-step-card-checklist-contract[collapsed]',
                    }
                },
                withdrawalAccount: 'cells-step-recipient-selector[collapsed]',
                summaryContinueButton: 'cells-summary-view.instant-cash #collapser cells-st-button.primary.size-m.cells-summary-view--submit-button button'
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                multiStep: {
                    instantCash: {
                        container: 'cells-step-instant-cash-spherica-mx',
                        headerImage: 'cells-step-instant-cash-spherica-mx #list2 #image #sizedImgDiv',
                        amountInput: 'cells-step-instant-cash-spherica-mx #step-input-message-limited-amount #enterAmountInput input',
                        lapseAmount: 'cells-step-instant-cash-spherica-mx cells-step-spherica div.amounts-and-payment-term cells-select-modal-spherica',
                        infoCatMessage: 'cells-step-instant-cash-spherica-mx #list2 div:nth-child(2) cells-heading',
                        stickyMonthlyPayment: 'cells-step-instant-cash-spherica-mx #sticky-container',
                        acceptButton: 'cells-step-instant-cash-spherica-mx #sticky-container cells-summary-view-spherica cells-st-button-spherica[variant="primary"] button',
                        lastIconMessage: 'cells-step-instant-cash-spherica-mx cells-step-spherica cells-sticky-container-spherica.percentage-width',
                        inputInvalidState: 'cells-step-instant-cash-spherica-mx #step-input-message-limited-amount #enterAmountInput[invalid]',
                        inputErrorMessage: 'cells-step-instant-cash-spherica-mx #step-input-message-limited-amount #enterAmountInput cells-icon-message-spherica[type="error"]',
                        disabledContinueButton: 'cells-step-instant-cash-spherica-mx #sticky-container cells-summary-view-spherica.summary-view #collapser cells-st-button-spherica button[disabled]',
                        collapsed: 'cells-step-instant-cash-spherica-mx[collapsed]',

                    },
                    productSelector: {
                        productSelectorContainer: 'cells-step-product-selector-spherica.cells-step-container',
                        singleProduct: 'cells-step-product-selector-spherica #selector .product-wrapper cells-product-item-spherica',
                        labelAccounts: 'cells-step-product-selector-spherica #selector cells-atom-subheader-spherica span',
                        informationText: 'cells-step-product-selector-spherica #stepContainer div.full p.description.order-item',
                        collapsed: 'cells-step-product-selector-spherica[collapsed]',
                    },
                    terms: {
                        termsCheckbox: 'cells-step-card-checklist-contract-spherica cells-checkbox-button-spherica.checkbox__preaccepted',
                        continueButton: 'cells-step-card-checklist-contract-spherica #checklistStepContainer div[slot="full"] div.full main cells-st-button-spherica',
                        termsAndConditionsText: 'cells-step-card-checklist-contract-spherica #\\30 div.body-label.right-description',
                        collapsed: 'cells-step-card-checklist-contract-spherica[collapsed]',
                    }
                },
                withdrawalAccount: 'cells-step-recipient-selector-spherica[collapsed]',
                summaryContinueButton: 'cells-summary-view-spherica.instant-cash #collapser cells-st-button-spherica[variant="primary"] button'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({ item }) { 
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header image':
                await this.multiStep.instantCash.headerImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount input':
                await this.multiStep.instantCash.amountInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount lapse':
                await this.multiStep.instantCash.lapseAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer date':
                await this.multiStep.instantCash.infoCatMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'monthly payment':
                await this.multiStep.instantCash.stickyMonthlyPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invalid amount status':
                await this.multiStep.instantCash.inputInvalidState.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invalid amount message':
                await this.multiStep.instantCash.inputErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'disabled continue button':
                await this.multiStep.instantCash.amountInput.scrollIntoView();
                if(this.isSpherica()) {
                    await this.multiStep.productSelector.productSelectorContainer.execute({script: () => this.setAttribute('active', true)});
                    await this.multiStep.productSelector.productSelectorContainer.scrollIntoView({block: 'start'});
                }
                await this.multiStep.instantCash.disabledContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'single product':
                await this.multiStep.productSelector.singleProduct.waitForVisible({timeout: config.wait.M});
                break;
            case 'label accounts':
                await this.multiStep.productSelector.labelAccounts.waitForVisible({timeout: config.wait.M});
                break;
            case 'information text':
                await this.multiStep.productSelector.informationText.waitForVisible({timeout: config.wait.M});
                break;
            case 'terms checkbox':
                await this.multiStep.terms.termsCheckbox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions text':
                await this.multiStep.terms.termsAndConditionsText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.multiStep.terms.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdrawal account':
                await this.withdrawalAccount.waitForVisible({timeout: config.wait.M});
                break;
            case 'offer collapsed':
                await this.multiStep.instantCash.collapsed.waitForVisible({timeout: config.wait.M});
                break;
            case 'product selector collapsed':
                if (this.isSpherica()) {
                    await this.multiStep.productSelector.collapsed.scrollIntoView();
                }
                await this.multiStep.productSelector.collapsed.waitForVisible({timeout: config.wait.M});
                break;
            case 'terms and conditions collapsed':
                await this.multiStep.terms.collapsed.waitForVisible({timeout: config.wait.M});
                break;
            case 'contract button':
                await this.summaryContinueButton.waitForVisible({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeHeaderTooltip() {
        const tooltip = await this.header.tooltipPopUpCloseButton.waitForDisplayed({timeout: config.wait.M, failOnError: false});
        if (tooltip) {
            await this.header.tooltipPopUpCloseButton.click();
        }
    }

    async acceptOffer() {
        await this.closeHeaderTooltip();
        await this.multiStep.instantCash.acceptButton.waitForAnimation({timeout: config.wait.M});
        await this.multiStep.instantCash.lastIconMessage.scrollIntoView({block: 'end'});
        if (this.isSpherica()) {
            await this.multiStep.productSelector.productSelectorContainer.execute({script: () => this.setAttribute('active', true)});
            await this.multiStep.productSelector.productSelectorContainer.scrollIntoView({block: 'start'});
        }
        await this.multiStep.instantCash.acceptButton.waitForDisplayed({timeout: config.wait.L});
        await this.multiStep.instantCash.acceptButton.click();
    }

    async changeAmountValue(value) {
        if (+value < 1) {
            await this.closeHeaderTooltip();
        }
        if(this.isSpherica()) {
            await this.multiStep.instantCash.amountInput.waitForDisplayed({timeout: config.wait.L});
            await this.multiStep.instantCash.amountInput.scrollIntoView({block: 'start'});
        } else {
            await this.multiStep.instantCash.amountInput.waitForDisplayed({timeout: config.wait.M});
            await this.multiStep.instantCash.amountInput.scrollIntoView();
        }
        await this.multiStep.instantCash.amountInput.clearValue();
        await this.multiStep.instantCash.amountInput.setValue(value);
        await this.blurAmountInput();
    }

    async blurAmountInput() {
        await this.multiStep.instantCash.headerImage.waitForDisplayed({timeout: config.wait.M});
        await this.multiStep.instantCash.headerImage.click();
        await this.multiStep.instantCash.stickyMonthlyPayment.scrollIntoView({block: 'end'});
    }

    async selectSingleProduct() {
        await this.multiStep.productSelector.singleProduct.waitForClickable({timeout: config.wait.L});
        await this.multiStep.productSelector.singleProduct.click();
    }

    async acceptTermsAndConditions() {
        await this.multiStep.terms.termsCheckbox.waitForClickable({timeout: config.wait.M});
        await this.multiStep.terms.termsCheckbox.click();
        await this.multiStep.terms.continueButton.waitForClickable({timeout: config.wait.M});
        await this.multiStep.terms.continueButton.click();
    }

    async accessToContract() {
        await this.summaryContinueButton.waitForClickable({timeout: config.wait.M});
        await this.summaryContinueButton.click();
    }
}

export default new EfiPage();
