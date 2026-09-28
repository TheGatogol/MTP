import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page()
class ProfileRecipients extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-profileRecipients[state="active"]',
            elements: {
                welcomeModal:
                {
                    icon: '#securityIcon img',
                    recomendation: '[data-tag-name="bbva-help-modal"]#modal-recipient .text-content-recipient-modal',
                    firstDescription: '[data-tag-name="bbva-help-modal"]#modal-recipient div.content ul li:nth-child(1)',
                    lastDescription: '[data-tag-name="bbva-help-modal"]#modal-recipient div.content ul li:nth-child(2)',
                    privacyNotice: '#noticePrivacyLink',
                    continue: '#OnboardingProfileRecipientsModal [data-tag-name="bbva-button-default"]',
                },
                privacyNotice: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            description: '#modal div.paragraph-template div:nth-child(17)'
                        }
                    }
                ],
                header: {
                    container: '[data-tag-name="bbva-header-main"]#headerInit',
                    closeBtn: '[data-tag-name="bbva-header-main"]#headerInit #btn-right-primary'
                },
                onboarding: {
                    btnModal:'#OnboardingProfileRecipientsModal [data-tag-name="bbva-button-default"]',
                    descModal:'#OnboardingProfileRecipientsModal #descriptionId',
                    bulletModal:'#OnboardingProfileRecipientsModal [data-tag-name="bbva-list-bullet"]',
                    privacyLink: '#noticePrivacyLink',
                    privacyText: '#privacy div [class="modal-container"]',
                    privacyIconClose: '#privacy #helpModalHeader #btn-close',
                },
                multiStep: {
                    header: '[data-tag-name="multistep-profile-recipients"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-header-main"]',
                    closeBtn: '#MultistepProfileRecipientsModal #helpModalHeader #btn-close [data-tag-name="bbva-type-icon"]',
                    stepOne: {
                        accounts: '#compositionCard',
                        accountNumber: '#compositionCard #numberProduct',
                        account: '.account-content #numberProduct[number*="_DIGITS_"]',
                        genericAccount: '[data-tag-name="bbva-list-card"][num-product="__ACCOUNT__"]',
                        title: 'bbva-multistep-profile-recipients #step-1 div.header bbva-core-heading:first-child',
                        step: '#step-1 #currentStep',
                        changeAccount: '#step-1 #editButton',
                        confirmChangeAccount: '#changeAccountButton',
                        cancelChange: '#step-1 div.content [text="Mantener selección y continuar"]',
                    },
                    stepTwo: {
                        title: 'bbva-multistep-profile-recipients #step-2 #heading',
                        step: 'bbva-multistep-profile-recipients #step-2 #currentStep',
                        changeBtn: '#step-2 #editButton',
                        confirmChange: '#change-account-select',
                        firstDescription: 'bbva-multistep-profile-recipients #step-2 .my-padding',
                        lastDescription: '[text="Si deseas registrar a más beneficiarios, acude a una sucursal con tu INE o IFE vigente."]',
                        beneficiaryList: '[data-tag-name="bbva-form-amount"]',
                        inputPercentGeneric: '[data-tag-name="bbva-form-amount"]:nth-child(__ID__) input',
                        beneficiaryGeneric: '[main-title="__NAME__"]',
                        assignedPercentage: '[data-tag-name="bbva-list-simple"] [text="100 %"]',
                        deleteBeneficiaryGeneric: '[main-title="__NAME__"] .actions',
                        registerBeneficiary: '#navigationLink',
                        message: 'bbva-notification-message',
                        continue: '#secondStep',
                        btnAddBeneficiary: '#addBeneficiariesLink',
                        viewDataButton: '#headerAddress [data-tag-name="bbva-type-link"]',
                        address: '[data-tag-name="bbva-form-radio-button"]',
                        btnContinueMultiStep: '#footerButtonCaseOne',
                        percentageOne: '#percentage0 input',
                        cleanPercentageOne: '#percentage0 [data-tag-name="bbva-form-amount"] div [data-tag-name="bbva-button-default"] div [data-tag-name="bbva-type-icon"]',
                        percentageTwo: '#percentage1 input',
                        cleanPercentageTwo: '#percentage1 [data-tag-name="bbva-form-amount"] div [data-tag-name="bbva-button-default"] div [data-tag-name="bbva-type-icon"]',
                        percentageThree: '#percentage2 input',
                        cleanPercentageThree: '#percentage2 [data-tag-name="bbva-form-amount"] div [data-tag-name="bbva-button-default"] div [data-tag-name="bbva-type-icon"]',
                        percentageFour: '#percentage3 input',
                        cleanPercentageFour: '#percentage3 [data-tag-name="bbva-form-amount"] div [data-tag-name="bbva-button-default"] div [data-tag-name="bbva-type-icon"]',
                        percentageFive: '#percentage4 input',
                        cleanPercentageFive: '#percentage4 [data-tag-name="bbva-form-amount"] div [data-tag-name="bbva-button-default"] div [data-tag-name="bbva-type-icon"]',
                        percentageSix: '#percentage5 input',
                        cleanPercentageSix: '#percentage5 [data-tag-name="bbva-form-amount"] div [data-tag-name="bbva-button-default"] div [data-tag-name="bbva-type-icon"]',
                        btnFinalMultiStep: '#buttonFinalStep',
                        btnEditRecipientTwo: '[id="recipient1"] [aria-label="Editar beneficiario"]',
                        btnDeleteRecipientTwo: '[id="recipient1"] [id="trashIcon"]',
                        modifyAccount: '#step1 #editButton',
                        btnModifyAccountContinue: '#changeCount [class="footer-button"]',
                        account: '[id="cardAccountSummary"]',
                        btnFinalStepClose: '#MultistepProfileRecipientsModal [id="btn-close"]',
                        btnFinalStepExit: '#goToBack [data-tag-name="bbva-button-default"]',
                        btnContinueDeleteRecipient: '#erase [data-tag-name="bbva-button-default"]',
                    },
                },
                addRecipients: {
                    fieldFirstName: '#firstName input',
                    fieldLastName: '#lastName input',
                    fieldSecondLastName: '#secondLastName input',
                    fieldRelationType: '#relationType',
                    fieldBirthDate: '#birthDate',
                    radioBtnAddress: '[value="address"]',
                    radioBtnNewAddress: '[value="newAddress"]',
                    btnFooter: '#footerButton',
                    fieldCP: '#zipCode input',
                    colony: '#colony',
                    street: '#street input',
                    number: '#number input',
                    messageError: '[class="message-error notification"]',
                    eraseName: '#firstName [class="clear"]',
                    eraseLastName: '#lastName [class="clear"]',
                    eraseSecondLastName: '#secondLastName [class="clear"]',

                },
                successRecipients: {
                    header: '#successModalPage #helpModalHeader',
                    lustration: '#successModalPage [data-tag-name="bbva-clip-microillustration"]',
                    title: '#successModalPage [data-tag-name="bbva-type-text"]:nth-child(2)',
                    dateHourText: '#successModalPage .date-hour-success [data-tag-name="bbva-type-text"]',
                    dateHourContent: '#successModalPage .date-hour-success [data-tag-name="bbva-type-date"]',
                    accountText: '#successModalPage .account-client-success [data-tag-name="bbva-type-text"]',
                    accountContent: '#successModalPage #account',
                    titleRecipients: '#successModalPage',
                    nameRecipient: '#successModalPage .list-recipients-success [data-tag-name="bbva-type-text"]',
                    percentageRecipient: '#successModalPage .list-recipients-success [data-tag-name="bbva-type-amount"]',
                    notificationMessage: '#successModalPage [data-tag-name="bbva-notification-message"]',
                },
                closeAlert: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            acceptBtn: 'div.buttons-container cells-st-button #acceptButton',
                            cancelBtn: 'div.buttons-container cells-st-button #cancelButton',
                            paragraphIcon: 'div.paragraph-template iron-icon:not([style="display: none;"])',
                            descriptions: '#modal div div.paragraph-template div:nth-child(17) p',
                        }
                    }
                ],
                modalError: {
                    title: '#modal-error-black-list-recipient .title-text-recipient-modal',
                    description: '#modal-error-black-list-recipient .text-content-recipient-modal-error',
                    finishBtn: '#button',
                    warningHeader: '[header-text="Error al agregar al beneficiario"]',
                    btnWarningClose: '#warning [id="btn-close"]',
                    linkWarningExit: '#warning [data-tag-name="bbva-button-default"].footer-button',
                    btnWarningRetry: '#warning [data-tag-name="bbva-button-default"].footer-button:not(.link)',
                    warningIcon: '[icon="spherica:warning"]',
                },
                deleteBeneficiary: {
                    acceptBtn: '#modal-delete [data-tag-name="bbva-button-default"]',
                    cancelBtn: '#modal-delete [data-tag-name="bbva-link"]',
                    paragraphIcon: '#modal-delete [data-tag-name="bbva-core-icon"]',
                    descriptions: '#modal-delete #helpModalContent',
                },
                finishButton: 'bbva-panel-button-fixed #button',
            },
            requiredElements: [
                'root'
            ]
        });
    }

    async goToBeneficiaries() {
        await this.welcomeModal.continue.scrollIntoView({ block: 'end' });
        await this.welcomeModal.continue.click();
    }

    async goToPrivacyNotice() {
        await this.welcomeModal.privacyNotice.scrollIntoView({ block: 'end' });
        await this.welcomeModal.privacyNotice.click();
    }

    async openPrivacy() {
        await this.onboarding.privacyLink.waitForDisplayed();
        await this.onboarding.privacyLink.click();
    }

    async selectAccount() {
        const accountId = this.multiStep.stepOne.account.specifySelector({placeholder: '_DIGITS_', value: global.user.products.accounts});
        await accountId.waitForClickable({timeout: config.wait.M});
        await accountId.click();
    }

    async selectInvalidAccount() {
        const accountId = this.multiStep.stepOne.account.specifySelector({placeholder: '_DIGITS_', value: global.user.products.accountTwo});
        await accountId.waitForDisplayed({timeout: config.wait.M});
        await accountId.click();
    }

    async goToaddRecipients() {
        await this.multiStep.stepTwo.btnAddBeneficiary.waitForDisplayed({timeout: config.wait.M});
        await this.multiStep.stepTwo.btnAddBeneficiary.click();
    }

    async viewData() {
        await this.multiStep.stepTwo.viewDataButton.waitForDisplayed();
        await this.multiStep.stepTwo.viewDataButton.click();
        await this.fillOtp('12345678');
    }

    async addRecipientsValueForm() {
        await this.addRecipients.fieldFirstName.waitForDisplayed();
        await this.addRecipients.fieldFirstName.setValue({value: user.beneficiary.name});
        await this.addRecipients.fieldLastName.waitForDisplayed();
        await this.addRecipients.fieldLastName.setValue({value: user.beneficiary.lastName});
        await this.addRecipients.fieldSecondLastName.waitForDisplayed();
        await this.addRecipients.fieldSecondLastName.setValue({value: user.beneficiary.secondLastName});
        await this.addRecipients.fieldRelationType.waitForClickable();
        await this.addRecipients.fieldRelationType.selectOption({option: user.beneficiary.relationship});
        await (await this.addRecipients.fieldBirthDate.waitForEnabled()).sendKeys({ keys: user.beneficiary.birthDay.split('-').reverse().join('') });
    }

    async addNewAddressForm() {
        await this.addRecipients.fieldCP.waitForDisplayed();
        await this.addRecipients.fieldCP.setValue({value: user.address.zipCode});
        await this.addRecipients.colony.waitForClickable();
        await this.addRecipients.colony.selectOption({option: user.address.colony});
        await this.addRecipients.street.waitForDisplayed();
        await this.addRecipients.street.setValue({value: user.address.street});
        await this.addRecipients.number.waitForDisplayed();
        await this.addRecipients.number.setValue({value: user.address.outerN});
    }

    async successPercentage(){
        await this.multiStep.stepTwo.btnContinueMultiStep.waitForDisplayed();
        await this.multiStep.stepTwo.btnContinueMultiStep.click();
        await this.multiStep.stepTwo.btnFinalMultiStep.waitForDisplayed();
        await this.multiStep.stepTwo.btnFinalMultiStep.click();
        await this.fillOtp('12345678');
    }
    async sendPercentage(option) {
        switch(option) {
            case 'one':
                await this.multiStep.stepTwo.cleanPercentageOne.waitForDisplayed();
                await this.multiStep.stepTwo.cleanPercentageOne.click();
                await this.multiStep.stepTwo.percentageOne.waitForDisplayed();
                await this.multiStep.stepTwo.percentageOne.setValue({value: user.beneficiary.percentageOne});
                break;
            case 'two':
                await this.sendPercentage('one');
                await this.multiStep.stepTwo.cleanPercentageTwo.waitForDisplayed();
                await this.multiStep.stepTwo.cleanPercentageTwo.click();
                await this.multiStep.stepTwo.percentageTwo.waitForDisplayed();
                await this.multiStep.stepTwo.percentageTwo.setValue({value: user.beneficiary.percentageTwo});
                break;
            case 'three':
                await this.sendPercentage('two');
                await this.multiStep.stepTwo.cleanPercentageThree.waitForDisplayed();
                await this.multiStep.stepTwo.cleanPercentageThree.click();
                await this.multiStep.stepTwo.percentageThree.waitForDisplayed();
                await this.multiStep.stepTwo.percentageThree.setValue({value: user.beneficiary.percentageThree});
                break;
            case 'four':
                await this.sendPercentage('three');
                await this.multiStep.stepTwo.cleanPercentageFour.waitForDisplayed();
                await this.multiStep.stepTwo.cleanPercentageFour.click();
                await this.multiStep.stepTwo.percentageFour.waitForDisplayed();
                await this.multiStep.stepTwo.percentageFour.setValue({value: user.beneficiary.percentageFour});
                break;
            case 'five':
                await this.sendPercentage('four');
                await this.multiStep.stepTwo.cleanPercentageFive.waitForDisplayed();
                await this.multiStep.stepTwo.cleanPercentageFive.click();
                await this.multiStep.stepTwo.percentageFive.waitForDisplayed();
                await this.multiStep.stepTwo.percentageFive.setValue({value: user.beneficiary.percentageFive});
                break;
            case 'six':
                await this.sendPercentage('five');
                await this.multiStep.stepTwo.cleanPercentageSix.waitForDisplayed();
                await this.multiStep.stepTwo.cleanPercentageSix.click();
                await this.multiStep.stepTwo.percentageSix.waitForDisplayed();
                await this.multiStep.stepTwo.percentageSix.setValue({value: user.beneficiary.percentageSix});
                break;
            default:
                throw new Error(`Action '${option}' is not implemented`);
        }
    }

    async addBeneficiary(option) {
        await this.addRecipientsValueForm();
        switch(option) {
            case 'different':
                await this.addRecipients.radioBtnNewAddress.click();
                await this.addNewAddressForm();
                await this.addRecipients.btnFooter.click();
                break;
            case 'same':
                await this.addRecipients.radioBtnAddress.click();
                await this.addRecipients.btnFooter.click();
                break;
            default:
                throw new Error(`Action '${option}' is not implemented`);
        }
    }

    async changeAccount(){
        await this.multiStep.stepTwo.modifyAccount.click();
        await this.multiStep.stepTwo.btnModifyAccountContinue.waitForDisplayed();
        await this.multiStep.stepTwo.btnModifyAccountContinue.click();
        await (await (await this.multiStep.stepOne.accountNumber.elements()).value[1]
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async continueToSummary(){
        await this.multiStep.stepTwo.btnContinueMultiStep.waitForDisplayed({timeout: config.wait.L});
        await this.multiStep.stepTwo.btnContinueMultiStep.click();
    }

    async exitRecipients(){
        await this.multiStep.stepTwo.btnFinalStepClose.waitForDisplayed();
        await this.multiStep.stepTwo.btnFinalStepClose.click();
        await this.multiStep.stepTwo.btnFinalStepExit.waitForDisplayed();
        await this.multiStep.stepTwo.btnFinalStepExit.click();
    }

    async removeRecipient(){
        await this.multiStep.stepTwo.btnDeleteRecipientTwo.waitForDisplayed();
        await this.multiStep.stepTwo.btnDeleteRecipientTwo.click();
        await this.multiStep.stepTwo.btnContinueDeleteRecipient.waitForDisplayed({timeout: config.wait.M});
        await this.multiStep.stepTwo.btnContinueDeleteRecipient.click();
    }

    async editRecipientsInformation(){
        await this.multiStep.stepTwo.btnEditRecipientTwo.waitForDisplayed({timeout: config.wait.M});
        await this.multiStep.stepTwo.btnEditRecipientTwo.click();
    }

    async errorMessage(option){
        await this.goToaddRecipients();
        await this.addRecipientsValueForm();
        if (['street too long', 'postal code with fewer than five digits', 'invalid postal code'].includes(option.toLowerCase())) {
            await this.addRecipients.radioBtnNewAddress.click();
        }
        switch (option.toLowerCase()) {
            case 'empty name':
                await this.addRecipients.eraseName.waitForDisplayed();
                await this.addRecipients.eraseName.click();
                break;
            case 'empty first last name':
                await this.addRecipients.eraseLastName.waitForDisplayed();
                await this.addRecipients.eraseLastName.click();
                break;
            case 'empty second last name':
                await this.addRecipients.eraseSecondLastName.waitForDisplayed();
                await this.addRecipients.eraseSecondLastName.click();
                break;
            case 'street too long':
                await this.addRecipients.street.waitForDisplayed();
                await this.addRecipients.street.setValue({value: user.address.streetLongName});
                break;
            case 'postal code with fewer than five digits':
                await this.addRecipients.fieldCP.waitForDisplayed();
                await this.addRecipients.fieldCP.setValue({value: user.address.cpFewerThan5});
                break;
            case 'invalid postal code':
                await this.addRecipients.fieldCP.waitForDisplayed();
                await this.addRecipients.fieldCP.setValue({value: user.address.invalidCP});
                break;
            default:
                throw new Error(`Action '${option}' is not implemented`);
        }
    }

    async retryRequest() {
        let n = 0;
        while(n <= 2){
            n++;
            await (await (await this.modalError.btnWarningRetry.waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.XS}))
                .click();
        }
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.container.scrollIntoView();
                await this.header.container.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.stepOne.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'step one':
                await this.stepOne.step.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change account':
                await this.stepOne.changeAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'step two title':
                await this.stepTwo.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'step two':
                await this.stepTwo.step.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change beneficiaries':
                await this.stepTwo.changeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'step two description':
                await this.stepTwo.firstDescription.waitForDisplayed({timeout: config.wait.M});
                await this.stepTwo.lastDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'beneficiaries list':
                await this.stepTwo.beneficiaryList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'register beneficiary':
                if ((await this.stepTwo.beneficiaryList.elements()).length === 6) {
                    await this.stepTwo.registerBeneficiary.waitForDisabled({timeout: config.wait.M});
                    break;
                } else {
                    await this.stepTwo.registerBeneficiary.waitForDisplayed({timeout: config.wait.M});
                    break;
                }
            case 'full percentage':
                await this.stepTwo.assignedPercentage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message':
                await this.stepTwo.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'finish button':
                await this.finishButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept':
                await this.closeAlert.additionalElements.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel':
                await this.closeAlert.additionalElements.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon':
                await this.closeAlert.additionalElements.paragraphIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept modal error':
                (value !== 'invisible') ? await this.errorDialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.L})
                    : await this.errorDialogOperations.acceptBtn.waitForText({text: 'salir', timeout: config.wait.L, exactMatch: false});
                break;
            case 'cancel modal error':
                await this.errorDialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon modal error':
                await this.errorDialogOperations.paragraphIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description modal error':
                await this.errorDialogOperations.descriptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title black list':
                await this.modalError.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description black list':
                await this.modalError.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'finish black list':
                await this.modalError.finishBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'step 2 account':
                await this.multiStep.stepTwo.account.waitForDisplayed();
                break;
            case 'step 2 button continue':
                await this.multiStep.stepTwo.btnContinueMultiStep.waitForDisplayed();
                break;
            case 'step 2 assigned porcentage':
                await this.multiStep.stepTwo.percentageOne.waitForDisplayed();
                break;
            case 'error message':
                await this.addRecipients.messageError.waitForDisplayed();
                break;
            case 'continue button':
                await this.onboarding.btnModal.waitForDisplayed();
                break;
            case 'onboarding description':
                await this.onboarding.descModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding bullet':
                await this.onboarding.bulletModal.waitForDisplayed();
                break;
            case 'onboarding privacy link':
                await this.onboarding.privacyLink.waitForDisplayed();
                break;
            case 'icon close':
                await this.onboarding.privacyIconClose.waitForDisplayed();
                break;
            case 'warning header':
                await this.modalError.warningHeader.waitForDisplayed();
                break;
            case 'warning close':
                await this.modalError.btnWarningClose.waitForDisplayed();
                break;
            case 'warning icon':
                await this.modalError.warningIcon.waitForDisplayed();
                break;
            case 'warning button retry':
                await this.modalError.btnWarningRetry.waitForDisplayed();
                break;
            case 'warning link exit':
                await this.modalError.linkWarningExit.waitForDisplayed();
                break;
            case 'first name field':
                await this.addRecipients.fieldFirstName.waitForDisplayed();
                break;
            case 'last name field':
                await this.addRecipients.fieldLastName.waitForDisplayed();
                break;
            case 'header beneficiaries':
                await this.multiStep.header.waitForDisplayed();
                break;
            case 'accounts':
                await this.multiStep.stepOne.accounts.waitForDisplayed();
                break;
            case 'close btn':
                await this.multiStep.closeBtn.waitForDisplayed();
                break;
            case 'privacy text':
                await this.onboarding.privacyText.waitForDisplayed();
                break;
            case 'close privacy':
                await this.onboarding.privacyIconClose.waitForDisplayed();
                break;
            case 'address':
                await this.multiStep.stepTwo.address.waitForDisplayed();
                break;
            case 'success header':
                await this.successRecipients.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success illustration':
                await this.successRecipients.lustration.waitForDisplayed();
                break;
            case 'success title':
                await this.successRecipients.title.waitForDisplayed();
                break;
            case 'success date hour':
                await this.successRecipients.dateHourText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success date hour content':
                await this.successRecipients.dateHourContent.waitForDisplayed();
                break;
            case 'success account text':
                await this.successRecipients.accountText.waitForDisplayed();
                break;
            case 'success account content':
                await this.successRecipients.accountContent.waitForDisplayed();
                break;
            case 'success title recipients':
                await this.successRecipients.titleRecipients.waitForDisplayed();
                break;
            case 'success name recipient':
                await this.successRecipients.nameRecipient.waitForDisplayed();
                break;
            case 'success porcentage recipient':
                await this.successRecipients.percentageRecipient.waitForDisplayed();
                break;
            case 'success notification message':
                await this.successRecipients.notificationMessage.waitForDisplayed();
                break;
            case 'second last name field':
                await this.addRecipients.fieldSecondLastName.waitForDisplayed();
                break;
            case 'relation type field':
                await this.addRecipients.fieldRelationType.waitForDisplayed();
                break;
            case 'birth date field':
                await this.addRecipients.fieldBirthDate.waitForDisplayed();
                break;
            case 'radiobutton address':
                await this.addRecipients.radioBtnAddress.waitForDisplayed();
                break;
            case 'radiobutton new address':
                await this.addRecipients.radioBtnNewAddress.waitForDisplayed();
                break;
            case 'button continue':
                await this.addRecipients.btnFooter.waitForDisplayed();
                break;
            case 'welcome modal icon':
                await this.welcomeModal.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recomendation':
                await this.welcomeModal.recomendation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy link':
                await this.welcomeModal.privacyNotice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue':
                await this.welcomeModal.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy icon':
                await this.privacyNotice.paragraphIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy description':
                await this.privacyNotice.additionalElements.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy continue':
                await this.privacyNotice.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new ProfileRecipients();
