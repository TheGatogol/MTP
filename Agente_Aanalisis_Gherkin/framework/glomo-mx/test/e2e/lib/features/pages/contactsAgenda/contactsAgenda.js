import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica.js';
import {ScreenValidationKeyNotFound} from '@csqe/radish';

const prueba = {
    test: 'Adriana',
};

class ContactsAgenda extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-contactsAgenda[state="active"]',
            elements: {

                dialogOperations: [
                    GlomoAlertManagerSpherica
                ],
                //upper side
                header: 'cells-molecule-header',
                closeButton: 'cells-molecule-header #btnRight',

                //mid side
                inputSearch: 'bbva-form-predictive input',
                swipeList: 'cells-operation-swipe-list',
                contactElement: 'cells-left-swipe-action.groupItems-swipe-action',
                producElement: 'cells-operation-swipe-list div div.groupItems-block .groupProducts cells-left-swipe-action[data-index="0"]',
                contactSelect: 'cells-operation-swipe-list-spherica .groupProducts cells-left-swipe-action-spherica.groupItems-swipe-action',
                contactDelete: 'cells-left-swipe-action-button',
                producDelete: 'cells-operation-swipe-list div div.groupItems-block .groupProducts cells-left-swipe-action[data-index="0"] cells-left-swipe-action-button',
                bottomModal: 'cells-alert-box cells-bottom-modal',
                contact: 'cells-operation-swipe-list [id="__NAME__-0"] > div',
                deletedContactMsg: 'cells-bottom-modal cells-atom-message div.message p.message__text ',
                withoutContactsMsg: 'cells-operation-swipe-list div div p.message-text',

                //modal
                greenToast: 'cells-bottom-modal',
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica',
                contactElement: 'cells-left-swipe-action-spherica.groupItems-swipe-action',
                closeButton: 'cells-molecule-header-spherica #btnRight',
                inputSearch: 'bbva-form-predictive-spherica input',
                swipeList: 'cells-operation-swipe-list-spherica',
                contactDelete: 'cells-operation-swipe-list-spherica cells-left-swipe-action-spherica[data-index="0"].groupItems-swipe-action cells-left-swipe-action-button-spherica',
                producElement: 'cells-operation-swipe-list-spherica div div.groupItems-block .groupProducts cells-left-swipe-action-spherica[data-index="0"]',
                producDelete: 'cells-operation-swipe-list-spherica div div.groupItems-block .groupProducts cells-left-swipe-action-spherica[data-index="0"] cells-left-swipe-action-button-spherica',
                bottomModal: 'cells-alert-box cells-bottom-modal-spherica',
                contact: 'cells-operation-swipe-list-spherica [id="__NAME__-0"] > div',
                deletedContactMsg: 'cells-bottom-modal-spherica cells-atom-message-spherica div.message p.message__text ',
                withoutContactsMsg: 'cells-operation-swipe-list-spherica div div p.message-text',
                greenToast: 'cells-bottom-modal-spherica'
            },

            requiredElements: ['inputSearch']
        });
    }

    async accessContact() {
        await this.waitForElementsExist(this.contactSelect);
        const element = await this.contactSelect.elements();
        await element.value[0].waitForDisplayed({timeout: config.wait.M});
        await this.tapElement(element.value[0]);
    }

    async swipeContact(product) {
        switch (product.toLowerCase()) {
            case 'contact':
                await this.contactElement.waitForDisplayed({timeout: config.wait.XXL});
                await this.contactElement.waitForAnimation({timeout: config.wait.L});
                await this.contactElement.waitForEnabled({timeout: config.wait.L});
                await this.contactElement.execute({script: () => this.setAttribute('open', '')});
                await this.contactDelete.waitForDisplayed({timeout: config.wait.L});
                await this.contactDelete.waitForAnimation({timeout: config.wait.L});
                await this.contactDelete.waitForEnabled({timeout: config.wait.L});
                await this.contactDelete.click();
                break;
            case 'product':
                await this.producElement.waitForDisplayed({timeout: config.wait.XXL});
                await this.producElement.waitForAnimation({timeout: config.wait.L});
                await this.producElement.waitForEnabled({timeout: config.wait.L});
                await this.producElement.execute({script: () => this.setAttribute('open', '')});
                await this.producDelete.waitForDisplayed({timeout: config.wait.M});
                await this.producDelete.waitForAnimation({timeout: config.wait.M});
                await this.producDelete.waitForEnabled({timeout: config.wait.M});
                await this.producDelete.click();
                break;
            default:
                throw new Error(`Your product ${product} its not defined`);
        }
    }

    async searchContact() {
        await this.inputSearch.click();
        await this.inputSearch.setValue({value: prueba['test']});
    }

    async searchContactsaved(contact) {
        await this.inputSearch.click();
        await this.inputSearch.setValue({value: contact});
    }

    async searchContactValidation() {
        await this.swipeList.waitForDisplayed({timeout: config.wait.M});
    }

    async confirmAction(isConfirmed = true) {
        await this.confirmDialog({
            timeout: config.wait.XL,
            isConfirmed: isConfirmed
        });
    }

    async contactRemoval(contactInAgenda) {
        await this.searchContactsaved(contactInAgenda);
        await this.swipeContact('contact');
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'delete':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON}, {forceScroll: true});
                break;
            case 'cancel':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CANCEL_BUTTON}, {forceScroll: true});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }

    async selectContactWithAccount(alias){
        const selectContact = this.contact.specifySelector({placeholder: '__NAME__', value: alias});
        await this.tapElement(selectContact);
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input search':
                await this.inputSearch.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'swipe list':
                await this.swipeList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contact element':
                await this.contactElement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bottom modal':
                await this.bottomModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'green toast':
                await this.greenToast.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'removal message':
                await this.deletedContactMsg.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message without contacts':
                await this.withoutContactsMsg.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new ContactsAgenda();
