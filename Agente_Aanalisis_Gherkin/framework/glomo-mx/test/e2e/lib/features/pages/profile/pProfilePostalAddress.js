import CellsMoleculeHeader from '../../components/cells-molecule-header';
import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ElementValidationKeyNotFound} from '@csqe/radish';

//Error message
const UNKNOWN_ACCESS_ERROR = (option) => `[ERR] [SIDEBAR] The function ${option} is unknown. Cannot be accessed.`;

@page('profilePostalAddress')
class ProfilePostalAddress extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-updateAddressStepInputPage[state="active"]',
            elements: {
                cancelX: 'cells-molecule-header #btnRight',
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                //Form
                inputAddressStreet: 'cells-step-input-address #address #input',
                inputAddressNumExt: 'cells-step-input-address #outNum #input',
                inputAddressNumInt: 'cells-step-input-address #inNum #input',
                inputAddressPC: '[name="postalCode"] #input',
                inputAddressColony: 'cells-step-input-address #inputSuburb #documentTypeSelector',
                optionColony: 'cells-middle-modal#modal li[id="07083"]',
                inputAddressCity: 'cells-step-input-address #city div.field-icons-wrapper',
                inputAddressState: 'cells-step-input-address #state div.field-icons-wrapper',
                inputAddressCountry: 'cells-step-input-address #country div.field-icons-wrapper',
                inputContinueButton: '#stepContainer > div.full > div.button-container > cells-st-button > button',
                errorMessage: 'cells-step-input-address #postalCode div:nth-child(5)',
                //Voucher
                headerChoseOrTakePicture: 'cells-molecule-header #titleZone > span',
                exitButton: 'cells-molecule-header #btnRight',
                linkToChangeAddress: 'cells-step-input-address #stepContainer #changeBtn > button',
                informationText: 'cells-step-link-list #stepContainer > div.full > p',
                optionChooseOrTakePicture: 'cells-step-link-list #stepContainer > div.full > div:nth-child(4)',
                optionToAttachPDF: 'cells-step-link-list #stepContainer > div.full > div:nth-child(5)',
                //Resume Page - Last step
                resumeTitles: 'cells-step-input-address #stepContainer div > div > h2',
                resumeVoucherInfo: 'cells-step-link-list #stepContainer > div.filled > cells-link-list .content',
                resumeAddressInfo: 'cells-step-input-address #stepContainer > div.filled',
                linkChangeAddress: 'cells-step-input-address #stepContainer #changeBtn > button',
                linkChangeVoucher: 'cells-step-link-list #stepContainer #changeBtn > button'
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'input address street':
                await this.inputAddressStreet.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input address num ext':
                await this.inputAddressNumExt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input address num int':
                await this.inputAddressNumInt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input address pc':
                await this.inputAddressPC.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input address city':
                await this.inputAddressCity.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input address state':
                await this.inputAddressState.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input address country':
                await this.inputAddressCountry.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input address continue button':
                await this.inputContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header':
                await this.headerChoseOrTakePicture.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information text':
                await this.informationText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'option choose or take picture':
                await this.optionChooseOrTakePicture.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'option to attach pdf':
                await this.optionToAttachPDF.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error message':
                await this.errorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tittles':
                await this.resumeTitles.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address info':
                await this.resumeAddressInfo.waitForAnimation({timeout: config.wait.M});
                await this.resumeAddressInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'voucher info':
                await this.resumeVoucherInfo.waitForAnimation({timeout: config.wait.M});
                await this.resumeVoucherInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link to change address':
                await this.linkChangeAddress.waitForAnimation({timeout: config.wait.M});
                await this.linkChangeAddress.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link to change voucher':
                await this.linkChangeVoucher.waitForAnimation({timeout: config.wait.M});
                await this.linkChangeVoucher.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ElementValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goChangeAddress() {
        await this.linkToChangeAddress.waitForClickable({timeout: config.wait.M});
        await this.linkToChangeAddress.click();
    }

    async insertStreet() {
        await this.inputAddressStreet.waitForClickable({timeout: config.wait.M});
        await this.inputAddressStreet.click();
        await this._fillInputField({element: this.inputAddressStreet, value: global.user.data.street});
    }

    async insertNewStreet() {
        await this.inputAddressStreet.waitForClickable({timeout: config.wait.M});
        await this.inputAddressStreet.click();
        await this._fillInputField({element: this.inputAddressStreet, value: global.user.data.newStreet});
    }

    async insertNumExt() {
        await this.inputAddressNumExt.waitForClickable({timeout: config.wait.M});
        await this.inputAddressNumExt.click();
        await this._fillInputField({element: this.inputAddressNumExt, value: global.user.data.numExt});
    }

    async insertNumInt() {
        await this.inputAddressNumInt.waitForClickable({timeout: config.wait.M});
        await this.inputAddressNumInt.click();
        await this._fillInputField({element: this.inputAddressNumInt, value: global.user.data.numInt});
    }

    async insertPC() {
        await this.inputAddressPC.waitForClickable({timeout: config.wait.M});
        await this.inputAddressPC.click();
        await this._fillInputField({element: this.inputAddressPC, value: global.user.data.PC});
    }

    async insertWrongPC() {
        await this.inputAddressPC.waitForClickable({timeout: config.wait.M});
        await this.inputAddressPC.click();
        await this._fillInputField({element: this.inputAddressPC, value: global.user.data.wrongPC});
    }

    async insertColony() {
        await this.inputAddressColony.waitForClickable({timeout: config.wait.M});
        await this.inputAddressColony.click();
        await this.optionColony.waitForClickable({timeout: config.wait.M});
        await this.optionColony.click();
    }

    async sendFormInformation() {
        await this.inputContinueButton.waitForClickable({timeout: config.wait.M});
        await this.inputContinueButton.click();
    }

    async addInformation() {
        await this.insertStreet({timeout: config.wait.M});
        await this.insertNumExt({timeout: config.wait.M});
        await this.insertNumInt({timeout: config.wait.M});
        await this.insertPC({timeout: config.wait.M});
        await this.insertColony({timeout: config.wait.M});
    }

    async addWrongPC() {
        await this.insertWrongPC({timeout: config.wait.M});
        await this.insertStreet({timeout: config.wait.M});
    }

    async _fillInputField({element, value = ''}) {
        await element.waitForDisplayed({timeout: config.wait.M});
        await element.setValue({value: value});
    }

    async access({functionality}) {
        switch (functionality.toLowerCase()) {
            case 'choose or take photo':
                await this.optionChooseOrTakePicture.waitForAnimation({timeout: config.wait.M});
                await this.optionChooseOrTakePicture.click();
                break;
            case 'attach pdf':
                await this.optionToAttachPDF.waitForAnimation({timeout: config.wait.M});
                await this.optionToAttachPDF.click();
                break;
            default:
                throw new Error(UNKNOWN_ACCESS_ERROR(functionality));
        }
    }

    async goBack() {
        await this.cancelX.waitForClickable({timeout: config.wait.M});
        await this.cancelX.click();
    }
}

export default new ProfilePostalAddress();
