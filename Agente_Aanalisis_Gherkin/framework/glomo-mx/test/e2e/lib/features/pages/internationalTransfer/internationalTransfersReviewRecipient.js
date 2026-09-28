import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsModalSelector from '../../components/cells-modal-selector';

@page()
class InternationalTransfersReviewRecipient extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'internationalTransfersReviewRecipient',
            root: '#cells-template-internationalTransfersReviewRecipient[state="active"]',
            elements: {
                addresseeName: '#addresseeName #input',
                addAddresseeAdress: '#addresseeAdress #input',
                addresseeCity: '#addresseeCity #input',
                addresseeCountry: '#addresseeCountry #input',
                relationshipSelect: '#relationship-transfer-input #documentTypeSelector',
                relationshipOptions: {
                    component: {
                        ComponentClass: CellsModalSelector
                    }
                },
                confirmButtons: 'cells-confirm-buttons #primaryBtn',
            },
            requiredElements: [
                'addresseeName',
                'addAddresseeAdress',
            ]
        });
    }

    async addNameBeneficiary() {
        const existInputNameBeneficiary = await this.addresseeName.waitForExist({timeout: config.wait.M, failOnError: false});
        if (existInputNameBeneficiary) {
            await this.addresseeName.scrollIntoView({block: 'start'});
            await this.addresseeName.waitForClickable({timeout: config.wait.L});
            await this._fillInputField({element: this.addresseeName, value: 'Luis Gerardo Cedillo Monroy'});
        }
    }

    async addDirectionBeneficiary() {
        await this.addAddresseeAdress.waitForClickable({timeout: config.wait.L});
        await this._fillInputField({element: this.addAddresseeAdress, value: 'Calle 44, Col. Villas'});
    }

    async addDirectionBeneficiaryinvalid() {
        await this.addAddresseeAdress.waitForClickable({timeout: config.wait.L});
        await this._fillInputField({element: this.addAddresseeAdress, value: 'Col. Villas'});
    }

    async addTownBeneficiary() {
        await this.addresseeCity.waitForClickable({timeout: config.wait.L});
        await this._fillInputField({element: this.addresseeCity, value: 'Mexico'});
    }

    async addCoutnryBeneficiary() {
        await this.addresseeCountry.waitForClickable({timeout: config.wait.L});
        await this._fillInputField({element: this.addresseeCountry, value:'Mexico'});
    }

    async selectRelationshipTransfer() {
        await this.relationshipSelect.waitForClickable({timeout: config.wait.L});
        await this.relationshipSelect.click();
        await this.relationshipOptions.waitForDisplayed({timeout: config.wait.L});
        await this.relationshipOptions.selectItem('101');
    }

    async aceptedData() {
        await this.confirmButtons.waitForClickable({timeout: config.wait.L});
        await this.confirmButtons.click();
        await this.fillOtp('12345678');
    }

    async addBeneficiaryInformationValid(){
        await this.addNameBeneficiary();
        await this.addDirectionBeneficiary();
        await this.addTownBeneficiary();
        await this.addCoutnryBeneficiary();
        await this.selectRelationshipTransfer();
        await this.aceptedData();
    }

    async addBeneficiaryInformationInvalid(){
        await this.addNameBeneficiary();
        await this.addDirectionBeneficiaryinvalid();
        await this.addTownBeneficiary();
        await this.addCoutnryBeneficiary();
        await this.selectRelationshipTransfer();
        await this.aceptedData();
    }

    async _fillInputField({element, value = ''}) {
        await element.waitForDisplayed({timeout: config.wait.M});
        await element.setValue({value: value, slow: true});
    }
}

export default new InternationalTransfersReviewRecipient();
