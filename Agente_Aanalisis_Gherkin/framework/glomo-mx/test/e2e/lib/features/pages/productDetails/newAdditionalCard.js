import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

@page()
class NewAdditionalCardDetail extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-additionalCreditCardMainPage[state="active"]',
            elements: {
                title: 'bbva-feature-oc-additional-credit-card-mx #additionalModal bbva-help-modal #helpModalHeader',
                closeModal: '#multistep-modal .modal-header  #helpModalHeader [class=" button-1 "] [data-id="iconsRight"] #btn-close [class="circle "] [data-tag-name="bbva-type-icon"]',
                closeModalSpherica: '#multistep-modal .modal-header ',
                confirmCloseModal: '#exit [text="Salir"]',
                infoStep: {
                    infoACC: '.amount-position .label-position',
                    amountOffer: '.card-container [data-tag-name="bbva-type-amount"]',
                    benefitInfo: '.container [text="Beneficios"]',
                    interestedBtn: 'bbva-feature-oc-additional-credit-card-mx #additionalModal #additionalTdcContinue bbva-button-default',
                    changeBtn: '#step-0 .summary .card-container [data-tag-name="bbva-type-text"]',
                },
                dataStep: {
                    properties: {root: '#step-1 additional-info-step'},
                    inputAmount: '#inputAmount input',
                    inputName: '#inputName input',
                    inputLastname1: '#inputLastName input',
                    inputLastname2: '#inputSecondLastName input',
                    inputBirthDate: '#inputDate',
                    placeBirth: 'bbva-form-select #label',
                    optionPlaceBirth: 'bbva-form-select bbva-form-option:nth-child(1)',
                    gender: 'bbva-form-radio-button ul > li:nth-child(1)',
                    continueBtn: '#additionalTdcContinue',
                    msgError: '#inputAmount bbva-notification-help',

                },
                dataStepInfo: {
                    title: '#multistep-modal .scrollable .animation #heading [text="Tarjeta adicional"]',
                    stepBtn: '.amount-step #step-1 bbva-type-link#editButton',
                    changeBtn: '.amount-step #step-1 [class="header header-ellipsis   "] [aria-describedby="headingLabel"] .action-slot',
                    msgBirthError: 'span[aria-label="cells-step-user-form-birthdate-error-message"]',
                },
                otherBranch: '.address [value="home"]',
                continueBtn: '.thirth-step #step-2 .content .container #additionalTdcContinue .button-panel [text="Continuar"]',
                choiceBranch: '.address [value="branch"]',
                showBranch: '.address #addressContent [aria-label="Dirección patrimonial desenmascarada"]',
                addressStep: {
                    title: '#step-2 .default-content [class="header header-ellipsis   "]',
                    helpIconBtn: '.address .bottom-radio .side-radio [variant="info"]',
                    linkBranch: '[value="branch"] .address__content-link',
                    addressBranch: '.address-info-content:nth-of-type(3)',
                    changeBtn: '.thirth-step [class="animation finished"] [class="header header-ellipsis   "] #editButton .action-slot',
                    showBtn: '.cells-radio-button-description-title-container .link'
                },
                legalStep: {
                    properties: {root: '#step-3'},
                    title: '[class="header header-ellipsis  long-word "]',
                    checkbox: '.content .address__conten .box',
                    continueBtn: '#additionalTdcContinue [text="Continuar"]',
                    disabledBtn: '.primary [disabled]',
                    changeBtn: '#editButton .action-slot',
                },
                summaryBlock: '.additional-card-hiring-confirm-button div.actions',
                requestBtn: '.confirmation-area #additionalTdcContinue [text="Continuar"]',
                secondaryBtn:'#additionalModal #helpModalHeader #btn-close',
                description: '#errorMiddleModal .content .help-modal .modal-main .modal-container .modal-content-wrapper #helpModalContent .slot-content [data-tag-name="bbva-type-text"]',
                signConnector: CellsSignOperationModalSpherica,
                dialogOperations: {
                    properties: {root: 'bbva-feature-oc-additional-credit-card-mx bbva-feature-oc-additional-credit-card-mx-multistep'},
                    buttonClose: ' #btn-close',
                    modalLabel: '.header  #text',
                    contentModal: '[slot="slot-content"]',
                },
                successPage:{
                    properties: {root: '#successfulPage #successfulModal'},
                    infoTDC: '.title  .title-container [text="Tarjeta titular"]',
                    infoUser: '.title  .title-container [text="Tarjeta adicional"]',
                    blueBlock: '[message-title="La tarjeta llegará a tu domicilio en un máximo de 7 días hábiles, la persona que la reciba deberá presentar una identificación oficial. Considera que tendrán que activarla en cualquier cajero automático BBVA."]',
                    emailInfo: '[message-title="Recibirás el comprobante de esta operación en el siguiente correo electrónico:"]',
                    exitBtn: '#btn-close',
                    crossIconButton: '.panel-success .clip-microillustration',
                    headerSuccess: '#helpModalHeader',
                },
            },
            requiredElements: [
                'title',
            ]
        });
    }

    async _modalElementValidation({item}) {
        switch (item.toLowerCase()) {
            case 'exit button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }

    async confirmDialog() {
        await this.confirmCloseModal.waitForDisplayed({timeout: config.wait.M});
        await this.confirmCloseModal.click();
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'tdc header':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'interested button':
                await this.infoStep.interestedBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit header button':
                await this.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tdc info text':
                await this.infoStep.infoACC.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tdc amount offer':
                await this.infoStep.amountOffer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tdc benefit text':
                await this.infoStep.benefitInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'data form title':
                await this.dataStepInfo.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input credit limit':
                await this.dataStep.inputAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input name':
                await this.dataStep.inputName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input lastname':
                await this.dataStep.inputLastname1.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input mother lastname':
                await this.dataStep.inputLastname2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input birthdate':
                await this.dataStep.inputBirthDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'birthdate error text':
                await this.dataStepInfo.msgBirthError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'limit error':
                await this.dataStep.msgError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address header':
                await this.addressStep.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address branch':
                await this.addressStep.addressBranch.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'legal header':
                await this.legalStep.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'legal checkbox':
                await this.legalStep.checkbox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'legal button disabled':
                await this.legalStep.disabledBtn.waitForEnabled({timeout: config.wait.M, reverse: true});
                break;
            case 'info change button':
                await this.infoStep.changeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'data change button':
                await this.dataStepInfo.changeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address change button':
                await this.addressStep.changeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'legal change button':
                await this.legalStep.changeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'request button':
                await this.requestBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header otp':
                await this.signConnector.smsPasswordLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'img otp':
                this.isSpherica() ? await this.signModal.smsIcon.waitForDisplayed({timeout:config.wait.M}) :
                    await this.signModal.smsImage.waitForDisplayed({timeout:config.wait.M}) ;
                break;
            case 'title otp':
                await this.signConnector.insertSmsLabel.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'input otp':
                await this.signConnector.smsPasswordInputField.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'continue button otp':
                await this.signConnector.smsContinueButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'address tooltip':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER});
                break;
            case 'show button disabled':
                await this.addressStep.showBtn.waitForDisplayed({timeout: config.wait.M, reverse: true});
                break;
            case 'text info':
                await this.dialogOperations.additionalElements.textInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.dialogOperations.additionalElements.titleModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.dialogOperations.buttonClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.dialogOperations.contentModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header success':
                await this.successPage.headerSuccess.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'tdc information':
                await this.successPage.infoTDC.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'user information':
                await this.successPage.infoUser.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'blue block':
                await this.successPage.blueBlock.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'email information':
                await this.successPage.emailInfo.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'exit button':
                await this.successPage.exitBtn.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'cross icon button':
                await this.successPage.crossIconButton.waitForDisplayed({timeout: config.wait.XL});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptOffer() {
        await this.infoStep.interestedBtn.waitForDisplayed({timeout: config.wait.M});
        await this.infoStep.interestedBtn.waitForAnimation({timeout: config.wait.M});
        await this.infoStep.interestedBtn.click();
    }

    async interactTxt(inputs, val1, val2) {
        await inputs.waitForDisplayed({timeout: config.wait.M});
        await inputs.waitForAnimation({timeout: config.wait.M});
        await inputs.setValue({value: val1, slow: true});
        await inputs.setValue({value: val2, slow: true});
    }

    async creditCardDataStep() {
        await this.dataStep.inputAmount.waitForDisplayed({timeout: config.wait.M});
        await this.dataStep.inputAmount.setValue({value: '1000', slow: true});
        await this.dataStep.inputName.waitForDisplayed({timeout: config.wait.M});
        await this.dataStep.inputName.setValue({value: 'Mario', slow: true});
        await this.dataStep.inputLastname1.waitForDisplayed({timeout: config.wait.M});
        await this.dataStep.inputLastname1.setValue({value: 'Moreno', slow: true});
        await this.dataStep.inputLastname2.waitForDisplayed({timeout: config.wait.M});
        await this.dataStep.inputLastname2.setValue({value: 'Gomez', slow: true});
        await this.enterDate('1992-08-23');
        await this.dataStep.placeBirth.waitForDisplayed({timeout: config.wait.M});
        await this.dataStep.placeBirth.click();
        await this.dataStep.optionPlaceBirth.click();
        await this.dataStep.gender.waitForDisplayed({timeout: config.wait.M});
        await this.dataStep.gender.click();
        await this.dataStep.continueBtn.waitForClickable({timeout: config.wait.M});
        await this.dataStep.continueBtn.click();
    }

    async enterDate(targetDate) {
        await this.dataStep.inputBirthDate.waitForDisplayed({ timeout: config.wait.M });
        await this.dataStep.inputBirthDate.execute({
            script: function(dateValue) {
                this.value = dateValue;
                this.dispatchEvent(new Event('change', { bubbles: true }));
                this.dispatchEvent(new Event('input', { bubbles: true }));
            },
            args: [targetDate]
        });
    }

    async accessToMap() {
        await this.choiceBranch.waitForDisplayed({timeout: config.wait.M});
        await this.choiceBranch.click();
        await this.addressStep.linkBranch.waitForDisplayed({timeout: config.wait.M});
        await this.addressStep.linkBranch.click();
    }

    async accessAddressHelpInfo() {
        await this.addressStep.helpIconBtn.waitForDisplayed({timeout: config.wait.M});
    }

    async goBack() {
        await this.closeModal.waitForClickable({timeout: config.wait.M});
        await this.closeModal.click();
    }

    async setCreditLimit(value) {
        await this.dataStep.inputAmount.waitForDisplayed({timeout: config.wait.M});
        await this.dataStep.inputAmount.setValue({value: value, slow: true});
        await this.dataStep.inputName.waitForDisplayed({timeout: config.wait.M});
        await this.dataStep.inputName.setValue({value: 'Prueba', slow: true});
    }

    async requestAdditionalCard() {
        await this.signConnector.isLoaded();
        await this.fillOtp('12345678');
    }

    getIllegalDate() {
        const today = new Date();
        const month = (today.getMonth()<9)?
            ('0'.concat((today.getMonth()+1).toString())):
            (today.getMonth()+1).toString();
        const illegalDate = today.getFullYear().toString().concat('-', month, '-', today.getDate().toString());
        return illegalDate;
    }

    async fillBirthDate(value) {
        await this.enterDate(value);
    }

    async showDataStep() {
        const button = await this.getVisibleElement(
            this.dataStepInfo.stepBtn
        );
        await button.click();
    }

    async getVisibleElement(element) {
        for (const candidate of await element.elements()) {
            if (await candidate.isDisplayed()) {
                return candidate;
            }
        }
        throw new Error(`No visible element found for ${element.selector}`);
    }

    async showAddressStep() {
        await this.continueBtn.waitForClickable({timeout: config.wait.M});
        await this.continueBtn.click();
    }

    async continueLegalStep() {
        await this.legalStep.continueBtn.waitForClickable({timeout: config.wait.M});
        await this.legalStep.continueBtn.click();
    }

    async legalStepTerms() {
        await this.legalStep.checkbox.waitForDisplayed({timeout: config.wait.M});
        await this.legalStep.checkbox.click();
    }

    async showRequest() {
        await this.requestBtn.waitForClickable({timeout: config.wait.M});
        await this.requestBtn.click();
    }

    async showOtherBranch() {
        const branch = await this.otherBranch.isExisting();
        if (branch) {
            await this.otherBranch.waitForDisplayed({timeout: config.wait.M});
            await this.otherBranch.click();
        } else {
            await this.showBranch.waitForDisplayed({timeout: config.wait.M});
            await this.showBranch.click();
        }
    }

    async interactStep({step, flag}={}) {
        switch(step) {
            case 'additional card':
                if (!flag) {
                    await this.infoStep.changeBtn.waitForDisplayed({timeout: config.wait.M});
                    await this.infoStep.changeBtn.click();
                    await this.infoStep.interestedBtn.waitForDisplayed({timeout: config.wait.M});
                    await this.infoStep.interestedBtn.click();
                }
                break;
            case 'credit limit':
                await this.interactTxt(this.dataStep.inputAmount, 'abcd!@#¢', '1,000');
                break;
            case 'name':
                await this.interactTxt(this.dataStep.inputName, '1234!@#¢', 'Nombre');
                break;
            case 'last name':
                await this.interactTxt(this.dataStep.inputLastname1, '1234!@#¢', 'Paterno');
                break;
            case 'mother last name':
                await this.interactTxt(this.dataStep.inputLastname2, '1234!@#¢', 'Materno');
                break;
            case 'birthdate':
                await this.fillBirthDate('1992-08-23');
                break;
            case 'illegal date':
                await this.dataStep.inputBirthDate.waitForDisplayed({timeout: config.wait.M});
                await this.dataStep.inputBirthDate.sendKeys({keys: this.getIllegalDate().split('-').reverse().join('')});
                break;
            case 'all data':
                await this.creditCardDataStep();
                break;
            case 'data client':
                await this.showDataStep();
                await this.dataStep.inputAmount.setValue(2000);
                await this.dataStep.continueBtn.waitForAnimation({timeout: config.wait.M});
                await this.dataStep.continueBtn.scrollIntoView({block: 'end'});
                await this.dataStep.continueBtn.waitForDisplayed({timeout: config.wait.M});
                await this.dataStep.continueBtn.click();
                break;
            case 'shipment address':
                if (flag) {
                    await this.creditCardDataStep();
                    await this.showOtherBranch();
                    await this.showAddressStep();
                } else {
                    await this.addressStep.changeBtn.waitForAnimation({timeout: config.wait.M});
                    await this.addressStep.changeBtn.waitForDisplayed({timeout: config.wait.M});
                    await this.addressStep.changeBtn.click();
                }
                break;
            case 'continue address':
                await this.showAddressStep();
                break;
            case 'legal terms':
                if (flag) {
                    await this.creditCardDataStep();
                    await this.showOtherBranch();
                    await this.showAddressStep();
                    await this.legalStepTerms();
                    await this.continueLegalStep();
                } else {
                    await this.summaryBlock.execute({
                        script: () => this.setAttribute('hidden', ''),
                        args: [],
                    });
                    await this.legalStep.changeBtn.waitForAnimation({timeout: config.wait.M});
                    await this.legalStep.changeBtn.waitForDisplayed({timeout: config.wait.M});
                    await this.legalStep.changeBtn.click();
                    await this.continueLegalStep();
                }
                break;
            case 'summary':
                await this.creditCardDataStep();
                await this.showOtherBranch();
                await this.showAddressStep();
                await this.legalStepTerms();
                await this.continueLegalStep();
                if (flag) {
                    await this.showRequest();
                }
                break;
            case 'finish process':
                await this.showAddressStep();
                await this.legalStepTerms();
                await this.continueLegalStep();
                await this.showRequest();
                break;
            default:
                throw new Error(`Step ${step} is not implemented.`);
        }
    }

}

export default new NewAdditionalCardDetail();
