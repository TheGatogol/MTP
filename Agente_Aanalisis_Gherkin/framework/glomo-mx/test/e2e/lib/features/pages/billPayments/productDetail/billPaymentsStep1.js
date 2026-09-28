import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
//Components
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';
import GlomoAlertManagerSpherica from '../../../components/glomo-alert-manager-spherica';
@page()
class BillPaymentsStep1 extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-billPayments[state="active"]',
            elements: {

                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                title: '.blue-title-avatar.secondary-down .cells-avatar-item-list p.cells-avatar-item-list__main',
                productSelectorStep0: 'cells-step-product-selector-spherica',
                billPaymentsServiceSelectorStep1: 'cells-step-bill-payment-service-selector-spherica-mx',
                billPaymentsServiceModal: 'cells-modal-new-recipient-service-selector-spherica #modal',
                payNewServiceBtn: 'cells-step-bill-payment-service-selector-spherica-mx #stepContainer div:nth-child(1) button.action-no-service',
                modalInputSearchAll: 'cells-avatar-item-searcher-selector-spherica div.searcher cells-molecule-input-spherica #input',
                searchResult: 'cells-avatar-item-spherica[id="__SERVICE_ID__"]',
                inputBillNumber: 'cells-molecule-input-spherica #input[aria-label="Referencia"]',
                continueStep1: 'div.selectedOptionBox cells-st-button-spherica.full button',
                continueStep2: '#stepContainer div.full div.element-list-button__full cells-st-button-spherica button',

                //Service Detail
                agreementLabel: '#cellsAvatarItemSearcherSelector #resultsContainer div.service-info-item',
                cleanButton: '#cellsAvatarItemSearcherSelector #inputViewAll #btnSecondaryIcon',
                contactAvatarIcon: 'div.selectedOptionBox cells-avatar-item-spherica #contactAvatar',
                continueButton: 'cells-modal-new-recipient-service-selector-spherica div.selectedOptionBox cells-st-button.secondary button',
                helpButton: 'div.selectedOptionBox div.service-instructions cells-atom-icon-spherica',
                infoMessage: 'cells-modal-new-recipient-service-selector-spherica #cellsAvatarItemSearcherSelector #resultsContainer div.no-results-title-subtitle',
                otherServiceButton: 'div.selectedOptionBox cells-st-button-spherica.transparent button',
                serviceInstructions: 'cells-modal-new-recipient-service-selector-spherica div.service-instructions',
                storedService: '#swipe div cells-avatar-item-spherica',
                titleResults: '#cellsAvatarItemSearcherSelector div.titleResults',
                imageContainer: '#cellsAvatarItemSearcherSelector #resultsContainer img',
                exitModal: GlomoAlertManagerSpherica
            },
            requiredElements: ['header', 'billPaymentsServiceSelectorStep1']
        });
    }

    async accessToPayNewService() {
        await this.payNewServiceBtn.waitForClickable({timeout: config.wait.L});
        await this.payNewServiceBtn.click();
        await this.billPaymentsServiceModal.waitForDisplayed({timeout: config.wait.L});
    }

    async findServiceOnList(serviceName, id) {
        await this.modalInputSearchAll.waitForDisplayed({timeout: config.wait.L});
        await this.modalInputSearchAll.setValue({value: serviceName, slow: true});
        await (await this.searchResult.specifySelector({placeholder: '__SERVICE_ID__', value: id})
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async acceptBillNumber(billNumber) {
        await this.inputBillNumber.waitForDisplayed({timeout: config.wait.L});
        await this.inputBillNumber.setValue({value: billNumber, slow: true});
        await this.continueStep1.waitForClickable({timeout: config.wait.L});
        await this.continueStep1.click();
    }

    async accessToPayStoredService() {
        await this.storedService.waitForClickable({timeout: config.wait.L});
        await this.storedService.click();
        await this.billPaymentsServiceModal.waitForDisplayed({timeout: config.wait.L});
    }

    async continueStepOne() {
        await this.continueStep1.waitForClickable({timeout: config.wait.L});
        await this.continueStep1.click();
    }

    async accessToHelpReference() {
        await this.helpButton.waitForClickable({timeout: config.wait.L});
        await this.helpButton.click();
    }

    async addAgreement(reference) {
        await this.inputBillNumber.waitForDisplayed({timeout: config.wait.L});
        await this.inputBillNumber.setValue({value: reference});
        await this.continueStep1.waitForClickable({timeout: config.wait.L});
        await this.continueStep1.click();
    }

    async cleanSearch() {
        await this.cleanButton.waitForClickable({timeout: config.wait.L});
        await this.cleanButton.click();
    }

    async findService(service) {
        await this.modalInputSearchAll.waitForDisplayed({timeout: config.wait.L});
        await this.modalInputSearchAll.setValue({value: service});
    }

    async findAgreement(agreement) {
        await (await this.searchResult.specifySelector({placeholder: '__SERVICE_ID__', value: agreement})
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product selector step':
                await this.productSelectorStep0.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'service selector step':
                await this.billPaymentsServiceSelectorStep1.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'agreement label':
                await this.agreementLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contact avatar':
                await this.contactAvatarIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help icon':
                await this.helpButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image description':
                await this.imageContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'other service':
                await this.otherServiceButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'service instructions':
                await this.serviceInstructions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info message':
                await this.infoMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title results':
                await this.titleResults.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title modal':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.TITLE});
                break;
            case 'help icon modal':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.PARAGRAPH_ICON});
                break;
            case 'accept button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            case 'info reference':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.DESCRIPTION});
                break;
            case 'amount':
                await this.continueStep2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button disabled':
                await this.continueStep2.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'retry button':
                await this.exitModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitModal.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new BillPaymentsStep1();
