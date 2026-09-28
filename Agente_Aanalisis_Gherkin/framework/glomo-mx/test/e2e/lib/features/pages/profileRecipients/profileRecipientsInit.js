import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page()
class ProfileRecipientsInit extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-recipientsInit[state="active"]',
            elements: {
                header: {
                    container: '[data-tag-name="bbva-header-main"]#headerInit',
                    closeBtn: '[data-tag-name="bbva-header-main"]#headerInit #btn-right-primary'
                },
                stepOne: {
                    genericAccount: '[data-tag-name="bbva-list-card"][num-product="__ACCOUNT__"]',
                    title: 'bbva-multistep-profile-recipients #step-1 div.header bbva-core-heading:first-child',
                    step: '#step-1 #currentStep',
                    changeAccount: '#step-1 #editButton',
                    confirmChangeAccount: '#changeAccountButton',
                    cancelChange: '#step-1 div.content [text="Mantener selección y continuar"]',
                },
                //validar los inputs de porcentaje
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
                    porcentajeAsignado: '[data-tag-name="bbva-list-simple"] [text="100 %"]',
                    deleteBeneficiaryGeneric: '[main-title="__NAME__"] .actions',
                    registerBeneficiary: '#navigationLink',
                    message: 'bbva-notification-message',
                    continue: '#secondStep'
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
                    finishBtn: '#button'
                },
                deleteBeneficiary: {
                    acceptBtn: '#modal-delete [data-tag-name="bbva-button-default"]',
                    cancelBtn: '#modal-delete [data-tag-name="bbva-link"]',
                    paragraphIcon: '#modal-delete [data-tag-name="bbva-core-icon"]',
                    descriptions: '#modal-delete #helpModalContent',
                },

                conectionError: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            acceptBtn: 'div.buttons-container cells-st-button #acceptButton',
                            cancelBtn: 'div.buttons-container cells-st-button #cancelButton',
                            paragraphIcon: 'div.paragraph-template iron-icon:not([style="display: none;"])',
                            descriptions: '#modal div div.paragraph-template div:nth-child(32) p',
                        }
                    }
                ],

                finishButton: 'bbva-panel-button-fixed #button',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async chooseAccount(id = '00740010001500342879') {
        const account = id || global.user.products.investmentFunds[0].funds[0].fundId;
        const accountBtn = this.stepOne.genericAccount.specifySelector({placeholder: '__ACCOUNT__', value: account});
        await accountBtn.waitForClickable({timeout: config.wait.M});
        await accountBtn.click();
    }

    async goTo(page, otpNative) {
        switch (page) {
            case 'success':
                await this.goTo('summary');
                await (await this.finishButton.waitForClickable({timeout: config.wait.L})).click();
                await this.fillOtp('11111111', false, false, otpNative);
                break;
            case 'register beneficiary':
                await (await this.stepTwo.registerBeneficiary.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'summary':
                await this.assignPercentageToBeneficiary();
                await (await (await this.stepTwo.continue.scrollIntoView()).waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'open OTP Modal':
                await (await this.finishButton.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'open remove recipient modal':
                await (await this.stepTwo.deleteBeneficiaryGeneric.specifySelector({placeholder: '__NAME__', value: 'Pedro Chan M'}).waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'change account':
                await (await this.stepOne.changeAccount.waitForClickable({timeout: config.wait.L})).click();
                await (await this.stepOne.confirmChangeAccount.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'change beneficiary':
                await (await this.stepTwo.changeBtn.waitForClickable({timeout: config.wait.L})).click();
                await (await this.stepTwo.confirmChange.waitForClickable({timeout: config.wait.L})).click();
                await (await this.stepTwo.deleteBeneficiaryGeneric.specifySelector({placeholder: '__NAME__', value: 'Pedro Chan M'}).waitForClickable({timeout: config.wait.L})).click();
                await (await this.deleteBeneficiary.acceptBtn.waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`${page} link is not available to navigate to...`);
        }
    }

    async fillOtp(otpCode, changeFocus = false, confirmPasswordDisable = false, otpNative = false) {
        if(!otpNative) {
            await this.signModal.waitForDisplayed({timeout: config.wait.XXXL});
            await this.signModal.setPassword(otpCode, changeFocus);
        }
        if(!confirmPasswordDisable) {
            await this.signModal.confirmPassword();
        }
    }

    async assignPercentageToBeneficiary() {
        let index = 1;
        const percent = [[100], [70, 30], [50, 25, 25], [25, 25, 25, 25], [60, 10, 10, 10, 10], [25, 25, 15, 15, 10, 10]];
        const beneficiariesSize = (await this.stepTwo.beneficiaryList.elements()).length;
        if (beneficiariesSize > 1) {
            const assign = percent[beneficiariesSize - 1];
            let indice = 0;
            for (index; index <= beneficiariesSize * 2; index++) {
                if ((index % 2) === 0) {
                    const percentageInput = this.stepTwo.inputPercentGeneric.specifySelector({placeholder: '__ID__', value: index});
                    await (await percentageInput.waitForClickable({timeout: config.wait.L})).setValue({value: assign[indice]});
                    indice++;
                }
            }
        }
    }

    async closeScreen() {
        await (await this.header.closeBtn.waitForClickable()).click();
    }

    async beneficiariesListRetry(retries = 3) {
        let index = 0;
        while (index < retries) {
            await this.errorDialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.L});
            await this.errorDialogOperations.acceptBtn.waitForClickable({timeout: config.wait.L});
            await this.errorDialogOperations.acceptBtn.click();
            index++;
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
            case 'account':
                await this.stepOne.genericAccount.specifySelector({placeholder: '__ACCOUNT__', value: '00740010001500616511'}).waitForDisplayed({timeout: config.wait.L});
                await this.stepOne.genericAccount.specifySelector({placeholder: '__ACCOUNT__', value: '00740680001500850807'}).waitForDisplayed({timeout: config.wait.L});
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
                await this.stepTwo.porcentajeAsignado.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message':
                await this.stepTwo.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue':
                await this.stepTwo.continue.waitForDisplayed({timeout: config.wait.M});
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
            case 'description':
                await this.closeAlert.additionalElements.descriptions.waitForDisplayed({timeout: config.wait.M});
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
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new ProfileRecipientsInit();
