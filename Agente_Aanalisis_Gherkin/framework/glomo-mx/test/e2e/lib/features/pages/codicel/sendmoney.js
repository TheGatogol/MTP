import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
@page()
class SendMoney extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-codicelPeerToPeerSend[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                dialogOperations: [
                    GlomoAlertManagerSpherica
                ],

                //accuntInfo
                productInfo: 'cells-step-product-selector-spherica',
                //origin account 
                originAccountContinue: '#codicel-p2p-origin #defaultActions #primaryButton',
                //destinatario
                destinatary: 'cells-step-enter-phone-spherica cells-step-spherica div div > div div > div > h2',
                phoneNumberInput: 'cells-new-cellular-form-spherica cells-molecule-input-spherica input',
                phoneNumberInputX: 'cells-new-cellular-form-spherica cells-molecule-input-spherica div.icon #btnSecondaryIcon iron-icon',
                closeSecundaryIcon: 'cells-new-cellular-form-spherica cells-molecule-input-spherica span #btnSecondaryIcon > iron-icon',
                searchContactsIcon: 'cells-new-cellular-form-spherica cells-molecule-input-spherica span #btnMainIcon > iron-icon',
                messageInfoRegistred:'cells-new-cellular-form-spherica cells-icon-message form > div > cells-icon-message > span',
                continueButtonPhone: 'cells-new-cellular-form-spherica cells-st-button-spherica button',
                destinataryEditButton: 'cells-step-enter-phone-spherica cells-step-spherica #changeBtn button',
                //amount
                amountTitle: 'cells-step-enter-amount-spherica #stepContainer .cells-step__header-main',
                amountSubtitle: 'cells-step-enter-amount-spherica #stepContainer p.cells_step_enter_limited_amount__description',
                limitedAmountInput: 'cells-enter-limited-amount-spherica cells-molecule-amount-input-spherica input',
                limitedAmountInputX: 'cells-enter-limited-amount-spherica cells-molecule-amount-input-spherica #icon iron-icon',
                accountRemainings: 'cells-enter-limited-amount-spherica .cells-enter-limited-amount__infoSection .cells-enter-limited-amount__textInfo',
                continueButtonAmount: 'cells-enter-limited-amount-spherica cells-st-button-spherica button',
                amountEditButton: 'cells-step-enter-amount-spherica #stepContainer #changeBtn button',
                //concept
                conceptTitle: 'cells-step-concept-spherica div.cells-step__header-main',
                referenceInput: '#refInput input',
                referenceInputX: '#refInput #btnMainIcon iron-icon',
                continueButtonConcept: 'cells-step-concept-spherica #continueBtn button',
                refMessage: '#refInput .info-message',
                conceptMessage: '#conceptInput .info-message',
                conceptInput: '#conceptInput input',
                conceptInputX: '#conceptInput #btnMainIcon iron-icon',
                conceptEditButton: 'cells-step-concept-spherica #stepContainer #changeBtn button',
                //Summary
                summaryTitle: '#summary #operationTotal p:first-of-type',
                summaryAmount: '#summary #operationTotal cells-atom-amount-spherica',
                summaryComission: '#summary #operationTotal p:last-of-type',
                sendMoneyButton: 'cells-operation-summary-spherica cells-st-button-spherica.continueBtn[variant="primary"] button',
                btnClose: '[data-tag-name="bbva-help-modal"][visible] [slot="slot-footer"] [data-tag-name="bbva-button-default"]',
            },

            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item, value, _args} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            case 'product info':
                await this.productInfo.waitForExist({timeout: config.wait.M});
                await this.productInfo.scrollIntoView({block: 'center'});
                await this.productInfo.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'phone number':
                await (await this.phoneNumberInput.waitForDisplayed({timeout: config.wait.M}))
                    .waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'close secundary':
                await this.closeSecundaryIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message info registred':
                await this.messageInfoRegistred.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search contacts':
                await this.searchContactsIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button phone':
                await (await this.continueButtonPhone.waitForDisplayed({timeout: config.wait.M}))
                    .waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'amount title':
                await this.amountTitle.waitForDisplayed({timeout: config.wait.M, reverse: value === 'hidden'});
                break;
            case 'amount subtitle':
                await this.amountSubtitle.waitForDisplayed({timeout: config.wait.M, reverse: value === 'hidden'});
                break;
            case 'limited amount':
                await (await this.limitedAmountInput.waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'continue button amount':
                await (await this.continueButtonAmount.waitForDisplayed({timeout: config.wait.M}))
                    .waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'concept title':
                await this.conceptTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reference input':
                await (await this.referenceInput.waitForDisplayed({timeout: config.wait.M, reverse: value === 'disabled'}))
                    .waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'reference input message':
                await this.refMessage.waitForDisplayed({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'concept input':
                await this.conceptInput.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'concept input message':
                await this.conceptMessage.waitForDisplayed({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'continue button concept':
                await (await this.continueButtonConcept.waitForDisplayed({timeout: config.wait.M}))
                    .waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'summary title':
                await this.summaryTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount':
                await this.summaryAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary commision':
                await this.summaryComission.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'send money button':
                await (await this.sendMoneyButton.waitForDisplayed({timeout: config.wait.M}))
                    .waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER_HALF});
                break;
            case 'icon':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.PARAGRAPH_ICON});
                break;
            case 'send invitation':
            case 'change contact':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            case 'cancel invitation':
            case 'continue process':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CANCEL_BUTTON});
                break;
            case 'modal text':
            case 'phone number':
            case 'error info text':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.DESCRIPTION});
                break;
            case 'invitation message':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.MAIN_TEXT});
                break;
            default:
                await super._modalElementValidation({item});
        }
    }

    async setPhoneNumber(phone) {
        await this.phoneNumberInput.waitForClickable({timeout: config.wait.L});
        await this.phoneNumberInput.setValue({value: phone});
    }

    async setConcept(concept) {
        await (await this.conceptInput.waitForClickable({timeout: config.wait.L}))
            .setValue({value: concept});
    }

    async setReference(reference) {
        await (await this.referenceInput.waitForClickable({timeout: config.wait.L}))
            .setValue({value: reference});
    }

    async closeDialogWhatsNew() {
        await this.btnClose.waitForDisplayed({timeout: config.wait.M});
        await this.btnClose.waitForAnimation({timeout: config.wait.M});
        await this.btnClose.waitForClickable({timeout: config.wait.M});
        await this.btnClose.click();
        await this.btnClose.waitForDisplayed({timeout: config.wait.L, reverse: true});
    }

    async goBack() {
        await this.header.actionRight();
    }

    async acceptDestinatary() {
        await this.continueButtonPhone.waitForClickable({timeout: config.wait.M});
        await this.continueButtonPhone.click();
    }

    async insertAmmount(amount) {
        await (await (await this.limitedAmountInput.waitForDisplayed({timeout: config.wait.L})).waitForClickable({timeout: config.wait.M}))
            .setValue({value: amount});
    }

    async acceptAmmount() {
        await this.continueButtonAmount.waitForClickable({timeout: config.wait.M});
        await this.continueButtonAmount.click();
    }

    async acceptConcept() {
        await this.continueButtonConcept.waitForClickable({timeout: config.wait.M});
        await this.continueButtonConcept.click();
    }

    async acceptSummary() {
        await this.sendMoneyButton.waitForClickable({timeout: config.wait.M});
        await this.sendMoneyButton.click();
        await this.fillOtp('11111111');
    }

    async acceptSection(section) {
        switch(section.toLowerCase()) {
            case 'destinatary':
                await this.acceptDestinatary();
                break;
            case 'invitation modal':
                await (await this.dialogOperations.closeBtn.waitForClickable({timeout: config.wait.XXL}))
                    .click();
                break;
            case 'ammount':
                await this.acceptAmmount();
                break;
            case 'concept':
                await this.acceptConcept();
                break;
            default:
                throw new Error(`Section ${section} not found`);
        }
    }

    async modifySection(section) {
        switch(section.toLowerCase()) {
            case 'destinatary':
                await this.openEditDestinataryConfirmationModal();
                break;
            case 'ammount':
                await this.amountEditButton.waitForAnimation({timeout: config.wait.M});
                await this.amountEditButton.scrollIntoView({block: 'start'});
                await this.amountEditButton.click({useActions: true});
                break;
            case 'concept':
                await (await this.conceptEditButton.waitForAnimation({timeout: config.wait.S})).scrollIntoView();
                await (await this.conceptEditButton.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`Section ${section} not found`);
        }
    }

    async checkInputs() {
        return !(await this.conceptInput.getValue()) === '' && (await this.referenceInput.getValue()) === '';
    }

    async openEditDestinataryConfirmationModal() {
        await this.destinataryEditButton.waitForDisplayed({timeout: config.wait.M});
        await this.destinataryEditButton.waitForAnimation({timeout: config.wait.M});
        await this.destinataryEditButton.waitForClickable({timeout: config.wait.M});
        await this.destinataryEditButton.click();
    }

    async acceptModals() {
        await (await this.dialogOperations.acceptBtn.waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async denyEditDestinataryModal() {
        await (await this.dialogOperations.cancelBtn.waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async openContactsAgenda() {
        await this.searchContactsIcon.waitForDisplayed({timeout: config.wait.M});
        await this.searchContactsIcon.waitForAnimation({timeout: config.wait.M});
        await this.searchContactsIcon.click();
    }

    async enterDestinataryZone() {
        await this.messageInfoRegistred.waitForClickable({timeout: config.wait.M});
        await this.messageInfoRegistred.click();
    }

    async continueOriginAccount() {
        await this.originAccountContinue.waitForDisplayed({timeout: config.wait.M});
        await this.originAccountContinue.click();
    }

    async setDataTransfer(phone, concept){
        await this.setPhoneNumber(phone);
        await this.acceptDestinatary();
        await this.insertAmmount('20');
        await this.acceptAmmount();
        await this.setConcept(concept);
        await this.acceptConcept();
    }
    async closeModal() {
        await this.amountTitle.waitForDisplayed({timeout: config.wait.L});
        await this.header.waitForDisplayed({timeout: config.wait.M});
        await this.header.actionRight();
        await this.dialogOperations.confirmDialog();
    }
}

export default new SendMoney();
