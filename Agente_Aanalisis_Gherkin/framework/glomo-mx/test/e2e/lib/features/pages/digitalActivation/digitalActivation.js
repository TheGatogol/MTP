import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica.js';
import * as dateUtils from '../../utils/dateUtils.js';
import moment from 'moment';

@page()
class DigitalActivation extends AbstractGlomoPage {
    constructor() {
        super({
            id: 'DigitalActivation',
            root: '#cells-template-digitalActivation[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                stepCardIdentificationForm: {
                    properties: { root: 'cells-step-card-identification-form-spherica' },
                    panelIcon: '.header-content .header-image',
                    panelTitle: '.header-content .main-title',
                    panelSubtitle: '.header-content .description-title',
                    identifyTitle: '#cardAdvice .cells-step__header-title',
                    identifyDescription: '#cardAdvice .full .text-instructions .description',
                    phoneInfo: '#cardAdvice cells-icon-message-spherica#userPhoneInput',
                    cardNumberInfo: '#cardAdvice cells-icon-message-spherica.help-message#userCardNumber',
                    inputPhone: '#phone #input',
                    inputCard: '#pan #input',
                    inputCameraCard: '#pan #btnMainIcon',
                    continueCardButton: '#cardAdvice .full .content-button cells-st-button-spherica',
                    accessMonoproduct: 'cells-step-spherica .access-monoproduct cells-st-button-spherica#access',
                    privacyLink: '#cardAdvice .full cells-icon-message-spherica cells-st-link-spherica.link',
                    inputName: 'cells-molecule-input-spherica#name #input',
                    inputLastname: 'cells-molecule-input-spherica#lastname #input',
                    inputSecondName: 'cells-molecule-input-spherica#secondname #input',
                    inputBirthdate: 'cells-molecule-input-spherica#birthdate-input #input',
                    inputBirthplace: 'cells-select-spherica #toggle',
                    inputOptionAgs: 'cells-modal-selector-spherica cells-middle-modal-spherica #itemList #AS',
                    inputGender: 'cells-radio-group-spherica cells-radio-button-spherica#digital-activation-monoproduct-card-identification-form-radio-group-male',
                    inputPhoneMonoproduct: 'cells-molecule-input-spherica#phoneMonoproduct #input',
                    inputCredit: 'cells-molecule-input-spherica#typeproduct #input',
                    continueBtn: 'cells-st-button-spherica .main-button',
                    summarizedPhoneKey: '#cardAdvice cells-key-values-spherica#phoneDescription .key',
                    summarizedPhoneValue: '#cardAdvice cells-key-values-spherica#phoneDescription .value',
                    summarizedCardKey: '#cardAdvice cells-key-values-spherica#cardDescription .key',
                    summarizedCardValue: '#cardAdvice cells-key-values-spherica#cardDescription .value'
                },
                stepKeyRecoveryMethodForms: {
                    properties: { root: 'cells-step-key-recovery-method-forms-spherica' },
                    selectBirthDate: '#dateInput',
                    continueBirthDate: '.content-button .primary',
                    cvvInput: '#cvv #input',
                    nipInput: '#nip #input',
                    continueCvvNipButton: '#formRecoveryKeyStepContainer .content-button cells-st-button-spherica'
                },
                stepDigitalServicesContract: {
                    properties: { root: 'cells-step-digital-services-contract-spherica' },
                    cudButton: '#digitalServicesContractStep .full .icon-message-pdf cells-icon-message-spherica #notInline',
                    signaturePadButton: '#digitalServicesContractStep .full cells-card-advice-spherica',
                    signatureContinueButton: '#digitalServicesContractStep .full .content-button cells-st-button-spherica'
                },
                stepRecoveryPassword: {
                    properties: { root: 'cells-step-recovery-password-spherica' },
                    passInput: '#recoveryUpdate #user-input-new-pwd #input',
                    confirmPassInput: '#recoveryUpdate #user-input-new-pwd-repeat #input',
                    continuePassButton: '#recoveryUpdate .button-container cells-st-button-spherica'
                },
                stepIdentityValidation: {
                    properties: { root: 'cells-step-identity-validation-spherica' },
                    noticeOfPrivacySummary: '#identification .full cells-st-button-spherica',
                    biometricCheckbox: 'cells-checkbox-button-spherica #checkbox',
                    startVerificationBtn: 'cells-st-button-spherica .main-button',
                    biometricIndications: 'cells-step-spherica#identification cells-progress-vertical-step-spherica',
                    disabledStartVerificationBtn: 'cells-st-button-spherica .main-button',
                    biometricPrivacyLink: 'cells-st-button-spherica.privacy-link'
                },
                completeSummaryButton: 'cells-summary-view-spherica .primary',
                dialogOperations: [
                    GlomoAlertManagerSpherica
                ],
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'exit header button':
                await this.header.waitForDisplayed({isBtnRight: true, isBtnLeft: false});
                break;
            case 'panel icon':
                await this.stepCardIdentificationForm.panelIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel title':
                await this.stepCardIdentificationForm.panelTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel subtitle':
                await this.stepCardIdentificationForm.panelSubtitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'identify title':
                await this.stepCardIdentificationForm.identifyTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'identify description':
                await this.stepCardIdentificationForm.identifyDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input phone':
                await this.stepCardIdentificationForm.inputPhone.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone info':
                await this.stepCardIdentificationForm.phoneInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input card':
                await this.stepCardIdentificationForm.inputCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input camera card':
                await this.stepCardIdentificationForm.inputCameraCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card number info':
                await this.stepCardIdentificationForm.cardNumberInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue card button':
                await this.stepCardIdentificationForm.continueCardButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input cvv':
                await this.stepKeyRecoveryMethodForms.cvvInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input nip':
                await this.stepKeyRecoveryMethodForms.nipInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue cvv nip button':
                await this.stepKeyRecoveryMethodForms.continueCvvNipButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'select birth date':
                await this.stepKeyRecoveryMethodForms.selectBirthDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue birth date':
                await this.stepKeyRecoveryMethodForms.continueBirthDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cud button':
                await this.stepDigitalServicesContract.cudButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'signature pad button':
                await this.stepDigitalServicesContract.signaturePadButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'signature continue button':
                await this.stepDigitalServicesContract.signatureContinueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pass input':
                await this.stepRecoveryPassword.passInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm pass input':
                await this.stepRecoveryPassword.confirmPassInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue pass button':
                await this.stepRecoveryPassword.continuePassButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue complete summary button':
                await this.completeSummaryButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone label in summary':
                await this.stepCardIdentificationForm.summarizedPhoneKey.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone data in summary':
                await this.stepCardIdentificationForm.summarizedPhoneValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card label in summary':
                await this.stepCardIdentificationForm.summarizedCardKey.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card data in summary':
                await this.stepCardIdentificationForm.summarizedCardValue.waitForDisplayed({timeout: config.wait.M});
                break;
            //Monoproduct
            case 'monoproduct entrypoint':
                await this.stepCardIdentificationForm.accessMonoproduct.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy notice link':
                await this.stepCardIdentificationForm.privacyLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'name input':
                await this.stepCardIdentificationForm.inputName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first lastname input':
                await this.stepCardIdentificationForm.inputLastname.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second lastname input':
                await this.stepCardIdentificationForm.inputSecondName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'birthdate input':
                await this.stepCardIdentificationForm.inputBirthdate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'place of birth input':
                await this.stepCardIdentificationForm.inputBirthplace.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'radio buttons':
                await this.stepCardIdentificationForm.inputGender.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone number input':
                await this.stepCardIdentificationForm.inputPhoneMonoproduct.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit number input':
                await this.stepCardIdentificationForm.inputCredit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'disabled continue button':
                await (await this.stepCardIdentificationForm.continueBtn.waitForDisplayed({timeout: config.wait.M})).waitForAttribute({attribute: 'disabled'});
                break;
            case 'biomentric indications':
                await this.stepIdentityValidation.biometricIndications.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'biometric privacy link':
                await this.stepIdentityValidation.biometricPrivacyLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy checkbox':
                await this.stepIdentityValidation.biometricCheckbox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'disabled verification button':
                await (await this.stepIdentityValidation.disabledStartVerificationBtn.waitForDisplayed({timeout: config.wait.M})).waitForAttribute({attribute: 'disabled'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'modal header':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER});
                break;
            case 'text template':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.MAIN_TEXT});
                break;
            case 'continue button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            default:
                await super._modalElementValidation({item});
        }
    }

    async exitHeader() {
        await this.header.actionRight();
    }

    async fillPhone(number) {
        await (await this.stepCardIdentificationForm.inputPhone.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: number || user.authentication.user});
    }

    async fillCard(number) {
        if (user.plugin.number) {
            await this.scanCameraCard();
        } else {
            await (await this.stepCardIdentificationForm.inputCard.waitForDisplayed({timeout: config.wait.M}))
                .setValue({value: number || user.products.cards[0].number});
        }
        await this.selectContinueCard();
    }

    async openNoticePrivacy() {
        await this.stepCardIdentificationForm.privacyLink.waitForClickable({timeout: config.wait.XXL});
        await this.stepCardIdentificationForm.privacyLink.click();
    }

    async openNoticePrivacySummary() {
        await this.stepIdentityValidation.noticeOfPrivacySummary.waitForDisplayed({timeout: config.wait.L});
        await this.stepIdentityValidation.noticeOfPrivacySummary.click();
    }

    async scanCameraCard() {
        await (await this.stepCardIdentificationForm.inputCameraCard.waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async selectContinueCard() {
        await (await this.stepCardIdentificationForm.continueCardButton.waitForClickable({timeout: config.wait.M}))
            .click();
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.S
        });
    }

    async inputCardDetails() {
        await (await this.stepKeyRecoveryMethodForms.cvvInput.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: user.authentication.cvv});
        await (await this.stepKeyRecoveryMethodForms.nipInput.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: user.authentication.nip});
        await (await this.stepKeyRecoveryMethodForms.continueCvvNipButton.waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async fillBirthDate() {
        if (await this.stepKeyRecoveryMethodForms.selectBirthDate.waitForDisplayed({timeout: config.wait.M, failOnError: false})) {
            await (await this.stepKeyRecoveryMethodForms.selectBirthDate.waitForEnabled({timeout: config.wait.M}))
                .setValue({value: dateUtils.convertDate(user.people.customer.birthData.birthDate)});
            await (await this.stepKeyRecoveryMethodForms.continueBirthDate.waitForClickable({timeout: config.wait.M}))
                .click();
        }
    }

    async setPhone(value) {
        await this.stepCardIdentificationForm.inputPhone.waitForAnimation({timeout: config.wait.M});
        await this.stepCardIdentificationForm.inputPhone.waitForDisplayed({timeout: config.wait.XXL});
        await this.stepCardIdentificationForm.inputPhone.setValue(value);
    }

    async setCard(value) {
        await this.stepCardIdentificationForm.inputCard.waitForDisplayed({timeout: config.wait.XXL});
        await this.stepCardIdentificationForm.inputCard.setValue(value);
    }

    async setPhoneAndCard() {
        await this.setPhone(global.user.data.phone);
        await this.setCard(global.user.data.tdd);
    }

    async selectContinueCvvNip() {
        await this.stepKeyRecoveryMethodForms.continueCvvNipButton.waitForClickable({timeout: config.wait.M});
        await this.stepKeyRecoveryMethodForms.continueCvvNipButton.click();
    }

    async goToMonoproductEnrollmentEntrypoint() {
        await(await (await (await this.stepCardIdentificationForm.accessMonoproduct.waitForAnimation({timeout: config.wait.M}))
            .scrollIntoView())
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
        await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
    }

    async goToMonoproductEnrollmentFlow() {
        await this.goToMonoproductEnrollmentEntrypoint();
        await this.monoproductOption('continue monoproduct process');
        await this.monoproductOption('select input name');
    }

    async setFullName() {
        await (await this.stepCardIdentificationForm.inputName.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.data.name);
        await (await this.stepCardIdentificationForm.inputLastname.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.data.firstLastname);
        await (await this.stepCardIdentificationForm.inputSecondName.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.data.secondLastname);
    }

    async setBirthPlace() {
        await (await this.stepCardIdentificationForm.inputBirthplace.waitForClickable({timeout: config.wait.M})).click();
        await (await this.stepCardIdentificationForm.inputOptionAgs.waitForClickable({timeout: config.wait.M})).click();
    }

    async setCredit(value) {
        await (await this.stepCardIdentificationForm.inputCredit.waitForDisplayed({timeout: config.wait.M})).setValue(value);
        await this.stepCardIdentificationForm.continueBtn.execute({
            script: (value) => {
                this.disabled = value;
            },
            args: [false],
        });
    }

    async setDateMonoproduct() {
        const startDate = moment().subtract(20, 'years').format('YYYY-MM-DD');
        await (await this.stepCardIdentificationForm.inputBirthdate.waitForDisplayed({timeout: config.wait.M})).execute({
            script: (value) => {
                this.value = value;
            },
            args: [startDate],
        });
    }

    async enterPersonalData() {
        await this.setFullName();
        await this.setDateMonoproduct();
        await this.setBirthPlace();
        await (await this.stepCardIdentificationForm.inputGender.waitForClickable({timeout: config.wait.M})).click();
        await (await this.stepCardIdentificationForm.inputPhoneMonoproduct.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.data.phone);
        await this.setCredit(global.user.data.credit);
    }

    async enterToBiometric() {
        await this.goToMonoproductEnrollmentFlow();
        await this.enterPersonalData();
        await this.monoproductOption('finish fill personal data');
        await this.monoproductOption('continue monoproduct process');
    }

    async startBiometricVerification() {
        await (await this.stepIdentityValidation.startVerificationBtn.waitForClickable({timeout: config.wait.M})).click();
        await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
    }

    async monoproductOption(option) {
        switch (option) {
            case 'continue monoproduct process':
                await this.dialogOperations.confirmDialog();
                break;
            case 'select input name':
                await (await this.stepCardIdentificationForm.inputName.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'finish fill personal data':
                await (await this.stepCardIdentificationForm.continueBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'accept to process data':
                await (await this.stepIdentityValidation.biometricCheckbox.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'identify notice privacy':
                await (await (await this.stepCardIdentificationForm.privacyLink
                    .waitForAnimation({timeout: config.wait.M, interval: config.wait.XS}))
                    .waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'enter biometric notice privacy':
                await (await this.stepIdentityValidation.biometricPrivacyLink.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'monoproduct access':
                await (await this.stepCardIdentificationForm.accessMonoproduct.waitForDisplayed({timeout: config.wait.M})).scrollIntoView();
                break;
            default:
                throw new Error(`${option} is not a valid option`);
        }
    }

    async goToTransversalEnrollmentEntrypoint() {
        await(await (await (await this.stepCardIdentificationForm.accessMonoproduct.waitForAnimation({timeout: config.wait.M}))
            .scrollIntoView())
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }
}

export default new DigitalActivation();
