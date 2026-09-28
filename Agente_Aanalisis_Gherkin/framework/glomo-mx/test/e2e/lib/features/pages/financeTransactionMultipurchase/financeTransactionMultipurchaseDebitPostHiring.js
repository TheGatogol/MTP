import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

@page('financeTransactionMultipurchaseDebitPostHiring')
class FinanceTransactionMultipurchaseDebitPostHiring extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-financeTransactionMultipurchaseDebitPostHiring[state="active"]',
            elements: {
                header: '[data-tag-name="finance-debit-multi-step"] section [data-tag-name="bbva-header-main"]',
                onboarding: {
                    properties: { root: '[data-tag-name="onboarding-full-screen-carousel"][visible] [data-tag-name="bbva-help-modal"]'},
                    continueButton: '[data-tag-name="bbva-button-default"].action',
                    header: '[data-tag-name="bbva-header-main"]'
                },
                selectPurchasesStep: {
                    properties: { root: '[id="step-1"]'},
                    checkboxTrue: '[data-tag-name="bbva-form-control-input"][aria-checked="true"]',
                    purchaseCheck: '[data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"][value*="__amount__"]',
                    continueButton: '.selected-amount [data-tag-name=bbva-button-default]',
                    showPurchase:'div.more-transactions-link [data-tag-name="bbva-link"]',
                },
                monthsToDeferStep: {
                    properties: { root: '#step-2'},
                    monthsRadioButton: '[data-tag-name="bbva-form-control-input"] [data-tag-name="bbva-type-text"][text="__months__ meses"]',
                    continueButton: '.summary-section-container [data-tag-name=bbva-button-default]',
                    changeButton: '#editButton',
                    helpButton: 'div.content [data-tag-name="months-to-defer-step-content"] #__help__ bbva-icon',
                },
                termsStep: {
                    properties: { root: 'card-transaction-servicing-finance-debit-multipurchase #feature-container [data-tag-name="finance-debit-multi-step"] #terms-step'},
                    termsRadioButton: 'div.content [data-tag-name="terms-step-content"] #checkbox-item[name="__terms__"]',
                    continueButton: 'div.content [data-tag-name="terms-step-content"] div.panel-button [data-tag-name=bbva-button-default]',
                    linkCreditBuroDocument:'div.content [data-tag-name="terms-step-content"] #credit-buro-document',
                    linkContractDocument:'div.content [data-tag-name="terms-step-content"] #contract-document',
                    characteristicsButton:'div.content [data-tag-name="terms-step-content"] #characteristics-button',
                    consultButton: '#editButton',
                    helpButton:'div.content [data-tag-name="terms-step-content"] #help-icon-defer-cat-info'
                },
                expandableMultistep: {
                    properties: { root: '[data-tag-name=bbva-expandable-multistep]'},
                    confirmButton: '.confirmation-summary  [data-tag-name=bbva-button-default]',
                },
                successContainerPage: {
                    properties: { root: '[data-selector="modal-operationReceiptModal"]'},
                    exitButton: 'button#btn-close',
                },
                modal: {
                    properties: { root: 'bbva-help-modal visible'},
                    acceptBtn:'[data-tag-name=bbva-button-default]',
                },
                hireLineModalSuccess: {
                    properties: { root: 'card-transaction-servicing-finance-debit-multipurchase #hire-line-modal-success'},
                    continueButton: 'div div section div div.modal-main div.modal-footer slot div [data-tag-name=bbva-button-default]',
                },
                financeDebitError: {
                    properties: { root: '[data-selector="modal-errorCreditLimitAvailableModal"]'},
                    header: '#helpModalHeader',
                    back: '[data-id="iconsRight"]',
                    text: '.modal-content-wrapper',
                    continueButton: '[data-tag-name=bbva-button-default]:not([variant="link"])',
                    exitLink: '[data-tag-name=bbva-button-default][variant="link"]',

                },
                tokenModal: CellsSignOperationModal
            },
            elementsSpherica: {
                tokenModal: CellsSignOperationModalSpherica
            },
            requiredElements: ['onboarding.continueButton']
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'debit error header':
                await this.financeDebitError.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'debit error back':
                await this.financeDebitError.back.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'debit error text':
                await this.financeDebitError.text.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'debit error continue button':
                await this.waitForElementsExist(this.financeDebitError.continueButton, config.wait.M);
                await (await this.financeDebitError.continueButton.elements()).value[1].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'debit error exit link':
                await this.financeDebitError.exitLink.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async continueMonthsToDeferStep(){
        await this.selectPurchasesStep.continueButton.waitForDisplayed({timeout: config.wait.L});
        await this.selectPurchasesStep.continueButton.waitForEnabled();
        await this.selectPurchasesStep.continueButton.waitForClickable();
        await this.selectPurchasesStep.continueButton.click();
    }

    async accessMonthsToDeferStep(purchase){
        await this.selectMovement(purchase);
        await this.continueMonthsToDeferStep();
    }

    async selectMovement(purchase){
        const months = this.selectPurchasesStep.purchaseCheck.specifySelector({placeholder: '__amount__', value: purchase });
        await months.waitForDisplayed({timeout: config.wait.M});
        await months.waitForEnabled();
        await months.waitForClickable();
        await months.click({useActions: false, scrollOptions: {block: 'center'}});
    }

    async accessTermsStep(period){
        if (period !== '3') {
            const months = this.monthsToDeferStep.monthsRadioButton.specifySelector({placeholder: '__months__', value: period });
            await months.waitForDisplayed({timeout: config.wait.M});
            await months.waitForClickable();
            await months.click();
        }
        await this.monthsToDeferStep.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.monthsToDeferStep.continueButton.waitForClickable();
        await this.monthsToDeferStep.continueButton.click();
    }

    async accessSuccessfull(){
        await this.expandableMultistep.confirmButton.waitForDisplayed({timeout: config.wait.M});
        await this.expandableMultistep.confirmButton.scrollIntoView({block: 'center'});
        await this.expandableMultistep.confirmButton.click();
    }

    async closeDialog() {
        await this.modal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
        await this.modal.acceptBtn.waitForAnimation();
        await this.modal.acceptBtn.click();
    }

    async exitScreen(){
        await this.successContainerPage.exitButton.waitForDisplayed({timeout: config.wait.M});
        await this.successContainerPage.exitButton.scrollIntoView({block: 'center'});
        await this.successContainerPage.exitButton.click();
    }

    async confirmHalfHelpModal() {
        await this.financeDebitError.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.financeDebitError.continueButton.waitForAnimation();
        await this.financeDebitError.continueButton.click();
    }

    async selectElement(element) {
        const showMorePurchases = this.selectPurchasesStep.showPurchase;
        const purchaseCheckbox = this.selectPurchasesStep.purchaseCheck.specifySelector({placeholder: '__amount__', value: '917' });
        switch (element.toLowerCase()) {
            case 'purchase checkbox':
                await (await (await purchaseCheckbox.waitForDisplayed({timeout: config.wait.M})).click({useActions: false, scrollOption: {block: 'nearest'}}));
                break;
            case 'view more purchases':
                await (await (await (await showMorePurchases.waitForDisplayed()).scrollIntoView({block: 'start'})).waitForClickable()).click();
                break;
            case 'continue button':
                await (await (await (await this.selectPurchasesStep.continueButton.waitForDisplayed()).scrollIntoView({block: 'start'})).waitForClickable()).click();
                break;
            default:
                throw new Error(`${element} element is not available to option to...`);
        }
    }

    async acceptOnboarding() {
        await this.onboarding.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.onboarding.continueButton.waitForAnimation({timeout: config.wait.M});
        await this.onboarding.continueButton.click({useActions: false, scrollOption: {block: 'nearest'}});
    }
}

export default new FinanceTransactionMultipurchaseDebitPostHiring();
