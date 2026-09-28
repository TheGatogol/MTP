import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page()
class MobileTopUp extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-mobileTopUp[state="active"]',
            elements: {
                header:'cells-molecule-header',
                account: '#accountStep',
                firstAccount: '#selector.order-item cells-product-item[data-id="__ID__"]',
                chooseAmount: 'cells-step-enter-amount.cells-step-container',
                choosePhoneNumber: 'cells-step-recipient-selector#recipientStep',
                inputField: '.field__input',
                inputFieldCompany: '#companySelectInput #documentTypeSelector',
                selectCompany:'#cells-template-mobileTopUp > cells-modal-selector ul li[aria-label="__COMPANY__"]',
                changeLink: '#amountStep #stepContainer #changeBtn button',
                topUpAmountTitle: '#amountStep #stepContainer div div h2',
                description: '#amountStep #stepContainer div.full p',
                amountOptions: '#amountStep #stepContainer div.full cells-molecule-amount-group',
                continueButton: '#amountStep .buttons-wrapper #enterAmountBtn',

                newPhoneNumber: '#stepContainer div.full section.new-button',
                inputFieldPhoneNumber: '#complex #phoneNumberInput #input',
                btnContinueForm: '#complex div:nth-child(16) > cells-st-button',
                inputFieldName: '#complex #recipientNameInput #input',
                checkboxSaveContact: '#complex cells-checkbox-button #checkbox',
                inputFieldAlias: '#complex #aliasNameInput #input',
                btnSubmitForm: '#complex div:nth-child(18) cells-st-button button',

                myPhoneNumber:'#stepContainer div.full div.recipient.recipient--new.recipient--my-number',
                btnSubmitFormMyNumber:'div.btn-container > cells-st-button > button',
                btnSubmitFormMyNewOperator:'div:nth-child(19) > cells-st-button > button',

                //Contacto guardados
                showContact: '#stepContainer div.full div.recipient.recipient--new.show-my-contacts.recipient--saved-contacts',
                selectContact: 'cells-contact-avatar#contactAvatar .cells-contact-avatar__initial[aria-label^="__CONTACT__"]',
                selectPhoneNumber: 'cells-left-swipe-action.groupItems-swipe-action',
                contactElement: 'cells-left-swipe-action.groupItems-swipe-action',
                contactWithTwoRecordElement: '',
                contactDelete: 'cells-left-swipe-action-button.bg-delete',
                phoneNumberDelete: 'cells-left-swipe-action.groupItems-swipe-action cells-left-swipe-action-button',
                contact: '#recipientModalCONTACTS cells-contact-selector div div.groupList div div cells-left-swipe-action div:nth-child(1) cells-avatar-item div div.cells-avatar-item-list div p',
                phoneNumberContact: '#recipientModalCONTACTS cells-contact-selector',

                ViewMoreAccounts:'#accountStep #selector #viewMore',
                selectAccount:'cells-product-selector-modal #selector div:nth-child(10) cells-product-item',
                selectSavingsAccount: '',
                selectCheckAccount: 'cells-product-selector-modal #selector div:nth-child(8) > cells-product-item',
                selectDigitalAccount: 'cells-product-selector-modal #selector div:nth-child(9) > cells-product-item',
                selectPayrollAccount: 'cells-product-selector-modal #selector div:nth-child(10) > cells-product-item',

                //Step 3 seleccionar monto
                btnAmount:'#amountStep #stepContainer div.full cells-molecule-amount-group button[aria-label="__AMOUNT__ "]',
                btnContinue:'#amountStep #stepContainer div.full div cells-st-button #enterAmountBtn',
                btnSummary: 'cells-summary-view #collapser cells-st-button.primary.size-m.cells-summary-view--submit-button button',

                //account with insufficient balance
                backButton: 'cells-molecule-header #btnRight',

                //error message
                errorMessage: '#accountStep #stepContainer div.full cells-icon-message:nth-child(1)',
                closeButton: 'cells-molecule-header #btnRight',
                myAccounts: 'cells-product-selector-modal #selector cells-atom-subheader div.left-field',
                headerAccounts: 'cells-product-selector-modal #modal header',
                incompletePhoneMessage: '#complex #phoneNumberInput div:nth-child(5) cells-icon-message #notInline',

                signModal: CellsSignOperationModal,
                spinnerVeil: 'cells-spinner-veil.with-message.is-visible',
                spinner: 'cells-spinner-veil.with-message.is-visible bbva-spinner.spinner',
                spinnerTitle: 'cells-spinner-veil.with-message.is-visible span.top-message',
                spinnerMessage: 'cells-spinner-veil.with-message.is-visible span.message',

            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                chooseAmount: 'cells-step-enter-amount-spherica.cells-step-container',
                choosePhoneNumber: 'cells-step-recipient-selector-spherica',
                inputField: '.field__input[aria-label="Nombre, Alias, Cuenta, CLABE"]',
                selectCompany:'#cells-template-mobileTopUp > cells-modal-selector-spherica cells-middle-modal-spherica ul li[aria-label="__COMPANY__"]',
                description: '#amountStep #stepContainer div.full p.cells_step_enter_limited_amount__description',
                amountOptions: '#amountStep #stepContainer div.full cells-molecule-amount-group-spherica',
                btnContinueForm: '#complex div.btn-container:not([style="display: none;"])',
                checkboxSaveContact: '#complex cells-checkbox-button-spherica #checkbox',
                btnSubmitForm: '#complex div.btn-container:not([style="display: none;"])',
                continueButtonRecipient: 'glomo-mobile-top-up-recipient-spherica div.btn-container:not([style*="display: none"]) cells-st-button-spherica',

                btnSubmitFormMyNumber:'glomo-mobile-top-up-recipient-spherica div.btn-container:not([style="display: none;"]) > cells-st-button-spherica',
                btnSubmitFormMyNewOperator:'cells-st-button-spherica > button#documentTypeSelector',

                //Contacto guardados
                selectContact: 'cells-contact-avatar-spherica#contactAvatar div#avatarLetters[aria-label^="__CONTACT__"]',
                selectPhoneNumber: 'cells-left-swipe-action-spherica.groupItems-swipe-action',
                contactElement: 'cells-left-swipe-action-spherica.groupItems-swipe-action',
                contactDelete: 'cells-left-swipe-action-button-spherica.bg-delete',
                phoneNumberDelete: 'cells-left-swipe-action-spherica.groupItems-swipe-action cells-left-swipe-action-button-spherica',
                contact: ' cells-contact-selector-spherica div div.groupList div div cells-left-swipe-action-spherica div:nth-child(1) cells-avatar-item-spherica div div.cells-avatar-item-list div p',
                phoneNumberContact: 'cells-contact-selector-spherica',

                selectAccount:'cells-product-selector-modal-spherica #selector cells-product-item-spherica',
                selectCheckAccount: 'cells-product-selector-modalspherica #selector div:nth-child(8) > cells-product-item-spherica',
                selectDigitalAccount: 'cells-product-selector-modalspherica #selector div:nth-child(9) > cells-product-item-spherica',
                selectPayrollAccount: 'cells-product-selector-modalspherica #selector div:nth-child(10) > cells-product-item-spherica',
                firstAccount: '#selector.order-item cells-product-item-spherica[data-id="__ID__"]',

                btnAmount:'#amountStep #stepContainer div.full cells-molecule-amount-group-spherica button[aria-label="__AMOUNT__ "]',
                btnContinue:'#amountStep #stepContainer div.full div cells-st-button-spherica #enterAmountBtn',
                btnSummary: 'cells-summary-view-spherica #collapser cells-st-button-spherica.full:not([hidden]) button',
                backButton: 'cells-molecule-header-spherica #btnRight',

                //error message
                errorMessage: '#accountStep #stepContainer div.full cells-icon-message-spherica:nth-child(1)',
                closeButton: 'cells-molecule-header-spherica #btnRight',
                myAccounts: 'cells-product-selector-modal-spherica #selector cells-atom-subheader-spherica div.left-field',
                headerAccounts: 'cells-product-selector-modal-spherica #modal header',
                incompletePhoneMessage: '#complex #phoneNumberInput div:nth-child(5) cells-icon-message-spherica #notInline',
                signModal: CellsSignOperationModalSpherica,
                spinnerVeil: 'cells-spinner-veil-spherica.with-message.is-visible',
                spinner: 'cells-spinner-veil-spherica.with-message.is-visible bbva-spinner.spinner',
                spinnerTitle: 'cells-spinner-veil-spherica.with-message.is-visible span.top-message',
                spinnerMessage: 'cells-spinner-veil-spherica.with-message.is-visible span.message',
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                ],
            },
            requiredElements: [
                'header',
            ]
        });
    }

    async selectOneAccount() {
        await this.selectAccount.waitForClickable({timeout: config.wait.L});
        await this.selectAccount.click();
    }

    async selectAccounts(account) {
        switch (account.toLowerCase()) {
            case 'savings':
                await this.selectSavingsAccount.waitForClickable({timeout: config.wait.L});
                await this.selectSavingsAccount.click();
                break;
            case 'check':
                await this.selectCheckAccount.waitForClickable({timeout: config.wait.L});
                await this.selectCheckAccount.click();
                break;
            case 'digital':
                await this.selectDigitalAccount.waitForClickable({timeout: config.wait.L});
                await this.selectDigitalAccount.click();
                break;
            case 'payroll':
                await this.selectPayrollAccount.waitForClickable({timeout: config.wait.L});
                await this.selectPayrollAccount.click();
                break;
            default:
                throw new Error(`Your account ${account} its not defined`);
        }
    }

    async selectViewMoreAccounts() {
        await this.ViewMoreAccounts.waitForClickable({timeout: config.wait.L});
        await this.ViewMoreAccounts.click();
    }

    async fillForm(phoneNumber, company, name, alias) {
        if (this.isSpherica()) {
            await this.inputFieldPhoneNumber.waitForAnimation({timeout: config.wait.XL});
            await this.inputFieldPhoneNumber.waitForDisplayed({timeout: config.wait.XL});
        } else {
            await this.inputFieldPhoneNumber.waitForClickable({timeout: config.wait.XL});
        }
        await this.inputFieldPhoneNumber.setValue({value: phoneNumber});
        await this.btnContinueForm.waitForClickable({timeout: config.wait.L});
        await this.btnContinueForm.click();
        if(name && name!==''){
            await this.selectACompany(company);
            if (this.isSpherica()) {
                await this.inputFieldName.waitForAnimation({timeout: config.wait.XL});
                await this.inputFieldName.waitForDisplayed({timeout: config.wait.XL});
            } else {
                await this.inputFieldName.waitForClickable({timeout: config.wait.XL});
            }
            await this.inputFieldName.setValue({value: name});
            if (alias && alias!==''){
                await this.checkboxSaveContact.waitForClickable({timeout: config.wait.XL});
                await this.checkboxSaveContact.click();
                if (this.isSpherica()) {
                    await this.inputFieldAlias.waitForAnimation({timeout: config.wait.XL});
                    await this.inputFieldAlias.waitForDisplayed({timeout: config.wait.XL});
                } else {
                    await this.inputFieldAlias.waitForClickable({timeout: config.wait.XL});
                }
                await this.inputFieldAlias.setValue({value: alias});
            }
            await this.btnSubmitForm.waitForClickable({timeout: config.wait.L});
            await this.btnSubmitForm.click();
        }
    }

    async enterPhoneNumber(phoneNumber = '55786') {
        await this.inputFieldPhoneNumber.waitForClickable({timeout: config.wait.XL});
        await this.inputFieldPhoneNumber.setValue({value: phoneNumber});
    }

    async phoneNumberMatch() {
        await this.dialogOperations.waitForDisplayed({timeout: config.wait.XXL});
        await this.dialogOperations.acceptBtn.click();
    }

    async selectAmount(amount) {
        const link = this.btnAmount.specifySelector({placeholder: '__AMOUNT__', value: amount});
        await link.waitForClickable({timeout: config.wait.L});
        await link.click();
        await this.btnContinue.scrollIntoView({block: 'start'});
        await this.btnContinue.waitForDisplayed({timeout: config.wait.XL});
        await this.btnContinue.waitForAnimation({timeout: config.wait.XL});
        await this.btnContinue.waitForClickable({timeout: config.wait.XL});
        await this.btnContinue.click();
    }

    async selectChangeLink() {
        await this.changeLink.waitForClickable({timeout: config.wait.M});
        await this.changeLink.click();
    }

    async confirmMobileTopUp() {
        await this.btnSummary.scrollIntoView({block: 'start'});
        await this.btnSummary.waitForClickable({timeout: config.wait.L});
        await this.btnSummary.click();
    }

    async confirmHiring(otp = '11111111') {
        await this.fillOtp(otp);
    }

    async selectACompany(company) {
        await this.inputFieldCompany.waitForClickable({timeout: config.wait.L});
        await this.inputFieldCompany.click();
        await (await this.selectCompany.specifySelector({placeholder: '__COMPANY__', value: company})
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async showNewPhoneNumber() {
        await this.newPhoneNumber.waitForClickable({timeout: config.wait.L});
        await this.newPhoneNumber.click();
    }

    async showMyPhoneNumber() {
        await this.myPhoneNumber.waitForClickable({timeout: config.wait.L});
        await this.myPhoneNumber.click();
    }

    async selectCompanyMyNumber(company, newOperator = false) {
        await this.selectACompany(company);
        const link = newOperator? this.btnSubmitFormMyNewOperator:this.btnSubmitFormMyNumber;
        await link.waitForClickable({timeout: config.wait.L});
        await link.click();
    }

    async showContacts() {
        await this.showContact.waitForClickable({timeout: config.wait.L});
        await this.showContact.click();
    }

    async selectContactToLoad(contact) {
        const contactValue = (contact || '').trim();
        const link = this.selectContact.specifySelector({placeholder: '__CONTACT__', value: contactValue});
        await link.waitForDisplayed({timeout: config.wait.L});
        await link.waitForAnimation({timeout: config.wait.L});
        await link.click();
    }

    async deleteContact() {
        if (this.isSpherica()) {
            await this.contactElement.waitForAnimation({timeout: config.wait.L});
            await this.contactElement.waitForDisplayed({timeout: config.wait.L});
        } else {
            await this.contactElement.waitForClickable({timeout: config.wait.L});
        }
        await this.contactElement.execute({script: () => this.setAttribute('open', '')});
        await this.contactDelete.click();
    }

    async deleteContactWithTwoRecords() {
        await this.contactWithTwoRecordElement.waitForClickable({timeout: config.wait.L});
        await this.contactWithTwoRecordElement.execute({script: () => this.setAttribute('open', '')});
        await this.contactDelete.click();
    }

    async deletePhoneNumber() {
        if (this.isSpherica()) {
            await this.contactElement.waitForAnimation({timeout: config.wait.L});
            await this.contactElement.waitForDisplayed({timeout: config.wait.L});
            await this.contactElement.execute({script: () => this.setAttribute('open', '')});
            await this.contactDelete.click();
        } else {
            await this.selectPhoneNumber.waitForClickable({timeout: config.wait.L});
            await this.selectPhoneNumber.execute({script: () => this.setAttribute('open', '')});
            await this.phoneNumberDelete.click();
        }
    }

    async selectFirstPhoneNumber() {
        await this.selectPhoneNumber.waitForAnimation({timeout: config.wait.L});
        await this.selectPhoneNumber.waitForDisplayed({timeout: config.wait.L});
        await this.selectPhoneNumber.click();
    }

    async findByName(contact) {
        if (this.isSpherica()) {
            await this.inputField.waitForAnimation({timeout: config.wait.XL});
            await this.inputField.waitForDisplayed({timeout: config.wait.XL});
        } else {
            await this.inputField.waitForClickable({timeout: config.wait.XL});
        }
        await this.inputField.setValue({value: contact});
    }

    async cancelOperation() {
        await this.backButton.waitForClickable({timeout: config.wait.L});
        await this.backButton.click();
    }

    async closeScreen() {
        await this.signModal.closeModal();
        await this.cancelOperation();
        await this.dialogOperations.confirmDialog();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount':
                await this.chooseAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'my number':
                await this.myPhoneNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'saved contacts':
                await this.showContact.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account':
                await this.chooseAmount.waitForAnimation({timeout: config.wait.L});
                await this.account.scrollIntoView({alignToTop:true});
                await this.account.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'new':
                await this.newPhoneNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error message':
                await this.errorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header accounts':
                await this.headerAccounts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'my accounts':
                await this.myAccounts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contact':
                await this.contact.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone number contact':
                await this.phoneNumberContact.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'incomplete phone message':
                await this.incompletePhoneMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input phone number':
                await this.inputFieldPhoneNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'top-up amount title':
                await this.topUpAmountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount options':
                await this.amountOptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button recipient':
                await this.continueButtonRecipient.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input beneficiary name':
                await this.inputFieldName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'spinner veil':
                await this.spinnerVeil.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'spinner':
                await this.spinner.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'spinner title':
                if(!this.isSpherica()) {
                    await this.spinnerTitle.waitForDisplayed({timeout: config.wait.S});
                }
                break;
            case 'spinner message':
                await this.spinnerMessage.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
    async fillFormNumber(phoneNumber) {
        if (this.isSpherica()) {
            await this.inputFieldPhoneNumber.waitForAnimation({timeout: config.wait.XL});
            await this.inputFieldPhoneNumber.waitForDisplayed({timeout: config.wait.XL});
        } else {
            await this.inputFieldPhoneNumber.waitForClickable({timeout: config.wait.XL});
        }
        await this.inputFieldPhoneNumber.setValue({value: phoneNumber});
    }

    async selectFirstAccount() {
        const firstAccount = await this.firstAccount.specifySelector({placeholder: '__ID__', value: global.user.accountSelectedId});
        await firstAccount.waitForClickable({timeout: config.wait.M});
        await firstAccount.click();
    }
}

export default new MobileTopUp();
