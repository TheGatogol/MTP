import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
@page()
class FiscalData extends AbstractGlomoPage {
    constructor() {

        super({
            root: '#cells-template-requestFiscalData[state="active"]',
            elements: {
                header: 'bbva-multistep-user-documentation-tax-data-spherica #header',
                firstModalLogo: 'bbva-multistep-user-documentation-tax-data-spherica bbva-multistep-request-fiscal-tax-modal-info #firstModal  .user-documentation-main-modal-header-container  bbva-clip-microillustration img',
                firstModalTitle: 'bbva-multistep-user-documentation-tax-data-spherica bbva-multistep-request-fiscal-tax-modal-info #firstModal  .user-documentation-main-modal-header-container  bbva-type-text:nth-child(2)',
                firstModalTitleText: 'bbva-multistep-user-documentation-tax-data-spherica bbva-multistep-request-fiscal-tax-modal-info #firstModal  .user-documentation-main-modal-header-container  bbva-type-text.user-documentation-main-modal-header-description',
                firstModalBenefitsTitle: '#firstModal .content [data-tag-name="bbva-header-category"]',
                firstModalBenefitOne: '#firstModal .content .beneficios01',
                firstModalBenefitTwo: '#firstModal .content .beneficios02',
                firstModalBenefitThree: '#firstModal .content .beneficios03',
                firstModalNeedsTitle: '#firstModal .content [data-tag-name="bbva-header-category"]',
                firstModalNeedOne: '#firstModal .content .necesidades01',
                firstModalNeedTwo: '#firstModal .content .necesidades02',
                firstModalLinkSAT: 'bbva-multistep-user-documentation-tax-data-spherica bbva-multistep-request-fiscal-tax-modal-info #firstModal  .user-documentation-main-modal-body-container bbva-type-link',
                firstModalAcceptButton: '#firstModal .content .button bbva-button-default',
                secondModalTitle: '#secondModal bbva-type-text[text="Régimen Fiscal"]',
                secondModalIcon: '#secondModal #helpModalTitle .title-icon',
                secondModalFirstText: '#secondModal .content .descriptionText:first-of-type',
                secondModalSecondText: '#secondModal .content .descriptionText:last-of-type',
                secondModalAcceptBtn: '#secondModal .content .modal-footer bbva-button-default',

                titleStepOne: '#step-1 .header',
                infoStepOne: '#step-1 .infoText',
                infoStepOneQuestionButton: '#step-1 #buttonInfo',
                RFCTitle: '#step-1 .paragraph .textRfc',
                RFCContent: '#step-1 .paragraph span:last-of-type',
                helpIconMessageStepOne: 'bbva-multistep-user-documentation-tax-data-spherica #step-1 .content bbva-multistep-user-documentation-tax-data-spherica-personal-data #buttonInfo',
                helpMessageStepOne: '#step-1 bbva-notification-help p',
                nameFieldStepOne: '#step-1 .form-container #formTextName input',
                nameSummary: '#step-1 .summary p',
                taxRegimenFieldStepOne: '#step-1 .form-container #taxRegimenSelect #button',
                taxRegimenDropdownMenuStepOne: 'bbva-multistep-user-documentation-tax-data-spherica #step-1 .content bbva-multistep-user-documentation-tax-data-spherica-personal-data #taxRegimenSelect bbva-form-option:nth-child(4)',
                CFDIFieldStepOne: 'bbva-multistep-user-documentation-tax-data-spherica #step-1 .content bbva-multistep-user-documentation-tax-data-spherica-personal-data #firstStepButton',
                CFDIDropdownMenuStepOne: 'bbva-multistep-user-documentation-tax-data-spherica #step-1 .content  bbva-multistep-user-documentation-tax-data-spherica-personal-data #cfdiSelect',
                continueButtonStepOne: '#step-1 .center-button #firstStepButton',
                editStepOneButton: 'bbva-multistep-user-documentation-tax-data-spherica #step-1 #editButton',
                titleStepTwo: '#step-2 .header',
                infoStepTwo: '#step-2 .content p',
                firstNeighborhoodListed: '#step-2 #fiscal-address-neighborhood [data-tag-name="bbva-form-option"]:nth-of-type(2)',
                continueButtonStepTwo: 'bbva-multistep-user-documentation-tax-data-spherica #step-2 .content bbva-multistep-user-documentation-tax-data-spherica-address-data .center-button bbva-button-default',
                editStepTwoButton: '#step-2 #editButton',
                addressSummary: '#step-2 .summary p',

                titleStepThree: '#step-3 .header',
                bbvaMultistepStep3: {
                    properties: {
                        root: '#step-3 .three-step-content'
                    },
                    infoStepThree: '.three-text',
                    checkboxStepThree: '.three-step-checkbox .container',
                    checkboxTextStepThree: 'bbva-form-checkbox span.content',
                    messageIconStepThree: 'bbva-notification-message svg',
                    continueButtonStepThree: '.center-button [data-tag-name="bbva-button-default"]',
                },
                taxDataStepFinished: '#step-1',
                taxAddressStepFinished: '#step-2',
                useOfTaxDataStepFinished: '#step-3',
                confirmButton: 'bbva-multistep-user-documentation-tax-data-spherica #buttonConfirmationData',
                bbvaMultistepStep2: {
                    properties: {
                        root: 'bbva-multistep-user-documentation-tax-data-spherica #step-2  bbva-multistep-user-documentation-tax-data-spherica-address-data'
                    },
                    municipalInfoStepTwo: '.form-container  bbva-form-input[label="Alcaldía/Municipio"]',
                    stateStepTwo: '.form-container  bbva-form-input[label="Estado"]',
                    streetFieldStepTwo: '#fiscal-address-street bbva-form-text input',
                    exteriorNumberStepTwo: '#fiscal-address-ext-num input',
                    interiorNumberStepTwo: '#fiscal-address-int-num input',
                    PCStepTwo: '#fiscal-address-postal-code input',
                    neighborhoodStepTwo: '#fiscal-address-neighborhood',
                    neighborhoodDropdowStepTwo: '#fiscal-address-neighborhood',
                }
            },

            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'modal about tax reform logo':
                await this.firstModalLogo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal about tax reform title':
                await this.firstModalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal about tax reform title text':
                await this.firstModalTitleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal about tax reform benefits title':
                await this.firstModalBenefitsTitle.waitForText({
                    timeout: config.wait.M,
                    text: '¿QUÉ BENEFICIOS TIENE PARA TI?'
                });
                break;
            case 'modal about tax reform benefit one':
                await this.firstModalBenefitOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal about tax reform benefit two':
                await this.firstModalBenefitTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal about tax reform benefit three':
                await this.firstModalBenefitThree.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal about tax reform needs title':
                await this.firstModalNeedsTitle.waitForText({timeout: config.wait.M, text: '¿QUÉ NECESITAS?'});
                break;
            case 'modal about tax reform first obligation':
                await this.firstModalNeedOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal about tax reform second obligation':
                await this.firstModalNeedTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal about tax reform sat link':
                await this.firstModalLinkSAT.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal about tax reform continue button':
                await this.firstModalAcceptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fiscal data help modal first title':
                await this.secondModalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fiscal data help modal icon':
                await this.secondModalIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fiscal data help modal first text':
                await this.secondModalFirstText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fiscal data help modal second title':
                await this.secondModalSecondText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fiscal data help modal second text':
                await this.secondModalSecondText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary name':
                if (value === 'edited') {
                    await this.nameSummary.waitForText({text: global.user.data.name, exactMatch: false});
                } else {
                    await this.nameSummary.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'fiscal data help modal accept button':
                await this.secondModalAcceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax data step title':
                await this.titleStepOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax data step info':
                await this.infoStepOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax data step button':
                await this.infoStepOneQuestionButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax data step rfc title':
                await this.RFCTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax data step rfc content':
                await this.RFCContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax data step help icon message':
                await this.helpIconMessageStepOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax data step help message':
                await this.helpMessageStepOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax data step name field':
                await this.nameFieldStepOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax data step tax regime field':
                await this.taxRegimenFieldStepOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax regime options':
                await this.taxRegimenDropdownMenuStepOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax data step cfdi field':
                await this.CFDIFieldStepOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'options on the use of tax receipts':
                await this.CFDIDropdownMenuStepOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax data step continue button':
                await this.continueButtonStepOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit step one button':
                await this.editStepOneButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax address step title':
                await this.titleStepTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax address step info':
                await this.infoStepTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax address step street field':
                await this.bbvaMultistepStep2.streetFieldStepTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax address step exterior number field':
                await this.bbvaMultistepStep2.exteriorNumberStepTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax address step interior number field':
                await this.bbvaMultistepStep2.interiorNumberStepTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax address step postal code field':
                await this.bbvaMultistepStep2.PCStepTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax address step colony options':
                await this.bbvaMultistepStep2.neighborhoodStepTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'options for their tax address':
                await this.bbvaMultistepStep2.neighborhoodDropdowStepTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax address step municipal info':
                await this.bbvaMultistepStep2.municipalInfoStepTwo.waitForText({timeout: config.wait.M, text: 'Alcaldía/Municipio'});
                break;
            case 'tax address step state info':
                await this.bbvaMultistepStep2.stateStepTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax address step continue button':
                await this.continueButtonStepTwo.waitForText({timeout: config.wait.M, text: 'Continuar'});
                break;
            case 'edit step two button':
                await this.editStepTwoButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary address':
                if (value === 'edited') {
                    await this.addressSummary.waitForText({text: global.user.data.address, exactMatch: false});
                } else {
                    await this.addressSummary.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'use of tax data step title':
                await this.titleStepThree.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'use of tax data step info':
                await this.bbvaMultistepStep3.infoStepThree.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirmation box for the use of tax data':
                await this.bbvaMultistepStep3.checkboxStepThree.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirmation box text for the use of tax data':
                await this.bbvaMultistepStep3.checkboxTextStepThree.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'use of tax data step message icon':
                await this.bbvaMultistepStep3.messageIconStepThree.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'use of tax data step continue button':
                await this.bbvaMultistepStep3.continueButtonStepThree.waitForText({timeout: config.wait.M, text: 'Continuar'});
                break;
            case 'tax data step finished':
                await this.taxDataStepFinished.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax address step finished':
                await this.taxAddressStepFinished.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'use of tax data step finished':
                await this.useOfTaxDataStepFinished.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button':
                await this.confirmButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptFirstModal() {
        await this.firstModalAcceptButton.waitForClickable({timeout: config.wait.M});
        await this.firstModalAcceptButton.click();
    }

    async goToStep(step) {
        switch (step.toLowerCase()) {
            case 'tax data':
                await this.continueButtonStepOne.waitForClickable({timeout: config.wait.M});
                await this.continueButtonStepOne.click();
                break;
            case 'tax address':
                await this.goToStep('tax data');
                await (await (await this.continueButtonStepTwo.waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'use of tax data':
                await this.goToStep('tax address');
                await this.bbvaMultistepStep3.checkboxStepThree.waitForClickable({timeout: config.wait.M});
                await this.bbvaMultistepStep3.checkboxStepThree.click();
                break;
            case 'tax data summary':
                await this.goToStep('use of tax data');
                await (await (await this.bbvaMultistepStep3.continueButtonStepThree.waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            default:
                throw new Error(`THIS ${step} IS NOT DEFINED`);
        }
    }

    async editStepInfo(step) {
        switch (step.toLowerCase()) {
            case 'tax data': {
                await this.waitForElementsExist(this.editStepOneButton);
                const editStepOne = await this.editStepOneButton.elements();
                await editStepOne.value[0].waitForDisplayed({timeout: config.wait.M});
                await editStepOne.value[0].click();
                await this.nameFieldStepOne.waitForAnimation({timeout: config.wait.M, interval: config.wait.S});
                await this.nameFieldStepOne.setValue({value: global.user.data.name});
                await this.continueButtonStepOne.waitForClickable({timeout: config.wait.M});
                await this.continueButtonStepOne.click();
                break;
            }
            case 'tax address': {
                await this.waitForElementsExist(this.editStepTwoButton);
                const editSteptwo = await this.editStepTwoButton.elements();
                await editSteptwo.value[0].waitForDisplayed({timeout: config.wait.M});
                await editSteptwo.value[0].click();
                await this.bbvaMultistepStep2.streetFieldStepTwo.waitForAnimation({timeout: config.wait.M, interval: config.wait.S});
                await this.bbvaMultistepStep2.streetFieldStepTwo.setValue({value: global.user.data.address});
                await this.bbvaMultistepStep2.exteriorNumberStepTwo.setValue({value: 101});
                await this.bbvaMultistepStep2.interiorNumberStepTwo.setValue({value: 303});
                await this.bbvaMultistepStep2.PCStepTwo.setValue({value: 57000});
                await this.bbvaMultistepStep2.neighborhoodStepTwo.selectOption({option: this.firstNeighborhoodListed});
                await (await (await this.continueButtonStepTwo.waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            }
            default:
                throw new Error(`EDITABLE ${step} IS NOT DEFINED`);
        }
    }

    async openDropdownMenu(dropDownMenu) {
        switch (dropDownMenu.toLowerCase()) {
            case 'on tax regime':
                await this.taxRegimenFieldStepOne.waitForClickable({timeout: config.wait.M});
                await this.taxRegimenFieldStepOne.click();
                break;
            case 'on the use of tax receipts':
                await this.CFDIFieldStepOne.waitForClickable({timeout: config.wait.M});
                await this.CFDIFieldStepOne.click();
                await this.continueStep3();
                break;
            case 'for their tax address':
                await this.bbvaMultistepStep2.neighborhoodStepTwo.waitForClickable({timeout: config.wait.M});
                await this.bbvaMultistepStep2.neighborhoodStepTwo.click();
                break;
            default:
                throw new Error(`${dropDownMenu} NOT EXISTING`);
        }
    }

    async continueStep3() {
        await this.continueButtonStepTwo.waitForDisplayed({timeout: config.wait.M});
        await this.continueButtonStepTwo.click();
    }

    async enterModal(modal) {
        switch (modal.toLowerCase()) {
            case 'about tax reform':
                await this.infoStepOneQuestionButton.waitForClickable({timeout: config.wait.M});
                await this.infoStepOneQuestionButton.click();
                break;
            default:
                throw new Error(`The '${modal}' modal is not found between the current options`);
        }
    }

    async acceptHelpModal() {
        await this.secondModalAcceptBtn.waitForClickable({timeout: config.wait.M});
        await this.secondModalAcceptBtn.click();
    }

    async confirmChanges() {
        await this.confirmButton.waitForClickable({timeout: config.wait.M});
        await this.confirmButton.click();
    }
}

export default new FiscalData();
