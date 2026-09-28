import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class IdentificationPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-updateNationalId[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                //fisrt step
                scannIdentification: 'glomo-step-add-national-id  #step > div.full > div:nth-child(20) > cells-st-button > button',
                takeSelfie: 'glomo-step-add-national-id  #step > div.full > div:nth-child(46) > cells-st-button > button',
                takeSelfieAfterId: 'glomo-step-add-national-id  #step > div.full > div:nth-child(47) > cells-st-button > button',
                idPictureFront: 'glomo-step-add-national-id #step > div.full > div:nth-child(21) > cells-st-button > button',
                idPictureBack: 'glomo-step-add-national-id #step > div.full > div:nth-child(27) > cells-st-button > button',
                idSelfie: 'glomo-step-add-national-id #undefined div > div > div.body > p',
                noticePrivacy: 'glomo-step-add-national-id #step > div.full > div:nth-child(60) > cells-st-button > button',
                checkBtn: 'glomo-step-add-national-id #checkButton #checkbox',
                continueButtonFirstStep: 'glomo-step-add-national-id #continueBtn > button',
                //first step collapsed
                changePhotosButton: 'glomo-step-add-national-id #step #changeBtn > button',
                filesScanned: 'glomo-step-add-national-id #step > div.filled > glomo-list-select',
                //second step
                helpButton: 'glomo-step-check-national-id #step #helpIcon',
                inputOcr: 'glomo-step-check-national-id #step > div:nth-child(1) > cells-molecule-input:nth-child(6) #input',
                inputKey: 'glomo-step-check-national-id #step > div:nth-child(1) > cells-molecule-input:nth-child(10) #input',
                inputNumber: 'glomo-step-check-national-id #step > div:nth-child(1) > cells-molecule-input:nth-child(14) #input',
                inputValidity: 'glomo-step-check-national-id #step > div:nth-child(1) > cells-molecule-input:nth-child(18) #input',
                continueButtonSecondStep: 'glomo-step-check-national-id #continueBtn > button',
                confirmSummaryButton: 'cells-summary-view #collapser > cells-st-button > button ',
                secondStepIconMessage: 'glomo-step-check-national-id #step > div:nth-child(1) > div:nth-child(23) > cells-icon-message',
                //second step collapsed
                changeInputsButton: 'glomo-step-check-national-id #step #changeBtn > button',
                validityData: 'glomo-step-check-national-id #step > div.filled > p:nth-child(3)',
                ocrData: 'glomo-step-check-national-id #step > div.filled > p:nth-child(4)',
                //help modal
                titleModal: 'cells-modal-help cells-alert-box #modal > h1',
                textModal: 'cells-modal-help cells-alert-box > cells-text-description:nth-child(2) p',
                acceptButtonModal: 'cells-modal-help cells-alert-box #acceptButton'
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async closeOperative() {
        await this.header.actionRight();
        await this.dialogOperations.waitForDisplayed();
        await this.dialogOperations.confirmDialog();
    }

    async scannINE() {
        await this.scannIdentification.waitForDisplayed({timeout: config.wait.M});
        await this.scannIdentification.click();
    }

    async closeRecomendationsModal() {
        await this.dialogOperations.waitForDisplayed({timeout: config.wait.XXL});
        await this.dialogOperations.confirmDialog();
    }

    async scannSelfie() {
        await this.takeSelfieAfterId.waitForDisplayed({timeout: config.wait.M});
        await this.takeSelfieAfterId.click();
    }

    async acceptPrivacyNotice() {
        await this.checkBtn.waitForDisplayed({timeout: config.wait.M});
        await this.checkBtn.click();
    }

    async openPrivacyNotice() {
        await this.noticePrivacy.waitForDisplayed({timeout: config.wait.M});
        await this.noticePrivacy.click();
    }

    async continueFirstStep() {
        await this.continueButtonFirstStep.waitForClickable({timeout: config.wait.M});
        await this.continueButtonFirstStep.click();
        await this.isRequiredToSign();
    }

    async continueSecondStep() {
        await this.continueButtonSecondStep.waitForDisplayed({timeout: config.wait.XL});
        await this.continueButtonSecondStep.click();
    }

    async isRequiredToSign(otp = '11111111') {
        await this.scannIdentification.waitForDisplayed({timeout: config.wait.M});
        await this.continueButtonSecondStep.click();
        await this.fillOtp(otp);
    }

    async completeProcess() {
        await this.confirmSummaryButton.waitForDisplayed({timeout: config.wait.M});
        await this.confirmSummaryButton.click();
    }

    async exitAndConfirm() {
        await this.dialogOperations.confirmDialog();
        await this.header.waitForDisplayed();
        await this.header.actionRight();
        await this.dialogOperations.waitForDisplayed();
        await this.dialogOperations.confirmDialog();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'scan identification':
                await this.scannIdentification.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'take selfie':
                await this.takeSelfie.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'take selfie after id':
                await this.takeSelfieAfterId.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'notice privacy':
                await this.noticePrivacy.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'check button':
                await this.checkBtn.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'continue button first step':
                await this.continueButtonFirstStep.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'id picture front':
                await this.idPictureFront.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'id picture back':
                await this.idPictureBack.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'id selfie':
                await this.idSelfie.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'help button':
                await this.helpButton.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'input ocr':
                await this.inputOcr.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'input key':
                await this.inputKey.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'input number':
                await this.inputNumber.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'input validity':
                await this.inputValidity.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'second step icon message':
                await this.secondStepIconMessage.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'continue button second step':
                await this.continueButtonSecondStep.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'change photos button':
                await this.changePhotosButton.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'files scanned':
                await this.filesScanned.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'change inputs button':
                await this.changeInputsButton.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'validity data':
                await this.validityData.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'ocr data':
                await this.ocrData.waitForDisplayed({timeout: config.wait.XL});
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    key: item,
                    args: arguments[0]
                });
        }
    }
}

export default new IdentificationPage();
