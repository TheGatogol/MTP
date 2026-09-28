import {Commands, page, ElementValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
//Error message
const UNKNOWN_ACCESS_ERROR = (option) => `[ERR] [UPLOAD FILE] The function ${option} is unknown. Cannot be accessed.`;

@page('uploadFile')
class UploadFile extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-updateAddressUploadFilesPage[state="active"]',
            elements: {
                cancelX: 'cells-molecule-header #btnRight',
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                //Voucher Info Page
                descriptionUploadFile: 'cells-text-description:nth-child(4)',
                inputSelectTypeFile: 'cells-select-modal #documentTypeSelector',
                optionSelectTypeFile: 'cells-middle-modal#modal li[id="006"]',
                optionElectorCredential: 'cells-middle-modal#modal li[id="026"]',
                inputOCR: 'glomo-form-text-input #ocrId #input',
                inputValidity: 'glomo-form-text-input #validityId #input',
                buttonModalOCR: 'cells-text-description.title-gap-bottom-none.text-description-height p cells-st-button button iron-icon',
                linkToUploadFile: 'cells-confirm-buttons.confirm-buttons-margin-top #primaryBtn',
                linkToUploadFileReverse: 'cells-confirm-buttons.confirm-buttons-margin-left #primaryBtn',
                descriptionNoticePrivacy: 'cells-text-description:nth-child(16)',
                linkNoticePrivacy: 'cells-list-file.body-size-customize div > div > div > p',
                infoMessage: 'cells-icon-message.h-gutter-top',
                acceptButton: 'cells-confirm-buttons:nth-child(19) #primaryBtn',
                inputDate: 'glomo-date-input #dateInput',
                voucherUploaded: 'cells-list-file:nth-child(14) div',
                outDateErrorMessage: 'glomo-date-input cells-icon-message.inline.error-message',
                validityErrorMessage: 'glomo-form-text-input #validityId div:nth-child(5) > cells-icon-message',
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'description to upload file':
                await this.descriptionUploadFile.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input to select type file':
                await this.inputSelectTypeFile.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input date':
                await this.inputDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input ocr':
                await this.inputOCR.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input validity':
                await this.inputValidity.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help ocr button':
                await this.buttonModalOCR.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link to upload file':
                await this.linkToUploadFile.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description notice of privacy':
                await this.descriptionNoticePrivacy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link notice of privacy':
                await this.linkNoticePrivacy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info message':
                await this.infoMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.acceptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title choose or take a picture':
                await this.titleChooseOrTakeAPicture.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'voucher uploaded':
                await this.voucherUploaded.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error mesage':
                await this.outDateErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'validity error message':
                await this.validityErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ElementValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async access({functionality}) {
        switch (functionality.toLowerCase()) {
            case 'options photo':
                await this.linkToUploadFile.waitForAnimation({timeout: config.wait.M});
                await this.linkToUploadFile.click();
                await this.dialogOperations.confirmDialog();
                break;
            case 'options photo reverse':
                await this.linkToUploadFileReverse.waitForAnimation({timeout: config.wait.M});
                await this.linkToUploadFileReverse.click();
                break;
            case 'summary page':
                await this.acceptButton.waitForAnimation({timeout: config.wait.M});
                await Commands.pause({time: config.wait.M});
                await this.acceptButton.waitForClickable({timeout: config.wait.M});
                await this.acceptButton.click();
                break;
            default:
                throw new Error(UNKNOWN_ACCESS_ERROR(functionality));
        }
    }

    async seesUploadFileInfoModal() {
        await this.linkToUploadFile.waitForClickable({timeout: config.wait.M});
        await this.linkToUploadFile.click({timeout: config.wait.M});
    }

    async attachPDF() {
        await this.linkToUploadFile.waitForClickable({timeout: config.wait.M});
        await this.linkToUploadFile.click();
        await this.dialogOperations.confirmDialog({timeout: config.wait.M});
    }

    async selectModalOCR() {
        await this.buttonModalOCR.waitForClickable({timeout: config.wait.M});
        await this.buttonModalOCR.click();
    }

    async fillWrongValidityDate() {
        await this.inputValidity.waitForClickable({timeout: config.wait.M});
        await this.inputValidity.click();
        await this._fillInputField({element: this.inputValidity, value: global.user.data.numOCR});
        await this.inputOCR.click();
    }

    async fillInformationToElectorCredential() {
        await this.inputValidity.waitForClickable({timeout: config.wait.M});
        await this.inputOCR.waitForClickable({timeout: config.wait.M});
        await this.inputValidity.click();
        await this._fillInputField({element: this.inputValidity, value: global.user.data.validity});
        await this.inputOCR.click();
        await this._fillInputField({element: this.inputOCR, value: global.user.data.numOCR});
    }

    async _fillInputField({element, value = ''}) {
        await element.waitForDisplayed({timeout: config.wait.M});
        await element.setValue({value: value});
    }

    async seesNoticeOfPrivacyModal() {
        await this.linkNoticePrivacy.waitForClickable({timeout: config.wait.M});
        await this.linkNoticePrivacy.click({timeout: config.wait.M});
    }

    async selectProof({proof}) {
        await this.inputSelectTypeFile.waitForClickable({timeout: config.wait.M});
        await this.inputSelectTypeFile.click({timeout: config.wait.M});

        switch (proof.toLowerCase()) {
            case 'elector credential':
                await this.optionElectorCredential.waitForClickable({timeout: config.wait.M});
                await this.optionElectorCredential.click();
                break;
            case 'electric bill option':
                await this.optionSelectTypeFile.waitForClickable({timeout: config.wait.M});
                await this.optionSelectTypeFile.click();
                break;
            default:
                throw new Error(UNKNOWN_ACCESS_ERROR(proof));
        }
    }

    async addDate({typeDate}) {
        const DATE = new Date();
        const INVALID_DATE = '2022-03-26';
        switch (typeDate.toLowerCase()) {
            case 'valid':
                await this._fillInputField({element: this.inputDate, value: DATE.toISOString().split('T')[0]});
                break;
            case 'an invalid':
                await this._fillInputField({element: this.inputDate, value: INVALID_DATE});
                break;
            default:
                throw new Error(`Argument ${typeDate} is not supported`);
        }
    }

    async goBack() {
        await this.cancelX.waitForClickable({timeout: config.wait.M});
        await this.cancelX.click();
    }
}

export default new UploadFile();
