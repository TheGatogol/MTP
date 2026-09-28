import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('InternationalTransferContactsBook')
class InternationalTransferContactsBook extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-internationalTransfersContactsBook[state="active"]',
            elements: {
                multistep: {
                    accountCard: '[data-tag-name="international-transfers-account-selection-modal"] [account-id="__ACCOUNT_ID__"]',
                    helpIconBank: '#bank-code [icon="spherica:help"]',
                    codeBank: '#bank-code [inputmode="text"]',
                    helpIconNumber: '#account-number [icon="spherica:help"]',
                    numberBank: '#account-number [inputmode="text"]',
                    alReadyRecipient: '#magic-search-modal [data-tag-name="bbva-button-default"][text="Continuar"]',
                    anotherSearch: '#magic-search-modal [data-tag-name="bbva-button-default"][variant="link"]',
                    titleBankDestinate: '[text="Datos del banco destino"]',
                    bankDestinate: '[text="Banco"]',
                    bankIdentity: '[text="Identificador"]',
                    bankDirection: '[text="Dirección del banco"]',
                    bankCity: '[text="Ciudad"]',
                    bankCountry: '[text="País"]',
                    nameRecipient: '#fullName [inputmode="text"]',
                    countryRecipient: '#country',
                    country: '#country [value="US"]',
                    provinceRecipient: '#province [inputmode="text"]',
                    cityRecipient: '#city [inputmode="text"]',
                    postalCodeRecipient: '#postalCode [inputmode="text"]',
                    streetRecipient: '#street [inputmode="text"]',
                    exteriorNumberRecipient: '#exteriorNumber [inputmode="text"]',
                    relationshipRecipient: '#relationship',
                    relationship: '#relationship [value="102"]',
                    acceptRecipient: '#button-recipient',
                    confirmationTransfer: '#multistep .confirm-step [data-tag-name="bbva-button-default"]',
                    summaryAmount: '.confirm-step [data-tag-name="bbva-type-amount"]',
                    summaryAccept: '.confirm-step [data-tag-name="bbva-button-default"]',
                    messageContactlessList: '#contact-agenda [microillustration="emptyState"]',
                    messageContactlessAgenda: '[data-tag-name="bbva-widget-contacts-agenda"] [microillustration="emptyState"]',
                    operationRegistries: '[data-tag-name="international-transfers-migration-dm"] [data-tag-name="bbva-local-operation-registries-api-dm"]',
                    internationalTransfers: '[data-tag-name="international-transfers-migration-dm"] [data-tag-name="bbva-local-international-transfers-api-dm"]',
                    internationalTransfersDm: '[data-tag-name="international-transfers-migration-dm"]',
                    exitTransfer: {
                        properties: { root: '#exit-transfer' },
                        iconModalExit: '#helpModalTitle [data-tag-name="bbva-type-icon"]',
                        titleModalExit: '#helpModalTitle #title-text',
                        contentModalExit: '#helpModalContent',
                        buttonAcceptExit: '.modal-footer',
                    },
                    errorListContacts: {
                        properties: { root: '#retry-error-list-contacts' },
                        iconModalError: '[data-tag-name="bbva-type-icon"]',
                        titleModalError: '#title-text',
                        contentModalError: '.modal-footer',
                    },
                    alternativeNewContact: {
                        properties: { root: '#alternative-new-contact' },
                        accordionNewContact: '[slot="header"]',
                        notificationMessage: '[slot="content"] [data-tag-name="bbva-notification-message"]',
                        acceptDestination: '#button-recipient',
                        saveContact: '#save-contact [data-tag-name="bbva-form-checkbox-input"]',
                        aliasContact: '#alias [inputmode="text"]',
                    },
                    contactAgenda: {
                        properties: { root: '#contact-agenda' },
                        accordionContactBook: '[slot="header"]',
                        seeMoreContacts: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]',
                        savedContactsList: '.contact-list',
                        headerSavedContacts: '[data-tag-name="bbva-header-category"]',
                    },
                    stepEconomicActivity: {
                        properties: { root: '#step-economic-activity' },
                        titleEconomicActivity: '#headingLabel',
                        currentEconomicActivity: ' #actual-economic-activity [aria-multiline="true"]',
                        foreignCheck: '#foreign-activity-checkbox',
                        acceptEconomicActivity: '#acceptEconomicActivity',
                    },
                    stepForeignChange: {
                        properties: { root: '#step-foreign-change' },
                        foreignTitle: ' #headingLabel',
                        foreignOriginAmount: '#foreign-origin-amount [inputmode="numeric"]',
                        foreignDestinationAmount: '[icon="spherica:unfold"]',
                        foreignMessage: '[data-tag-name="bbva-notification-message"]',
                        acceptForeignChange: '#accept-foreign-change',
                    },
                    stepConcept: {
                        properties: { root: '#step-concept' },
                        reference: '#transfer-reference [inputmode="text"]',
                        reasonTransfer: '#reason-transfer',
                        credit: '#reason-transfer [data-tag-name="bbva-form-option"][value="204"]',
                        concept: '#concept [inputmode="text"]',
                        acceptConcept: '#accept-reason',
                    },
                    contactAgendaModal: {
                        properties: { root: '#contactAgendaModal' },
                        cardContact: '[data-tag-name="bbva-list-swipe"]#item0000000020',
                        deleteContact: '[data-tag-name="bbva-list-swipe"]#item0000000020 [data-tag-name="bbva-button-action"]',
                        contactFind: '[data-tag-name="bbva-list-swipe"]#item0000000010',
                        searchContactInput: '[action-icon="spherica:search"] [inputmode="text"]',
                        contactSearched: '[data-tag-name="bbva-type-text"][text="Amigo Bbva"]',
                    }
                },
                successModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="international-transfers-success-modal"]',
                        additionalElements: {
                            titleSuccess: '.panel-info [text="Transferencia en proceso"]',
                            amountSuccess: '.panel-info [data-tag-name="bbva-type-amount"]',
                            summarySuccess: '.summary-content',
                            messageSuccess: '.footer-modal [data-tag-name="bbva-notification-message"]',
                            actionsSuccess: '.footer-modal [data-tag-name="bbva-button-row"]'
                        }
                    }
                ],
                errorModal: [
                    BbvaHelpModal,
                    {
                        modifiers: '#international-transfers-customer-in-black-list',
                        additionalElements: {
                            titleError: '#title-text',
                            summaryError: '.modal-footer [data-tag-name="bbva-button-default"]',
                        }
                    }
                ],
                errorAliasModal: [
                    BbvaHelpModal,
                    {
                        modifiers: '#error-alias',
                        additionalElements: {
                            icon: '[data-tag-name="bbva-type-icon"]',
                            title: '#title-text',
                            content: '#helpModalContent',
                            buttonAccept: '.modal-footer [data-tag-name="bbva-button-default"]',
                        }
                    }
                ],
                errorDeleteContactModal: {
                    properties: { root: '#deletedContactsAgenda #halfModal' },
                    icon: '[data-tag-name="bbva-type-icon"]',
                    title: '#title-text',
                    content: '#helpModalContent',
                    buttonAccept: '[role="button"]',
                    linkCancel: '[variant="link"]',
                },
                buttonHeaderClose: '#multistepModal [variant="modal-initial"] #btn-close'
            },
            requiredElements: [
                '__root',
            ]
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'accordion new contact':
                await this.multistep.alternativeNewContact.accordionNewContact.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accordion contact book':
                await this.multistep.contactAgenda.accordionContactBook.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'code bank':
                await this.multistep.codeBank.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account number':
                await this.multistep.numberBank.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept destination':
                await this.multistep.alternativeNewContact.acceptDestination.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account card':
                await (await this.multistep.accountCard.specifySelector({placeholder: '__ACCOUNT_ID__', value: user.accounts[0].id}))
                    .waitForDisplayed({timeout: config.wait.M });
                break;
            case 'bank title':
                await this.multistep.titleBankDestinate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bank destinate':
                await this.multistep.bankDestinate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bank identity':
                await this.multistep.bankIdentity.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bank address':
                await this.multistep.bankDirection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bank city':
                await this.multistep.bankCity.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bank country':
                await this.multistep.bankCountry.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recipient name':
                await this.multistep.nameRecipient.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recipient country':
                await this.multistep.countryRecipient.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recipient province':
                await this.multistep.provinceRecipient.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recipient city':
                await this.multistep.cityRecipient.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recipient postal code':
                await this.multistep.postalCodeRecipient.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recipient street':
                await this.multistep.streetRecipient.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recipient exterior number':
                await this.multistep.exteriorNumberRecipient.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recipient relationship':
                await this.multistep.relationshipRecipient.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title economic activity':
                await this.multistep.stepEconomicActivity.titleEconomicActivity.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'current economic activity':
                await this.multistep.stepEconomicActivity.currentEconomicActivity.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'foreign check':
                await this.multistep.stepEconomicActivity.foreignCheck.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept economic activity':
                await this.multistep.stepEconomicActivity.acceptEconomicActivity.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title foreign':
                await this.multistep.stepForeignChange.foreignTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'foreign origin':
                await this.multistep.stepForeignChange.foreignOriginAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'foreign destination':
                await this.multistep.stepForeignChange.foreignDestinationAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'foreign message':
                await this.multistep.stepForeignChange.foreignMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept foreign change':
                await this.multistep.stepForeignChange.acceptForeignChange.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reference':
                await this.multistep.stepConcept.reference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reason transfer':
                await this.multistep.stepConcept.reasonTransfer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'concept':
                await this.multistep.stepConcept.concept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept concept':
                await this.multistep.stepConcept.acceptConcept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount':
                await this.multistep.summaryAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary accept':
                await this.multistep.summaryAccept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success title':
                await this.successModal.additionalElements.titleSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success amount':
                await this.successModal.additionalElements.amountSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success summary':
                await this.successModal.additionalElements.summarySuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success message':
                await this.successModal.additionalElements.messageSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success actions':
                await this.successModal.additionalElements.actionsSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error title':
                await this.errorModal.additionalElements.titleError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call line':
                await this.errorModal.additionalElements.summaryError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list contacts':
                await this.multistep.contactAgenda.savedContactsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header contacts list':
                await this.multistep.contactAgenda.headerSavedContacts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input search contact':
                await this.multistep.contactAgendaModal.searchContactInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contact searched':
                await this.multistep.contactAgendaModal.contactSearched.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message contactless list':
                await this.multistep.messageContactlessList.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'message contactless agenda':
                await this.multistep.messageContactlessAgenda.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'contact found':
                await this.multistep.contactAgendaModal.cardContact.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contact selected':
                await this.multistep.contactAgendaModal.contactFind.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more contacts':
                await this.multistep.contactAgenda.seeMoreContacts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon modal alias':
                await this.errorAliasModal.additionalElements.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title modal alias':
                await this.errorAliasModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'content modal alias':
                await this.errorAliasModal.additionalElements.content.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button modal alias':
                await this.errorAliasModal.additionalElements.buttonAccept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon modal exit':
                await this.multistep.exitTransfer.iconModalExit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title modal exit':
                await this.multistep.exitTransfer.titleModalExit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'content modal exit':
                await this.multistep.exitTransfer.contentModalExit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button modal exit':
                await this.multistep.exitTransfer.buttonAcceptExit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon modal error':
                await this.multistep.errorListContacts.iconModalError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title modal error':
                await this.multistep.errorListContacts.titleModalError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'content modal error':
                await this.multistep.errorListContacts.contentModalError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon error delete':
                await this.errorDeleteContactModal.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title error delete':
                await this.errorDeleteContactModal.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'content error delete':
                await this.errorDeleteContactModal.content.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button error delete':
                await this.errorDeleteContactModal.buttonAccept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link error delete':
                await this.errorDeleteContactModal.linkCancel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message new contact':
                await this.multistep.alternativeNewContact.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: `${item}`, args: arguments[0]});
        }
    }

    async selectAnotherSearch() {
        await (await (await this.multistep.anotherSearch.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
    }

    async selectContinueWithContact() {
        await (await (await this.multistep.alReadyRecipient.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
    }

    async selectAlreadyExistAlias() {
        await this.searchBank(user.codeBank, user.numberBank, user.accounts[0].id);
        await this.fillForm();
        await this.createContact(user.nameContact1);
    }

    async selectChangeAlias() {
        await (await (await this.errorAliasModal.additionalElements.buttonAccept.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
        await (await this.multistep.nameRecipient.waitForDisplayed({timeout: config.wait.M})).setValue({value: user.nameRecipient});
        await (await this.multistep.alternativeNewContact.aliasContact.waitForDisplayed({timeout: config.wait.M})).setValue({value: user.aliasContact});
        await this.accessesEconomicActivity();
    }

    async fillBankDetails(bankName, numberBank, id) {
        await (await (await (await this.multistep.accountCard.specifySelector({placeholder: '__ACCOUNT_ID__', value: id})
            .waitForDisplayed({timeout: config.wait.M})))).click();
        await (await (await this.multistep.alternativeNewContact.accordionNewContact.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
        await (await this.multistep.codeBank.waitForDisplayed({timeout: config.wait.M})).setValue({value: bankName});
        await (await this.multistep.numberBank.waitForDisplayed({timeout: config.wait.M})).setValue({value: numberBank});
    }

    async searchBank(bankName, numberBank, id) {
        await this.fillBankDetails(bankName, numberBank, id);
        await (await (await this.multistep.alternativeNewContact.acceptDestination.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
    }

    async accessNewContact() {
        await this.searchBank(user.codeBank, user.searchBank, user.accounts[0].id);
        await this.fillForm();
    }

    async selectUsAccount() {
        await this.searchBank(user.codeBank, user.searchBank, user.accounts[1].id);
        await this.fillForm();
    }

    async fillForm() {
        await (await this.multistep.nameRecipient.waitForDisplayed({timeout: config.wait.M})).setValue({value: user.name});
        await (await (await this.multistep.countryRecipient.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
        await (await (await this.multistep.country.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
        await (await this.multistep.provinceRecipient.waitForDisplayed({timeout: config.wait.M})).setValue({value: user.province});
        await (await this.multistep.cityRecipient.waitForDisplayed({timeout: config.wait.M})).setValue({value: user.city});
        await (await this.multistep.postalCodeRecipient.waitForDisplayed({timeout: config.wait.M})).setValue({value: user.postalCode});
        await (await this.multistep.streetRecipient.waitForDisplayed({timeout: config.wait.M})).setValue({value: user.street});
        await (await this.multistep.exteriorNumberRecipient.waitForDisplayed({timeout: config.wait.M})).setValue({value: user.exteriorNumber});
        await (await (await this.multistep.relationshipRecipient.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
        await (await (await this.multistep.relationship.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
    }

    async accessesEconomicActivity() {
        await this.multistep.operationRegistries.execute({script: () => this.removeAttribute('requiredotp')});
        await this.multistep.internationalTransfers.execute({script: () => this.removeAttribute('requiredotp')});
        await (await (await this.multistep.acceptRecipient.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
        await this.multistep.internationalTransfersDm.execute({script: () => this._handleRegistryResponse(true)});
    }

    async createContact(nameContact) {
        await (await (await this.multistep.alternativeNewContact.saveContact.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
        await (await this.multistep.alternativeNewContact.aliasContact.waitForDisplayed({timeout: config.wait.M})).setValue({value: nameContact});
        await this.accessesEconomicActivity();
    }

    async accessForeignChange() {
        await (await this.multistep.stepEconomicActivity.currentEconomicActivity.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: user.economicActivity});
        await (await (await this.multistep.stepEconomicActivity.acceptEconomicActivity.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
    }

    async accessConcept() {
        await (await this.multistep.stepForeignChange.foreignOriginAmount.waitForDisplayed({timeout: config.wait.M})).setValue({value: user.originAmount});
        await (await (await this.multistep.stepForeignChange.foreignMessage.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
        await (await (await this.multistep.stepForeignChange.acceptForeignChange.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
    }

    async accessSummary() {
        await (await (await this.multistep.stepConcept.reasonTransfer.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
        await (await this.multistep.stepConcept.credit.waitForClickable({timeout: config.wait.M})).click();
        await (await this.multistep.stepConcept.concept.waitForDisplayed({timeout: config.wait.M})).setValue({value: user.concept});
        await (await (await this.multistep.stepConcept.acceptConcept.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
    }

    async closeInternationalTransfer() {
        await (await (await this.buttonHeaderClose.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
    }

    async createInternationalTransfer() {
        await this.openOtp();
    }

    async openOtp() {
        await this.multistep.internationalTransfers.execute({script: () => this.setAttribute('requiredotp')});
        await (await (await this.multistep.confirmationTransfer.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
    }

    async accessesContactBook() {
        await this.viewListContacts();
        await (await (await this.multistep.contactAgenda.seeMoreContacts.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
    }

    async viewListContacts() {
        await (await (await (await this.multistep.accountCard.specifySelector({placeholder: '__ACCOUNT_ID__', value: user.accounts[0].id})
            .waitForDisplayed({timeout: config.wait.M})))).click();
        await (await (await this.multistep.contactAgenda.accordionContactBook.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
    }

    async searchContact(value = '') {
        await this.accessesContactBook();
        await (await this.multistep.contactAgendaModal.searchContactInput.waitForDisplayed({timeout: config.wait.M})).setValue({value: value});
    }

    async deletedContact() {
        await this.accessesContactBook();
        await this.multistep.contactAgendaModal.cardContact.waitForAnimation({timeout: config.wait.M});
        await this.swipeElement(this.multistep.contactAgendaModal.cardContact, user.swipe);
        await (await (await this.multistep.contactAgendaModal.deleteContact.waitForDisplayed({timeout: config.wait.M}))
            .scrollIntoView()).click();
    }

    async closeSuccessModal() {
        await (await this.successModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async baseFlow() {
        await this.accessNewContact();
        await this.accessesEconomicActivity();
        await this.accessForeignChange();
        await this.accessConcept();
    }

    async actionsContactBook(rawStep) {
        const step = rawStep.toLowerCase();
        const { accounts, newContact, codeBank, numberBank } = user;

        switch(step) {
            case 'new contact':
                await this.accessNewContact();
                break;
            case 'saved new contact':
                await this.accessNewContact();
                await this.createContact(newContact);
                break;
            case 'fill bank details':
                await this.fillBankDetails(codeBank, numberBank, accounts[0].id);
                break;
            case 'activity economic':
                await this.accessNewContact();
                await this.accessesEconomicActivity();
                break;
            case 'another search contact':
                await this.searchBank(codeBank, numberBank, accounts[0].id);
                await this.selectAnotherSearch();
                break;
            case 'continue with contact':
                await this.searchBank(codeBank, numberBank, accounts[0].id);
                await this.selectContinueWithContact();
                break;
            case 'change alias':
                await this.selectAlreadyExistAlias();
                await this.selectChangeAlias();
                break;
            case 'foreign change':
                await this.accessNewContact();
                await this.accessesEconomicActivity();
                await this.accessForeignChange();
                break;
            case 'concept':
                await this.baseFlow();
                break;
            case 'summary':
                await this.baseFlow();
                await this.accessSummary();
                break;
            case 'summary and close':
                await this.baseFlow();
                await this.accessSummary();
                await this.closeInternationalTransfer();
                break;
            case 'confirmation':
                await this.baseFlow();
                await this.accessSummary();
                break;
            case 'security modal':
                await this.baseFlow();
                await this.accessSummary();
                await this.openOtp();
                break;
            case 'success modal':
            case 'error modal':
                await this.baseFlow();
                await this.accessSummary();
                await this.createInternationalTransfer();
                break;
            case 'create transfer with us':
                await this.selectUsAccount();
                await this.accessesEconomicActivity();
                await this.accessForeignChange();
                await this.accessConcept();
                await this.accessSummary();
                await this.createInternationalTransfer();
                break;
            case 'list contacts':
                await this.viewListContacts();
                break;
            case 'contact book':
                await this.accessesContactBook();
                break;
            case 'delete contact':
                await this.deletedContact();
                break;
            case 'prefilled transfer smart servicing':
                await this.accessConcept();
                await this.createInternationalTransfer();
                break;
            default:
                throw new Error(`Option "${screen}" is not valid`);
        }
    }
}

export default new InternationalTransferContactsBook();
