import {ScreenValidationKeyNotFound, page, Commands} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

let catCommissionHelp;
let firstPayDate;
let deferCommissionHelp;

@page('financeTransactionMultipurchaseDebit')
class FinanceTransactionMultipurchaseDebit extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-financeTransactionMultipurchaseDebit[state="active"]',
            elements: {
                header: 'bbva-help-modal[visible] #helpModalHeader',
                enterButton: 'bbva-help-modal[visible] [data-tag-name=bbva-button-default].action',
                modifySelection: '[data-selector="modal-modifyShoppingModal"][visible] [data-tag-name=bbva-button-default]',
                selectPurchasesStep: {
                    properties: { root: '#step-1'},
                    text: 'div.header-step',
                    textParticipatingPurchases: 'div.header-step',
                    helpButton: 'div.shopping-opened-quantity [data-tag-name="bbva-button-default"][tabindex="0"]',
                    shoppingList: 'div.shopping-list',
                    checkboxTrue: '[data-tag-name="bbva-form-control-input"][aria-checked="true"]',
                    purchaseCheck: 'div.shopping-list [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"] [data-tag-name="bbva-type-amount"][amount*="__amount__"]',
                    continueButton: 'div.selected-amount [data-tag-name=bbva-button-default]',
                    changeButton: '#editButton',
                    showPurchase:'div.shopping-opened-quantity-link [data-tag-name="bbva-type-link"]',
                },
                morePurchaseCheck: '[data-selector="modal-shoppingModal"] [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"][value*="__amount__"]',
                morePurchaseContinueButton: '[data-selector="modal-shoppingModal"] .selected-amount [data-tag-name="bbva-button-default"]',
                monthsToDeferStep: {
                    properties: { root: '#step-2'},
                    monthsRadioButton: '[data-tag-name="bbva-form-control-input"] [data-tag-name="bbva-type-text"][text="__months__ meses"]',
                    continueButton: '.summary-section-container [data-tag-name=bbva-button-default]',
                    changeButton: '#editButton',
                    helpButton: '[aria-checked="true"] .payment-term-select-item-icon [data-tag-name="bbva-button-default"]',
                },
                termsStep: {
                    properties: { root: '#step-3'},
                    termsRadioButton: '[data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"][name="__terms__"]',
                    continueButton: '.panel-button [data-tag-name=bbva-button-default]',
                    linkCreditBuroDocument:'div.terms-item [data-tag-name="bbva-type-link"]',
                    characteristicsButton:'div.financing-line-opened-container > [data-tag-name="bbva-type-link"]',
                    consultButton: '#editButton',
                    helpButton:'div.line-opened-contracting [data-tag-name="bbva-button-default"]'
                },
                expandableMultistep: {
                    properties: { root: '.multistep[visible] [data-tag-name="bbva-expandable-multistep"][tabindex="0"][all-completed]'},
                    confirmButton: '.confirmation-summary [data-tag-name=bbva-button-default]',
                },
                successContainerPage: {
                    properties: { root: '[data-selector="modal-operationReceiptModal"][visible]'},
                    exitButton: '#btn-close',
                },
                modal: {
                    properties: { root: '[data-tag-name="bbva-help-modal"][visible]'},
                    closetBtn: '#btn-close',
                    exitButton: '[data-tag-name=bbva-button-default]:not([variant="link"])',
                },
                hireLineModalSuccess: {
                    properties: { root: '[mode="contractReceiptModal"][visible]'},
                    continueButton: '[data-tag-name=bbva-button-default].continue-button',
                },
            },
            requiredElements: ['enterButton']
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text purchase selection':
                await this.selectPurchasesStep.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text participating purchases':
                await this.selectPurchasesStep.textParticipatingPurchases.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help button':
                await this.selectPurchasesStep.helpButton.waitForAnimation();
                await this.selectPurchasesStep.helpButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'shopping list':
                await this.selectPurchasesStep.shoppingList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show more':
                await this.selectPurchasesStep.showPurchase.specifySelector({placeholder: '__value__', value: 'Mostrar más'}).waitForClickable({timeout: config.wait.M});
                break;
            case 'defer commission detail':
                deferCommissionHelp = await (await this.monthsToDeferStep.helpButton.elements()).value[0];
                await deferCommissionHelp.waitForDisplayed({timeout: config.wait.L});
                await deferCommissionHelp.waitForAnimation();
                await deferCommissionHelp.waitForClickable();
                break;
            case 'first pay date':
                firstPayDate = await (await this.monthsToDeferStep.helpButton.elements()).value[1];
                await firstPayDate.waitForDisplayed({timeout: config.wait.L});
                await firstPayDate.waitForAnimation();
                await firstPayDate.waitForClickable();
                break;
            case 'cat commission help':
                catCommissionHelp = await (await this.monthsToDeferStep.helpButton.elements()).value[2];
                await catCommissionHelp.waitForDisplayed({timeout: config.wait.L});
                await catCommissionHelp.waitForAnimation();
                await catCommissionHelp.waitForClickable();
                break;
            case 'months radio button':
                await this.monthsToDeferStep.monthsRadioButton.specifySelector({placeholder: '__months__', value: '3' }).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions help':
                await this.termsStep.helpButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.termsStep.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms buro radio button':
                await this.termsStep.termsRadioButton.specifySelector({placeholder: '__terms__', value: '_readChecked'}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link credit buro document':
                await this.waitForElementsExist(this.termsStep.linkCreditBuroDocument, config.wait.M);
                await (await this.termsStep.linkCreditBuroDocument.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link contract document':
                await this.waitForElementsExist(this.termsStep.linkCreditBuroDocument, config.wait.M);
                await (await this.termsStep.linkCreditBuroDocument.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'characteristics button':
                await this.termsStep.characteristicsButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button':
                await this.expandableMultistep.confirmButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'terms step consult button':
                await this.waitForElementsExist(this.termsStep.consultButton, config.wait.M);
                await (await this.termsStep.consultButton.elements()).value[0].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'change button months to defer':
                await this.waitForElementsExist(this.monthsToDeferStep.changeButton, config.wait.M);
                await this.monthsToDeferStep.changeButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'change button select purchases step':
                await this.waitForElementsExist(this.selectPurchasesStep.changeButton, config.wait.M);
                await (await this.selectPurchasesStep.changeButton.elements()).value[0].waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessPurchaseSelection() {
        await this.enterButton.waitForDisplayed({timeout: config.wait.M});
        await this.enterButton.waitForAnimation({timeout: config.wait.M});
        await this.enterButton.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async selectPurchase(purchaseAmount) {
        await (await (await (await (await this.selectPurchasesStep.purchaseCheck.specifySelector({placeholder: '__amount__', value: purchaseAmount}))
            .waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView({block: 'center'}))
            .waitForAnimation({timeout: config.wait.M}))
            .click({useActions: false, scrollOption: {block: 'nearest'}});

    }

    async selectMorePurchase(purchaseAmount) {
        await (await (await (await this.morePurchaseCheck.specifySelector({placeholder: '__amount__', value: purchaseAmount}))
            .waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView({block: 'start'}))
            .waitForAnimation({timeout: config.wait.M});
        await (await this.morePurchaseCheck.specifySelector({placeholder: '__amount__', value: purchaseAmount}).click({useActions: false, scrollOptions: {block: 'start'}}));

    }

    async continueToMonthsToDefer() {
        await this.selectPurchasesStep.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.selectPurchasesStep.continueButton.scrollIntoView({block: 'end'});
        await this.selectPurchasesStep.continueButton.click({useActions: false, scrollOptions: {block: 'end'}});
    }

    async accessMonthsToDeferStep(purchase) {
        await this.selectPurchase(purchase);
        await this.continueToMonthsToDefer();
    }

    async editMonthsToDeferStep(purchase) {
        await this.accessMonthsToDeferStep(purchase);
        await this.modifySelection.waitForDisplayed({timeout: config.wait.M});
        await this.modifySelection.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async accessTermsStep(period){
        await Commands.pause({time: config.wait.S});
        const months = await this.monthsToDeferStep.monthsRadioButton.specifySelector({placeholder: '__months__', value: period});
        await months.waitForDisplayed({timeout: config.wait.L});
        await months.scrollIntoView();
        await months.click();
        await this.monthsToDeferStep.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.monthsToDeferStep.continueButton.click();
    }

    async accessSuccessfull(){
        const termBuro = await this.termsStep.termsRadioButton.specifySelector({placeholder: '__terms__', value: '_consentChecked'});
        await termBuro.waitForDisplayed({timeout: config.wait.M});
        await termBuro.scrollIntoView({block: 'center'});
        await termBuro.waitForAnimation({timeout: config.wait.M});
        await termBuro.click({userActions: false, scrollOptions: {block: 'nearest'}});
        const term = await this.termsStep.termsRadioButton.specifySelector({placeholder: '__terms__', value: '_readChecked'});
        await term.waitForDisplayed({timeout: config.wait.M});
        await termBuro.waitForAnimation({timeout: config.wait.M});
        await term.click({userActions: false, scrollOptions: {block: 'nearest'}});
        await this.termsStep.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.termsStep.continueButton.waitForAnimation({timeout: config.wait.M});
        await this.termsStep.continueButton.click({userActions: false, scrollOptions: {block: 'nearest'}});
    }

    async  accessParticipatingPurchasesHelp() {
        await this.selectPurchasesStep.helpButton.waitForDisplayed({timeout: config.wait.M});
        await this.selectPurchasesStep.helpButton.waitForAnimation({timeout: config.wait.M});
        await this.selectPurchasesStep.helpButton.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async closeDialog() {
        await this.modal.closetBtn.waitForDisplayed({timeout: config.wait.M});
        await this.modal.closetBtn.waitForAnimation();
        await this.modal.closetBtn.click();
    }

    async accessToHelp(button){
        let deferCommissionHelp;
        let firstPayDate;
        let catCommissionHelp;
        const months = await this.monthsToDeferStep.monthsRadioButton.specifySelector({placeholder: '__months__', value: 3});
        await months.waitForDisplayed({timeout: config.wait.M});
        await months.waitForAnimation({timeout: config.wait.M});
        await months.click({useActions: false, scrollOptions: {block: 'nearest'}});
        await this.waitForElementsExist(this.monthsToDeferStep.helpButton, config.wait.M);
        switch (button.toLowerCase()) {
            case 'defer commission detail':
                deferCommissionHelp = await (await this.monthsToDeferStep.helpButton.elements()).value[0];
                await deferCommissionHelp.waitForDisplayed({timeout: config.wait.M});
                await deferCommissionHelp.scrollIntoView({block: 'center'});
                await deferCommissionHelp.waitForAnimation({timeout: config.wait.M});
                await deferCommissionHelp.click({useActions: false, scrollOptions: {block: 'nearest'}});
                break;
            case 'first pay date':
                firstPayDate = await (await this.monthsToDeferStep.helpButton.elements()).value[1];
                await firstPayDate.waitForDisplayed({timeout: config.wait.L});
                await firstPayDate.scrollIntoView({block: 'center'});
                await firstPayDate.waitForAnimation({timeout: config.wait.M});
                await firstPayDate.click({useActions: false, scrollOptions: {block: 'nearest'}});
                break;
            case 'cat commission help':
                catCommissionHelp = await (await this.monthsToDeferStep.helpButton.elements()).value[2];
                await catCommissionHelp.waitForDisplayed({timeout: config.wait.L});
                await catCommissionHelp.scrollIntoView({block: 'center'});
                await catCommissionHelp.waitForAnimation({timeout: config.wait.M});
                await catCommissionHelp.click({useActions: false, scrollOptions: {block: 'nearest'}});
                break;
            default:
                throw new Error(`${button} help button is not available to option to...`);
        }
    }

    async accessToCharacteristics(){
        await this.termsStep.characteristicsButton.waitForDisplayed({timeout: config.wait.M});
        await this.termsStep.characteristicsButton.waitForAnimation();
        await this.termsStep.characteristicsButton.click();
    }

    async accessToHelpInfo(){
        await this.termsStep.helpButton.waitForDisplayed({timeout: config.wait.M});
        await this.termsStep.helpButton.waitForAnimation();
        await this.termsStep.helpButton.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async closeOperative() {
        await this.signModal.closeModal();
    }

    async accessLinkCreditBuroDocument() {
        await this.termsStep.linkCreditBuroDocument.waitForDisplayed({timeout: config.wait.M});
        await this.termsStep.linkCreditBuroDocument.click();
    }

    async accessLinkContractDocument() {
        await this.termsStep.linkContractDocument.waitForDisplayed({timeout: config.wait.M});
        await this.termsStep.linkContractDocument.click();
    }

    async showMorePurchases(){
        const ShowMore = this.selectPurchasesStep.showPurchase;
        await ShowMore.waitForDisplayed({timeout: config.wait.M});
        await ShowMore.scrollIntoView({block: 'center'});
        await ShowMore.click();
    }

    async exitSuccesfull(){
        await this.accessSummary();
        await this.confirmSummary(true);
        await this.acceptsSuccess();
    }

    async accessSummary() {
        await this.hireLineModalSuccess.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.hireLineModalSuccess.continueButton.waitForAnimation({timeout: config.wait.M});
        await this.hireLineModalSuccess.continueButton.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async confirmSummary(sign = false) {
        await this.expandableMultistep.confirmButton.waitForDisplayed({timeout: config.wait.M});
        await this.expandableMultistep.confirmButton.waitForAnimation({timeout: config.wait.M});
        await this.expandableMultistep.confirmButton.click({useActions: false, scrollOptions: {block: 'nearest'}});
        if (sign) {
            await this.fillSmsInput({code: '12345678'});
        }
    }

    async acceptsSuccess() {
        await this.modal.closetBtn.waitForDisplayed({timeout: config.wait.M});
        await this.modal.closetBtn.waitForAnimation({timeout: config.wait.M});
        await this.modal.closetBtn.click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async accessExpandableMultistep(){
        await this.hireLineModalSuccess.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.hireLineModalSuccess.continueButton.scrollIntoView({block: 'center'});
        await this.hireLineModalSuccess.continueButton.click();
    }

    async changeSelectPurchasesStep(){
        await this.waitForElementsExist(this.selectPurchasesStep.changeButton, config.wait.M);
        await (await this.selectPurchasesStep.changeButton.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.selectPurchasesStep.changeButton.elements()).value[0].scrollIntoView({block: 'center'});
        await (await this.selectPurchasesStep.changeButton.elements()).value[0].waitForAnimation();
        await (await this.selectPurchasesStep.changeButton.elements()).value[0].click();
    }

    async changeMonthsToDeferStep(){
        await this.waitForElementsExist(this.monthsToDeferStep.changeButton, config.wait.M);
        await (await this.monthsToDeferStep.changeButton.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.monthsToDeferStep.changeButton.elements()).value[0].scrollIntoView({block: 'center'});
        await (await this.monthsToDeferStep.changeButton.elements()).value[0].waitForAnimation();
        await (await this.monthsToDeferStep.changeButton.elements()).value[0].click();
    }

    async consultTermsStep(){
        await this.waitForElementsExist(this.termsStep.consultButton, config.wait.M);
        await (await this.termsStep.consultButton.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.termsStep.consultButton.elements()).value[0].scrollIntoView({block: 'center'});
        await (await this.termsStep.consultButton.elements()).value[0].click();
    }

    async selectCheckboxTrue(){
        await this.selectPurchasesStep.checkboxTrue.waitForDisplayed({timeout: config.wait.L});
        await this.selectPurchasesStep.checkboxTrue.scrollIntoView({block: 'center'});
        await this.selectPurchasesStep.checkboxTrue.waitForDisplayed({timeout: config.wait.L});
        await this.selectPurchasesStep.checkboxTrue.waitForAnimation({timeout: config.wait.L});
        await this.selectPurchasesStep.checkboxTrue.click();
    }

    async continueMorePurchasesToMonthsToDefer() {
        await this.waitForElementsExist(this.morePurchaseContinueButton, config.wait.M);
        await (await this.morePurchaseContinueButton.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
        await (await this.morePurchaseContinueButton.elements()).value[0].scrollIntoView({block: 'center'});
        await (await this.morePurchaseContinueButton.elements()).value[0].waitForAnimation({timeout: config.wait.M});
        await (await this.morePurchaseContinueButton.elements()).value[0].click({useActions: false, scrollOptions: {block: 'nearest'}});
    }

    async selectElement(element) {
        const purchaseCheckbox = this.selectPurchasesStep.purchaseCheck.specifySelector({placeholder: '__amount__', value: '1740' });
        switch (element.toLowerCase()) {
            case 'purchase checkbox':
                await (await (await purchaseCheckbox.waitForDisplayed()).scrollIntoView({block: 'start'})).click();
                break;
            case 'view more purchases':
                await this.showMorePurchases();
                break;
            case 'continue button':
                await (await (await (await this.selectPurchasesStep.continueButton.waitForDisplayed()).scrollIntoView({block: 'start'})).waitForClickable()).click();
                break;
            default:
                throw new Error(`${element} element is not available to option to...`);
        }
    }
}

export default new FinanceTransactionMultipurchaseDebit();
