import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
@page()
class MposPurchase extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-mposPurchase[state="active"]',
            elements: {
                mpos:'[data-tag-name="bbva-feature-mpos-purchase-mx"]',
                continueButton:'.modal-footer [text="Continuar"]',
                continueButtonAddress:'#continue',
                confirmButton:'[data-tag-name="bbva-feature-mpos-purchase-mx-confirmation-button"] #confirmation',
                deleteOtherAddress: '.other-address-input [data-tag-name="bbva-feature-mpos-purchase-mx-icons"] [icon="spherica:trash"]',
                editOtherAddressButton:'.other-address-input [data-tag-name="bbva-feature-mpos-purchase-mx-icons"] [icon="spherica:edit"]',
                otherCommissions: '[data-tag-name="bbva-feature-mpos-purchase-mx-list-bullets"] [data-tag-name="bbva-type-link"]:nth-child(9)',
                mainAddressOption:'.main-address-input',
                consultConditions:'bbva-notification-message bbva-type-link',
                addOtherAddressOption:'[data-selector="bbva-link-add-address"]',
                street:'[aria-label="Calle"]',
                numberAddress:'[aria-label="N.° exterior"]',
                zipCode:'[aria-label="Código postal"]',
                neighborhood:'[aria-label="Colonia"]',
                state: '[aria-label="Estado"]',
                municipality: '[aria-label="Municipio"]',
                saveNewAddress: 'bbva-aggregation-configurable-form-field-set-spherica [text="Guardar"]',
                anotherTimeButton: '[class="transition-container"] [class="modal-footer "] [class="slot-footer"] [class="footer-button link"]',
                closeButton: '[text="Comprar lector de tarjetas"] [class=" button-2 "] [data-id="iconsRight"] [class="icon"]#btn-close',
                headermoreInfoReaderModal: '[data-tag-name="bbva-feature-mpos-purchase-mx-details"] #helpModalHeader [class=" button-1 "] #heading',
                benefitsButton:'[data-tag-name="bbva-type-text"][text="Beneficios"]',
                commissionsButton:'[data-tag-name="bbva-expandable-accordion"] [data-tag-name="bbva-type-text"][text="Consideraciones"]',
                specificationsButton:'#specifications',
                commisionsTitle:'#helpModalCommissions .container-title',
                commisionsInfo:'#helpModalCommissions [data-tag-name="bbva-feature-mpos-purchase-mx-list-bullets"]',
                commisionsMsiDescription:'#helpModalCommissions [data-tag-name="bbva-feature-mpos-purchase-mx-panel-info"]',
                accountItem: '#listAccount .accounts',
                successHeader: 'bbva-feature-mpos-purchase-mx-success bbva-help-modal #helpModalHeader #text',
                successDescription: 'bbva-feature-mpos-purchase-mx-panel-info .content-panel-without-padding .container-title[text="Compra exitosa"]',
                elementSuccess: '#listSimpleSuccess #listDescription',
                adressItems:{
                    properties:{
                        root:'[class="message-toast"] [type="success"][data-tag-name="bbva-notification-toast"]'
                    },
                    addressMessageSuccess: '[text="Dirección añadida."][data-tag-name="bbva-type-text"]',
                    addressMessageModified: '[text="Dirección modificada"][data-tag-name="bbva-type-text"]',
                    addressMessageDelete: '[text="Dirección eliminada."][data-tag-name="bbva-type-text"]',
                },
                accountList:'.all-accounts-container',
                closeWindow: '[class="help-modal"] [class="modal-footer "] [class="slot-footer"] [class="footer-button"][text="Salir"]',
                headerLeave: '#helpModalHeader [class=" button-1 "] [class="header "] #heading [data-tag-name="bbva-type-text"] [class="text lines"]',
                titleLeave: '[data-tag-name="bbva-feature-mpos-purchase-mx-panel-info"] [text="¿Quieres salir del proceso de compra?"]',
                linkMoreDetail: 'bbva-help-modal bbva-feature-mpos-purchase-mx-list-bullets bbva-type-link:nth-child(5)',
                headerSpecifications: '#specifications [data-tag-name="bbva-type-text"][text="Especificaciones técnicas"]',
                textSpecifications: '#specifications[data-tag-name="bbva-expandable-accordion"] [slot="content"] [data-tag-name="bbva-feature-mpos-purchase-mx-list-bullets"]',
                stepOne:{
                    properties:{
                        root:'#step-1'
                    },
                    titleAddressSend: '#headingLabel',
                    addAddressButton: 'div.content bbva-feature-mpos-purchase-mx-address bbva-form-container bbva-form-control-input.other-address-input',
                    editAddress:'#editButton',
                    modifyAddressButton:'bbva-button-default#editIcon',
                    showDataAddress:'bbva-type-link#linkToggleAddress',
                    otherAddressButton:'bbva-form-control-input.other-address-input',
                    addressAdd:'.other-address-input bbva-type-link',
                    addressConditions:{
                        properties:{  root:'bbva-feature-mpos-purchase-mx-address' },
                        linkConditions: 'bbva-notification-message bbva-type-link',
                        headerConditions: 'bbva-help-modal #helpModalHeader header',
                        titleConditions: 'bbva-help-modal bbva-feature-mpos-purchase-mx-panel-info bbva-type-text.container-title',
                        textInfoConditions: 'bbva-help-modal bbva-feature-mpos-purchase-mx-panel-info bbva-type-text.container-text-no-padding',
                        closeTermsAndConditionButton:'bbva-feature-mpos-purchase-mx-conditions #helpModalHeader #btn-close',
                        editToast: '[data-tag-name="bbva-notification-toast"][show]',
                    },
                    buttonKeepAddress: 'bbva-feature-mpos-purchase-mx-delete-address bbva-help-modal bbva-button-default.footer-button.link',
                    cancelDeleteOtherAddressModal:'.modal-main .footer-button.link',
                    deleteOtherAddressModal:'.modal-main [text="Eliminar"]',
                },
                stepTwo:{
                    properties:{
                        root:'#step-2'
                    },
                    headerAllAccountsSection:'#helpModalHeader',
                    closeAllAccountsButton:'#helpModalHeader #btn-close',
                    step2Accounts:'[data-tag-name="bbva-feature-mpos-purchase-mx-accounts"]',
                    seeAllAccountsButton:'.options-right  bbva-type-link',
                    insufficientBalance:'[data-tag-name="bbva-feature-mpos-purchase-mx-accounts"] [data-tag-name="bbva-notification-help"]',
                    chooseAccountText:'[data-tag-name="bbva-feature-mpos-purchase-mx-accounts"] .add-hzont-margin',
                },
            },
            requiredElements: ['mpos']
        });
    }

    async continueMpos() {
        await(await this.continueButton.waitForDisplayed({ timeout: config.wait.M })).click({useActions: true});
    }

    async seeAllAccounts(){
        await(await this.stepTwo.seeAllAccountsButton.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async closeAllAccounts(){
        await(await this.stepTwo.closeAllAccountsButton.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async consultConditionsOption(){
        await(await this.consultConditions.waitForDisplayed({ timeout: config.wait.M })).click();
        await(await this.stepOne.addressConditions.closeTermsAndConditionButton.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async continueAddress(){
        await this.stepOne.showDataAddress.waitForDisplayed({timeout: config.wait.M});
        await this.stepOne.showDataAddress.waitForAnimation({timeout: config.wait.M});
        await this.continueButtonAddress.scrollIntoView({block: 'end'});
        await(await this.continueButtonAddress.waitForDisplayed({ timeout: config.wait.M })).click({useActions: true});

    }

    async confirmProcess(){
        await this.confirmButton.waitForDisplayed({timeout: config.wait.M});
        await this.confirmButton.scrollIntoView({block: 'center'});
        await (await this.confirmButton.waitForClickable({timeout: config.wait.M})).click({useActions: true});
    }

    async mainAddress(){
        await(await this.mainAddressOption.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async closeMposSection(){
        await(await this.closeButton.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async closeMpos(){
        await(await this.closeWindow.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async anotherTimeOption(){
        await (await (await this.anotherTimeButton.elements()).value[0].waitForClickable({timeout: config.wait.M})).click();
    }

    async otherAddress(){
        await(await this.stepOne.otherAddressButton.waitForDisplayed({ timeout: config.wait.M })).click();
        await(await this.addOtherAddressOption.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async saveAddress(){
        await(await this.saveNewAddress.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async seeMainAddressInformation(){
        await(await this.stepOne.showDataAddress.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async editMainAddressInformation(){
        await this.waitForElementsExist(this.stepOne.editAddress);
        const editLink = (await this.stepOne.editAddress.elements()).value[0];
        await (await (await editLink.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async modifyAddressButton(){
        await(await this.stepOne.modifyAddressButton.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async editNumerAddress(number){
        await(await this.numberAddress.waitForDisplayed({ timeout: config.wait.M })).setValue({value:number});
        await this.saveAddress();
    }

    async deleteAddress(){
        await(await this.deleteOtherAddress.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async editOtherAddress(){
        await(await this.editOtherAddressButton.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async addAddress(){
        await(await this.street.waitForDisplayed({ timeout: config.wait.M })).setValue({value:user.address.street});
        await(await this.numberAddress.waitForDisplayed({ timeout: config.wait.M })).setValue({value:user.address.externalNumber});
        await(await this.zipCode.waitForDisplayed({ timeout: config.wait.M })).setValue({value:user.address.postalCode});
        await(await this.neighborhood.waitForDisplayed({ timeout: config.wait.M })).setValue({value:user.address.neighborhood});
        await(await this.state.waitForDisplayed({ timeout: config.wait.M })).setValue({value:user.address.state});
        await(await this.municipality.waitForDisplayed({ timeout: config.wait.M })).setValue({value:user.address.municipality});
    }

    async selectAccount(){
        await (await this.accountItem.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
    }

    async allOptions(){
        await this.benefitsButton.waitForDisplayed({timeout: config.wait.M});
        await (await this.benefitsButton.waitForAnimation({timeout: config.wait.S})).click({useActions: true});
        await this.benefitsButton.waitForAnimation({timeout: config.wait.S});
        await this.commissionsButton.scrollIntoView({block: 'nearest'});
        await (await this.commissionsButton.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
        await this.commissionsButton.waitForAnimation({timeout: config.wait.S});
        await this.specificationsButton.scrollIntoView({block: 'end'});
        await (await this.specificationsButton.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
    }

    async confirmDelete(){
        await(await this.stepOne.deleteOtherAddressModal.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async cancelDelete(){
        await(await this.stepOne.cancelDeleteOtherAddressModal.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async accessMoreDetails(){
        await(await this.linkMoreDetail.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async accessCommissions(){
        await(await this.otherCommissions.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async changeOtherAddress(){
        await this.editMainAddressInformation();
        await this.otherAddress();
        await this.addAddress();
        await this.saveAddress();
        await this.editOtherAddress();
        await this.editNumerAddress('23');
    }

    async _screenValidation({ item, value }) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.mpos.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'success header':
                await this.successHeader.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'success description':
                await this.successDescription.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'element success':
                await this.elementSuccess.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header more info reader modal':
                await this.headermoreInfoReaderModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'benefits button':
                await this.benefitsButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'commissions button':
                await this.commissionsButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'specifications button':
                await this.specificationsButton.scrollIntoView();
                await this.specificationsButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'commisions title':
                await this.commisionsTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'commisions info':
                await this.commisionsInfo.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'commisions msi description':
                await this.commisionsMsiDescription.scrollIntoView();
                await this.commisionsMsiDescription.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'other address button':
                await this.stepOne.otherAddressButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'address message success':
                await this.adressItems.addressMessageSuccess.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'address message modified':
                await this.adressItems.addressMessageModified.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'address message delete':
                await this.adressItems.addressMessageDelete.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button keep address':
                await this.stepOne.buttonKeepAddress.waitForDisplayed({ time: config.wait.M });
                break;
            case 'title address send':
                await this.stepOne.titleAddressSend.waitForDisplayed({ time: config.wait.M });
                break;
            case 'link conditions':
                await this.stepOne.addressConditions.linkConditions.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header conditions':
                await this.stepOne.addressConditions.headerConditions.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title conditions':
                await this.stepOne.addressConditions.titleConditions.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text info conditions':
                await this.stepOne.addressConditions.textInfoConditions.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'edit other address icon':
                await this.editOtherAddressButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'delete other address icon':
                await this.deleteOtherAddress.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'continue address button':
                await this.continueButtonAddress.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header accounts':
                await this.stepTwo.headerAllAccountsSection.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'close step twoo button':
                await this.stepTwo.closeAllAccountsButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'accounts list':
                await this.accountList.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'step twoo accounts':
                await this.stepTwo.step2Accounts.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'close button':
                await this.closeButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'see all accounts button':
                await this.stepTwo.seeAllAccountsButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'insufficient balance':
                await this.stepTwo.insufficientBalance.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'choose the account text':
                await this.stepTwo.chooseAccountText.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'close window':
                await this.closeWindow.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header leave':
                await this.headerLeave.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title leave':
                await this.titleLeave.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header specifications':
                await this.headerSpecifications.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'info specifications':
                await this.textSpecifications.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'changed address toast':
                await this.stepOne.addressConditions.editToast.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }
}

export default new MposPurchase();
